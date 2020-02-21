<template>
  <div>
    <v-row justify="left">
      <v-dialog
        v-model="dialog"
        scrollable
        max-width="300px"
        :retain-focus="false"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Create Account</v-btn>
        </template>
        <accountdetails></accountdetails>
      </v-dialog>
    </v-row>

    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-radio-group v-model="dialogm1" column>
          <v-radio label="Bahamas, The" value="bahamas"></v-radio>
          <v-radio label="Burundi" value="burundi"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>
