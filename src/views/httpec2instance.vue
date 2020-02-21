<template>
  <div class="my-2 text-center">
    <!-- <v-btn small @click="getResult()">Full Result</v-btn> -->
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:item.steps_performed="{ item }">
        <td class="text-xs-left pruple">
          <v-btn
            small
            color="primary"
            @click="getResult_perStep(item.eventname)"
            >{{ item.steps_performed }}</v-btn
          >
        </td>
      </template>
      <template v-slot:item.calories="{ item }">
        <v-chip :color="getColor(item.calories)" dark>{{
          item.calories
        }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Steps to be Perfromed",
          align: "left",
          sortable: false,
          value: "steps_performed"
        },
        { text: "Description", value: "description" },
        { text: "Difficulty", value: "difficulty" },
        { text: "Area", value: "area" }
      ],
      desserts: [
        {
          steps_performed: "VPC Creation",
          description:
            "User need to create VPC , this should not be the default VPC",
          difficulty: "Moderate",
          area: "Networking",
          eventname: "CreateVpc"
        },
        {
          steps_performed: "Route Table Creation",
          description:
            "User need to create 4 subnets, two public and two private",
          difficulty: "Moderate",
          area: "Networking",
          eventname: "CreateRouteTable"
        },
        {
          steps_performed: "NAT Gateway Creation",
          description:
            "User need to create NAT gatway and configure the routes ",
          difficulty: "Moderate",
          area: "Networking",
          eventname: "CreateNatGateway"
        },
        {
          steps_performed: "Internet Gateway Creation",
          description:
            "User need to create Internet Gateway and configure the routes",
          difficulty: "Moderate",
          area: "Networking",
          eventname: "CreateInternetGateway"
        },
        {
          steps_performed: "Ec2 instace creation",
          description:
            "User will launch the EC2 instance and install httpd there and configure http server ofer there and then configure thte security group",
          difficulty: "Moderate",
          area: "infrastructure",
          eventname: "RunInstances"
        }
      ]
    };
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
    getResult_perStep(eventname) {
      this.$emit("callsteps", eventname);
    }
  }
};
</script>
