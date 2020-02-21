<template>
  <div class="projects">
    <template>
      <v-row align="center" justify="center">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-snackbar v-model="snackbar" :multi-line="multiLine">
            {{ text }}
            <v-btn color="red" text @click="snackbar = false">
              Close
            </v-btn>
          </v-snackbar>
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

          <v-btn color="warning" @click="createAccount()">
            Launch Account
          </v-btn>
        </v-form>
      </v-row>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: true,
      multiLine: true,
      snackbar: false,
      text: "I'm a multi-line snackbar.",
      Username: "",
      isparmanent: "true",
      policyname: "DynamoDBSpecificTable",

      nameRules: [
        v => !!v || "choose user namr",
        v =>
          (v && v.length <= 10) || "username  must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      // items: [
      //   'DynamoDBSpecificTable',
      //   'Ec2AttachDetachVolume',
      //   'Ec2FullaccessSpecificRegion',
      //   'Ec2LaunchInSpecificSubnet',
      // ],
      items: [],
      checkbox: false,
      lazy: false
    };
  },
  methods: {
    createAccount() {
      if (this.$refs.form.validate()) {
        console.log(this.Username);
        console.log(this.email);
        axios
          .get(
            `https://azp9dxyx92.execute-api.us-east-1.amazonaws.com/Stage/getAccount?username=${this.Username}`
          )
          .then(
            function(json) {
              console.log("inside the promise");
              console.log(json);
              if (json["data"]["msg"] == "user does not exists") return true;
              else return false;
              //resolve(json);
            }.bind(this)
          )
          .then(
            function(json) {
              console.log(json);
              if (json) {
                axios.get(
                  `https://40gi94x7sk.execute-api.us-east-1.amazonaws.com/Stage/sts?username=${this.Username}&email=${this.email}&isparmanent=${this.isparmanent}&policyname=${this.select}`
                );
                this.text =
                  "Account created successfully mail has been sent with details";
                this.snackbar = true;
              } else {
                this.text = "username allready existits pick a different one ";
                this.snackbar = true;
              }
            }.bind(this)
          )
          .then(
            function(json) {
              console.log(json);
              console.log("Account has been created");

              //resolve(json);
            }.bind(this)
          );
      }
    },
    reset() {
      console.log(this.Username);
      console.log(this.email);
      this.$refs.form.reset();
    },
    getuser() {
      console.log("inside get users ");
      const l = this.loader;
      this[l] = !this[l];
      axios
        .get(
          `https://azp9dxyx92.execute-api.us-east-1.amazonaws.com/Stage/getAccount?username=${this.Username}`
        )
        .then(
          function(json) {
            console.log("inside the promise");
            console.log(json);
            //resolve(json);
          }.bind(this)
        );
      this.loader = null;
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  computed: {},
  created() {}
};
</script>
<style>
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
