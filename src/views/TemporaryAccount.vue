<template>
  <div class="team">
    
    <v-card>
<v-text-field
        v-model="Username"
        :counter="10"
        :rules="nameRules"
        label="Username"
        prepend-icon="supervised_user_circle"
        required
      ></v-text-field>
       
        
        <v-card-actions>
          <v-btn color="blue" 
       @click="launchAccount(rolename)">Launch Account</v-btn>
          <v-btn color="blue" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {

  account_description:{},
  username:{},
  props:['rolename'],

  data() {
  
    return {
      loader: null,
     Username:'',
     isparmanent:'false',
   //rolename:"Ec2instancecreationregionspecific",
 
   
    nameRules: [
        v => !!v || 'choose user namr',
        v => (v && v.length <= 10) || 'username  must be less than 10 characters',

      ],
  loading: false,
      projects: [
        { name: 'Ec2publicinstance', difficulty: 'Moderate', src: '/avatar-10.png' },
        { name: 'Iam', difficulty: 'Moderate', src: '/avatar-9.png' },
        { name: 'S3-Cloudfront', difficulty: 'Critical', src: '/avatar-8.png' },
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
    getAccountDetails(payload){
      console.log(payload)
      router.push({ name: payload });
      var account_description={}
     console.log(account_description)
     
       
        // axios.get('https://dx5biqoyme.execute-api.us-east-1.amazonaws.com/Stage/getAccount?accountname=ec2public')
        //     .then( function(json) {
        //     var tmp=JSON.parse(json.data.body)
        //      //console.log(tmp)  
        //        this.account_description=tmp

        //         // The data from the request is available in a .then block
        //         // We return the result using resolve.
              
            
    // }.bind(this));
    },
   

     launchAccount(rolename){
       const l = this.loader
        this[l] = !this[l]
        //this.rolename=this.Username+'IamAssignmentRole'
       // this.rolename='iamhandson'
        this.rolename=rolename

        console.log(rolename)
       
          axios.get(`https://40gi94x7sk.execute-api.us-east-1.amazonaws.com/Stage/sts?username=${this.Username}&isparmanent=${this.isparmanent}&rolename=${this.rolename}`).then(
              function(json) {
              console.log('inside the second function')
                 console.log(json)
                  console.log(json['data']['url'])
                  var url=json['data']['url']
                 // window.location.href = url
                  var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
                  window.open(url, "_blank", strWindowFeatures);
                // The data from the request is available in a .then block
                // We return the result using resolve.
                 this.loader = null
                      }.bind(this))
               


       //////////////////////////////////////////////////////////////
    
        // axios.get(`https://qrd8oqthl2.execute-api.us-east-1.amazonaws.com/Stage/createRoles?username=${this.Username}`)
        //     .then( (json)=>{
        //       console.log(json['data']['msg'])
        //       // if (json['data']['msg']=='rolenotcreated')
        //       if ((json['data']['msg']=='rolenotcreated' )||(json['data']['msg']=='rolecreated'))
        //       {

        //     axios.get(`https://40gi94x7sk.execute-api.us-east-1.amazonaws.com/Stage/sts?username=${this.Username}&isparmanent=${this.isparmanent}&rolename=${this.rolename}`).then(
        //       function(json) {
        //       console.log('inside the second function')
        //          console.log(json)
        //           console.log(json['data']['url'])
        //           var url=json['data']['url']
        //          // window.location.href = url
        //           var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
        //           window.open(url, "_blank", strWindowFeatures);
        //         // The data from the request is available in a .then block
        //         // We return the result using resolve.
        //          this.loader = null
        //         //resolve(json);
        //     }.bind(this))
   

        //       }
        //       else 

        //       console.log('some issues with account creation')
        //     })
             
          
          

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