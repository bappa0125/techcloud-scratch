<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import Team from "./Team";
export default {
  components: { Team },
  data() {
    return {
      team: [
        {
          name: "VPC, Subent,EC2 ",
          role: "Moderate",
          avatar: "/avatar-10.png"
        },
        {
          name: "DynamoDb,API  Gateway, Lambda",
          role: "Moderate",
          avatar: "/avatar-9.png"
        },
        { name: "S3 Cloudfront", role: "Critical", avatar: "/avatar-8.png" },
        {
          name: "Code Commit,Code Deploy,Code Star",
          role: "Moderate",
          avatar: "/avatar-7.png"
        },
        { name: "SQS and SNS", role: "Easy", avatar: "/avatar-6.png" }
      ]
    };
  }
};
</script>
