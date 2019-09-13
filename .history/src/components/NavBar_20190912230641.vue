<template>
  <div>
    <v-toolbar
      dark
      class="cover"
      white
      height="200px"
      prominent
      src="https://source.unsplash.com/1600x900/?legal,law"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <h1>UMUZI</h1>
      <h3 class="subheading grey--text">LAW FIRM</h3>

      <div class="flex-grow-1"></div>

      <router-link to="/">Home</router-link>
    </v-toolbar>
  </div>
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