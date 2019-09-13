<template>
  <v-layout>
    <v-flex md12>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#6A76AB"
          white
          shrink-on-scroll
          prominent
          src="https://source.unsplash.com/1600x900/?legal,law"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-5"
        >
          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
          </template>

          <v-toolbar-title>Title</v-toolbar-title>

          <div class="flex-grow-2"></div>

          <v-btn icon>
            <h1>UMUZI</h1>
            <h3 class="subheading grey--text">LAW FIRM</h3>
          </v-btn>
          <div class="flex-grow-1"></div>
          <router-link to="home">Home</router-link>

          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn icon color="yellow" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <template v-slot:extension>
            <v-tabs align-with-title background-color="grey">
              <v-tab to="/">HOME</v-tab>
              <v-tab to="/about">ABOUT-US</v-tab>
              <v-tab to="services">SERVICES</v-tab>
              <v-tab to="/contact">CONTACTS</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" max-height="600">
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      // logout: ''
    };
  },
  mounted() {
    // console.warn(this.$root);
  },
  computed: {
    authUser() {
      return this.$root.auth.user;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("auth");
      this.$noty.success("Loged out, Visit again soon!!");
      this.$root.auth = {};
    }
  }
};
</script>