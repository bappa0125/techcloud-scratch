<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="sidebar" class="primary" app>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <img class="text-lg-center" src="/accenture.png" />
            </v-avatar>
            <p class="white--text subheading mt-1">AABG INDIA</p>
          </v-flex>
        </v-layout>
        <v-list>
          <v-list-item v-for="item in links" :key="item.text" :to="item.route">
            <v-list-item-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="white--text subheading mt-1">{{
              item.text
            }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar class="primary" app>
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon
            @click="sidebar = !sidebar"
            class="grey--text"
          ></v-app-bar-nav-icon>
        </span>
        <v-toolbar-title class="white--text subheading mt-1">
          <span>AVM</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in links" :key="item.text" :to="item.route">
            <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
            {{ item.text }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",
  appTitle: "Awesome App",

  // components: {
  //   HelloWorld,
  // },

  data() {
    return {
      sidebar: false,
      links: [
        { icon: "dashboard", text: "Assignments", route: "/" },
        { icon: "person", text: "UserDetails", route: "/UserDetails" },
        {
          icon: "person",
          text: "Assignment Result",
          route: "/AssignmentResult"
        }
      ]
    };
  }
};
</script>
