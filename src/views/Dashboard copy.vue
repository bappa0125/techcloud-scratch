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
    <v-dialog v-model="dialog" scrollable max-width="300px" :retain-focus="false">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" v-on:click="getAccountDetails()">Goto Account</v-btn>
      </template>
      <v-card>
        <v-card-title>{{ project.name }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          
        </v-card-text>
        <v-divider></v-divider>
        {{tmp}}
        
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="launchAccount()">Launch Account</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
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
  data() {
  
    return {
      projects: [
        { name: 'VPC, Subent,EC2 ', difficulty: 'Moderate', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
        { name: 'DynamoDb,API  Gateway, Lambda', difficulty: 'Moderate', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
        { name: 'S3 Cloudfront', difficulty: 'Critical', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
        { name: 'Code Commit,Code Deploy,Code Star', difficulty: 'Moderate', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
        { name: 'SQS and SNS', difficulty: 'Easy', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'}

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
       return new Promise( function(resolve) {
       
        axios.get('https://dx5biqoyme.execute-api.us-east-1.amazonaws.com/Stage/getAccount?accountname=ec2public')
            .then( function(json) {
            var tmp=JSON.parse(json.data.body)
               
               this.account_description=tmp

                // The data from the request is available in a .then block
                // We return the result using resolve.
                resolve(json);
            });
    });
   
    },


     launchAccount(){
  
    return new Promise( function(resolve) {
        axios.get('https://dx5biqoyme.execute-api.us-east-1.amazonaws.com/Stage/getAccount?accountname=ec2public')
            .then( function(json) {

                // The data from the request is available in a .then block
                // We return the result using resolve.
                resolve(json);
            });
    });

    }


    
  }
}
</script>