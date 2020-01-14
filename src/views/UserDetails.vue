<template>
  <div class="team">
    
    <h1 class="subheading grey--text">Get User Details</h1>
     <div class="small">
       
    <line-chart :chart-data="datacollection"></line-chart>
    <div class="my-2">
       <v-text-field
            label="Pick an user for the result"
            single-line v-model="user"
          ></v-text-field>
        <v-btn small color="primary" @click="fillData()">result</v-btn>
         
      </div>
   
  </div>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
               <v-text-field
            label="Pick User Name"
          ></v-text-field>
              <v-btn class="primary" @click="getUserResult()">User Result</v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
 <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
    </v-container>
    
  </div>
</template>

<script>
import axios from 'axios'
import LineChart from '../LineChart'

export default {
   
  data() {
 
    return {
           datacollection: null,
     
    
            data_to_show:{},
      team: [
         { name: 'VPC, Subent,EC2 ', role: 'Moderate', avatar: '/avatar-10.png' },
        { name: 'DynamoDb,API  Gateway, Lambda', role: 'Moderate', avatar: '/avatar-9.png' },
        { name: 'S3 Cloudfront', role: 'Critical', avatar: '/avatar-8.png' },
        { name: 'Code Commit,Code Deploy,Code Star', role: 'Moderate', avatar: '/avatar-7.png' },
        { name: 'SQS and SNS', role: 'Easy', avatar: '/avatar-6.png'}

      ],

       headers: [
          {
            text: 'User (100g serving)',
            align: 'left',
            sortable: false,
            value: 'User',
          },
          { text: 'EventName', value: 'eventname' },
       
        ],
        desserts: [
          {
            User: 'Frozen Yogurt',
            eventname: 159
           
          },
          
          
         ],
    }
  },
  methods:{
    getUserResult(){
      console.log('ji')
      
    this.user='subrata'
  
     axios.create({
      baseURL: `https://uv9y19f9ej.execute-api.us-east-1.amazonaws.com/Stage/userdetails?user=subrata&role=subrata-samsample-HelloWorldFunctionRole-1ROORXJ92J3B7&eventname=CreateSecurityGroup`,
      timeout: 15000
    }).get().then(function(data) {
       console.log(data)
       console.log(data['data'])
       //this.desserts.eventname=data['data']['result']['ResultSet']['Rows']['Data'][0]['VarCharValue']
      //    this.data_to_show= {
      //       'User':'test',
      //       'eventname':  data['data']['result']['ResultSet']['Rows']['Data'][0]['VarCharValue'],
            
      //     }
        
      //     this.temp.push(this.data_to_show)
      //     this.desserts=this.temp
      //  this.loading=false



       
    }.bind(this))


    },
       fillData () {

          axios.create({
      baseURL: `https://f584b6h9i2.execute-api.us-east-1.amazonaws.com/Stage/get_user_stats?username=${this.user}`,
      timeout: 15000
    }).get().then(function(data) {
       console.log(data)
       console.log(data['data']['response']['Items'][0]['assignment'])
       //var assignments=data['data']['response']['Items'][0]['assignment']
      //  var a =  ['machinelearning','devops','ec2publicinstance','ec2publicinstance', 'lambdaapigateway'];
      var a=data['data']['response']['Items'][0]['assignment']
var result = { };
for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}
console.log(result);
console.log(Object.keys(result));
console.log(Object.values(result));
       //this.desserts.eventname=data['data']['result']['ResultSet']['Rows']['Data'][0]['VarCharValue']
      //    this.data_to_show= {
      //       'User':'test',
      //       'eventname':  data['data']['result']['ResultSet']['Rows']['Data'][0]['VarCharValue'],
            
      //     }
        
      //     this.temp.push(this.data_to_show)
      //     this.desserts=this.temp
      //  this.loading=false
    this.datacollection = {
          labels:Object.keys(result),
          datasets: [
            {
              
              backgroundColor: '#f87979',
              data: Object.values(result)
            }
            
          ]
        }


       
    }.bind(this))

        
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
  },
    mounted () {
      this.fillData()
  },
   components: {
      LineChart
    },

}
</script>