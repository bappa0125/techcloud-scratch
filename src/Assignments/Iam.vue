<template>

  <div class="team">
    <div id="app">
   <v-app dark="grey">
   
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
    Create an IAM User's Login profile and use CLI to Login!
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
                      
                      <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Enterprise S</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                     <v-expansion-panels
      
      
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Panel 1</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
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
                  For parmanenet account you will have your own credentials and you can login from multiple system 
                  as many times as you want,it is your own AWS account with access to the services .
                      <PermanentAccount></PermanentAccount>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Temporary Account</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <TemporaryAccount></TemporaryAccount>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      
    </v-content>
  </v-app>
 </div>
       <v-layout
            column
            align-center
            justify-center
            
          >
<template>

</template>
  
         </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import PermanentAccount from '../views/PermanentAccount'
import TemporaryAccount from '../views/TemporaryAccount'
export default {
  data() {
 
    return {
       loader: null,
     Username:'',
     isparmanent:'false',
   //rolename:"Ec2instancecreationregionspecific",
   rolename:'iamhandson',
   nameRules: [
        v => !!v || 'choose user namr',
        v => (v && v.length <= 10) || 'username  must be less than 10 characters',
      ],

       items: [{
      id: "1",
      content: '<iframe width="100%" height="500px" src="https://www.youtube.com/embed/zjcVPZCG4sM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
            { id: "2",
      content: '<iframe width="100%" height="500px" src="https://www.youtube.com/embed/zjcVPZCG4sM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}
    ]
        
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
},
components:{
 PermanentAccount:PermanentAccount,
 TemporaryAccount:TemporaryAccount
}
}
</script>