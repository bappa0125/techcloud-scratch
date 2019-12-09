<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
  <v-data-table
    :headers="headers"
    :items="desserts"
  
    class="elevation-1"
  ></v-data-table>
   <v-btn small color="primary" v-on:click="addTodo()">Primary</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-1'});

AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'xxxxxxx'});
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: '',
      
 headers: [
          {
            text: 'Msg_Id',
            align: 'left',
            sortable: false,
            value: 'msg_id',
          },
          { text: 'From', value: 'from' },
          { text: 'Cc', value: 'CC' },
          { text: 'Subject', value: 'subject' },
          { text: 'Priority', value: 'Priority' },
          { text: 'Department', value: 'Department' },
        ],

        desserts: [
          {
            name: 'Frozen Yogurt',
            from: 200,
            cc: 6.0,
            subject: 24,
            priority: 4.0,
            department: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
        
        ],

        
    }
  },
    methods: {
   addTodo() {
     this.desserts=[]
const dynamodb =new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
console.log('The name is')

dynamodb.scan({ TableName: 'emailclassification' }).promise()
.then(
  function(data) {
    console.log("getting all the data from db" + data.Items);
   let datapack=[];
   
  datapack = datapack.concat(data.Items);
     //this.desserts = datapack.concat(data.Items);
    
    console.log(datapack)
  datapack.forEach(element=>console.log(element.Department)
  
  )
  return datapack
  }).then((datapack)=>{
     this.desserts=datapack
  } )
  .catch( 
    function(err) {
    console.error(err, err.stack);
  });
         
    }
  }

  
};
</script>
