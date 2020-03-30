<template>
  <div class="team">
   <v-app >
   
    <v-content>
  

      <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
             <div class="display-3">
    Create an Ec2 instance within default VPC,install httpd access through Web browser
    </div>
              
      <section>
         
     
   <v-content>
      <v-container>
        <v-carousel>
          <v-carousel-item v-for="item in items" :key="item.id" v-html="item.content">
          </v-carousel-item>
          </v-carousel>
      </v-container>
    </v-content>
         
      </section>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md12>
                  
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      
                      <v-icon x-large class="blue--text text--lighten-2 ">lock</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">IAM Basics</div>
                    </v-card-title>
                    <v-card-text >
                      <div class="subtitle-1">
                         As part of a new application development your dev team has requested you that they need an EC2 linux instance (T2 micro).
                         They also need you to make sure this instance is publically accessable.Once you spin up the instance you need to make sure the instance is having httpd installed  and the test page is accessable publically form a web broweser.
                      </div>
                    
                    </v-card-text>
                     <v-expansion-panels
      
      
      multiple
    >

      <v-expansion-panel>
        <v-expansion-panel-header>Create a  non default VPC </v-expansion-panel-header>
        <v-expansion-panel-content>
             Create a VPC in us-east-1 region 
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Create User</v-expansion-panel-header>
        <v-expansion-panel-content>
          The user name that you create should be of format <strong> &lt;username&gt;</strong><span class="purple lighten-4"> Example:-your user 
           name is test the user you are going to create should be of name   test-techcloud</span> other names are not allowed
        
        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
                  </v-card>
                </v-flex>
                
               
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm6>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Parmanent Account</div>
                </v-card-title>
                <v-card-text>
                  <div class="subtitle-1">
                  For parmanenet account you will have your own credentials and you can login from multiple system 
                  as many times as you want,it is your own AWS account with access to the services</div>
                      <PermanentAccount></PermanentAccount>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div h2 class="headline">Temporary Account</div>
                </v-card-title>
                <v-card-text class="font-weight-light font-weight-bold">
                    <div class="subtitle-1">
                This a temporary account where you will be  directly navigated to AWS console, You will not have any credentials to the 
                account .The session will be live for 18 hours (even if you close the browser or get offline)</div>
                </v-card-text>
                <TemporaryAccount :rolename="rolename"></TemporaryAccount>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      
    </v-content>
  </v-app>

  
  </div>
</template>

<script>

import PermanentAccount from '../views/PermanentAccount'
import TemporaryAccount from '../views/TemporaryAccount'
export default {
  data() {
 
    return {
       loader: null,
     Username:'',
     isparmanent:'false',
   //rolename:"Ec2instancecreationregionspecific",
   rolename:'ec2tagrestricted',
   

       items: [{
      id: "1",
      content: '<iframe width="100%" height="500px" src="https://www.youtube.com/watch?v=cl2hHYpuxos" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
            { id: "2",
      content: '<iframe width="100%" height="500px" src="https://www.youtube.com/watch?v=cl2hHYpuxos" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}
    ]
        
        
  }

},
methods:{
    
},
components:{
 PermanentAccount:PermanentAccount,
 TemporaryAccount:TemporaryAccount
}
}
</script>