<template>
  <div class="team">
   
        
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