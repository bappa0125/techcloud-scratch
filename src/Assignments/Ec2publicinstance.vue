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
    Create a VPC  subent and configure the routes  , create an EC2 instance in the VPC and install httpd
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
                <TemporaryAccount></TemporaryAccount>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      
    </v-content>
  </v-app>
        
   <h1 class="display-1">Launch an EC2 instance in your own VPC and install httpd .</h1>
<p class="subtitle-headline-1">In this exercise, you are supposed to do the below steps</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 1. Create a VPC</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 2. Create 4 subnets ( you may seek help for deciding the CIDR ranges)</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 3. Create an internet gateway</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 4. Create a routing table and configure the routes</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 5. Make 2 subnet public and 2 subnets private</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 6.&nbsp; Configure the security group</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 7. Create a T2 micro Linux instance and launch it on the public instance</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 8. Install httpd in the instance&nbsp;</p>
<p class="subtitle-headline-1">&nbsp; &nbsp; 9. Make sure you can access the apache test page from browser</p>
<p class="subtitle-headline-1">&nbsp;</p>
    <v-card>
<v-text-field
        v-model="Username"
        :counter="10"
     
        label="Username"
        prepend-icon="supervised_user_circle"
        required
      ></v-text-field>
       
        
        <v-card-actions>
          <v-btn color="blue darken-1" 
       @click="launchAccount()">Launch Account</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
 
    return {
       loader: null,
     Username:'',
     isparmanent:'false',
   //rolename:"Ec2instancecreationregionspecific",
   rolename:'iamhandson',
        
  }

},
methods:{
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