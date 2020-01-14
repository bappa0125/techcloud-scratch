<template>
  <div class="team">
    <h1 class="subheading grey--text">Choose an Account type you want to vend</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
                 <v-img
      class="white--text align-end"  height="200px"  :src="project.src">
      <v-card-title>{{ project.name }}</v-card-title>
        </v-img>
        
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ project.name }}</div>
              <div class="grey--text">{{ project.difficulty }}</div>
            </v-card-text>
   <v-card-actions>
    <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable fullscreen :retain-focus="false">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" v-on:click="getAccountDetails()">Goto Assignment</v-btn>
      </template>
      <v-card>
        <v-list-item five-line>
          
      <v-list-item-content>
        <div class="overline mb-4">{{account_description['accconttype']}}</div>
        <v-list-item-title class="headline mb-1">{{account_description['accconttype']}}</v-list-item-title>
        <v-list-item-subtitle>{{account_description['accountdescription']}}</v-list-item-subtitle>
      </v-list-item-content>


      <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
     
      
       </v-list-item>
     
      <!-- <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="`Radio ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group> -->
      <v-text-field
        v-model="Username"
        :counter="10"
        :rules="nameRules"
        label="Username"
        prepend-icon="supervised_user_circle"
        required
      ></v-text-field>
       
        
        <v-card-actions>
          <v-btn color="blue darken-1" :loading="loading" :disabled="loading"
       @click="launchAccount()">Launch Account</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
            
   </v-card-actions>

  </v-card>
          <!-- </v-card> -->
          
        </v-flex>
      </v-layout>
      

    </v-container>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {

  account_description:{},
  username:{},
  data() {
  
    return {
      loader: null,
     Username:'',
     isparmanent:'false',
   rolename:"Ec2instancecreationregionspecific",
   
    nameRules: [
        v => !!v || 'choose user namr',
        v => (v && v.length <= 10) || 'username  must be less than 10 characters',

      ],
  loading: false,
      projects: [
        { name: 'VPC, Subent,EC2 ', difficulty: 'Moderate', src: '/avatar-10.png' },
        { name: 'DynamoDb,API  Gateway, Lambda', difficulty: 'Moderate', src: '/avatar-9.png' },
        { name: 'S3 Cloudfront', difficulty: 'Critical', src: '/avatar-8.png' },
        { name: 'Code Commit,Code Deploy,Code Star', difficulty: 'Moderate', src: '/avatar-7.png' },
        { name: 'SQS and SNS', difficulty: 'Easy', src: '/avatar-6.png'}

      ],
       dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        account_description:{},
        account_used:[],
      
    }
  },
  methods:{
    getAccountDetails(){
      var account_description={}
     console.log(account_description)
     
       
        axios.get('https://dx5biqoyme.execute-api.us-east-1.amazonaws.com/Stage/getAccount?accountname=ec2public')
            .then( function(json) {
            var tmp=JSON.parse(json.data.body)
             //console.log(tmp)  
               this.account_description=tmp

                // The data from the request is available in a .then block
                // We return the result using resolve.
              
            
    }.bind(this));
    },
   

     launchAccount(){
       const l = this.loader
        this[l] = !this[l]

       
    
        axios.get(`https://40gi94x7sk.execute-api.us-east-1.amazonaws.com/Stage/sts?username=${this.Username}&isparmanent=${this.isparmanent}&rolename=${this.rolename}`)
            .then( function(json) {
              console.log('inside the promise')
                 console.log(json)
                  console.log(json['data']['url'])
                  var url=json['data']['url']
                 // window.location.href = url
                  var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
                  window.open(url, "_blank", strWindowFeatures);
                // The data from the request is available in a .then block
                // We return the result using resolve.
                 this.loader = null
                //resolve(json);
            }.bind(this));
   

    }


    
  }
}
</script>
<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>