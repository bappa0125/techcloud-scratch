<template>

  <div class="projects">

   <template>
         
  <v-row align="center" justify="center">
    
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="Username"
        :counter="10"
        :rules="nameRules"
        label="Username"
        prepend-icon="supervised_user_circle"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
         prepend-icon="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Roles is required']"
        label="Roles"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Parmanent Account?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="createAccount"
      >
        Create Acccount
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="createAccount()"
      >
        create Account
      </v-btn>
    </v-form>
  </v-row>
</template>

  </div>
</template>

<script>

import axios from 'axios'
export default {
  data() {
    return {
      valid: true,
      
      Username: '',
      isparmanent:'true',
      policyname:'DynamoDBSpecificTable',
    

      nameRules: [
        v => !!v || 'choose user namr',
        v => (v && v.length <= 10) || 'username  must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'DynamoDBSpecificTable',
        'Ec2AttachDetachVolume',
        'Ec2FullaccessSpecificRegion',
        'Ec2LaunchInSpecificSubnet',
      ],
      checkbox: false,
      lazy: false,
    }
  },
  methods: {
      createAccount () {
        if (this.$refs.form.validate()) {
         console.log(this.Username)
          console.log(this.email)

         axios.get(`https://40gi94x7sk.execute-api.us-east-1.amazonaws.com/Stage/sts?username=${this.Username}&email=${this.email}&isparmanent=${this.isparmanent}&policyname=${this.select}`).then( function(json) {
                 console.log(json)
                 console.log('Account has been created')
                 
                //resolve(json);
            }.bind(this));
        }
      },
      reset () {
        console.log(this.Username)
          console.log(this.email)
        this.$refs.form.reset()
         
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  computed: {
    
  },
  created() {
   
  }
}
</script>
