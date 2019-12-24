<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Dynamo DB', role: 'This is about data base', avatar: '/avatar-10.png' },
        { name: 'AR/VR', role: 'This is about AR intelligence', avatar: '/avatar-9.png' },
        { name: 'Console', role: 'Cost Managment', avatar: '/avatar-8.png' },
        { name: 'Migration', role: 'How to migrate', avatar: '/avatar-7.png' },
        { name: 'IAM', role: 'About Security', avatar: '/avatar-6.png'}

      ]
    }
  }
}
</script>