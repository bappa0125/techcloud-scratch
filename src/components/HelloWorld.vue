<template>
  <div class="my-2 text-center">
    <httpec2 v-on:callsteps="getResult_StepWiseResult($event)"></httpec2>
    <!-- <v-btn small @click="getResult()">Normal</v-btn> -->
    <!-- <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="getResult_StepWiseResult('Root','CreateSubnet')">
      Subent Creatin
      <template v-slot:loader>
        <span>Getting result...</span>
      </template>
    </v-btn> -->
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.steps_performed }}</td>
        <v-chip :color="getColor(props.item.result)" dark>{{
          props.item.result
        }}</v-chip>
        <td class="text-xs-left">{{ props.item.user }}</td>
        <td class="text-xs-left">{{ props.item.resource_effected }}</td>
        <td class="text-xs-left">{{ props.item.comments }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Httpec2 from "./httpec2instance";
import axios from "axios";
export default {
  name: "Wip",
  components: { httpec2: Httpec2 },
  data() {
    return {
      loading: false,
      user: "Root",
      data_to_show: {},
      temp: [],
      headers: [
        {
          text: "Steps Perfromed",
          align: "left",
          sortable: false,
          value: "steps_performed"
        },
        { text: "Result", value: "result" },
        { text: "User", value: "user" },
        { text: "Resource Effected", value: "resource_effected" },
        { text: "Comments", value: "comments" }
      ],
      desserts: [
        {
          steps_performed: "Steps perfromed",
          result: "Pass or Fail for this step",
          user: "User who took the test",
          resource_effected: "Number of resources created for this step",
          comments: "Any comments"
        }
      ]
    };
  },

  mounted() {},

  methods: {
    getResult() {
      this.loading = true;
      axios
        .create({
          baseURL:
            "https://2pgl0fwux4.execute-api.us-east-1.amazonaws.com/Stage/hello?user=Root&eventname=CreateSubnet",
          timeout: 15000
        })
        .get()
        .then(data => {
          console.log(data.data.body);

          this.loading = false;
        });
    },
    getResult_StepWiseResult(eventname) {
      console.log(eventname);
      //this.desserts=[]

      this.user = "Root";
      this.loading = true;
      this.data_to_show = {};
      console.log(this.user);
      axios
        .create({
          baseURL: `https://2pgl0fwux4.execute-api.us-east-1.amazonaws.com/Stage/hello?user=${this.user}&eventname=${eventname}`,
          timeout: 15000
        })
        .get()
        .then(data => {
          this.data_to_show = {
            steps_performed: data.data.body.event,
            result: data.data.body.status,
            user: data.data.body.user,
            resource_effected: data.data.body.total_resource_affected,
            comments: data.data.body.message
          };

          this.temp.push(this.data_to_show);
          this.desserts = this.temp;
          this.loading = false;
        });
    },
    getColor(result) {
      if (result == "Fail") return "red";
      else if (result == "Pass") return "green";
      else return "dark";
    }
  }
  /////////end of method list
};
</script>

<style scoped></style>
