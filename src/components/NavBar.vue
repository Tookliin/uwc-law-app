<template>
  <div>
    <v-toolbar
      sm="12"
      dark
      class="cover"
      white
      height="300px"
      prominent
      src="https://source.unsplash.com/1600x900/?legal,law"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(29,34,52,.7)"
          sm="12"
        ></v-img>
      </template>

      <v-toolbar-title>
        <h1 class="text-green my-5 py-5">
          R K &
          <span color="red">Queens Of Ironing</span>
        </h1>
        <!-- <span>&</span>
        <h3 class="subheading grey--text">Son</h3>-->
      </v-toolbar-title>

      <div class="flex-grow-1 my-3" sm="12"></div>

      <v-toolbar-items sm="12">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About-U s</v-btn>
        <v-btn text to="/contact">Contact-Us</v-btn>
        <v-btn text to="/services">Services</v-btn>
        <v-btn text to="/policies">Policies</v-btn>
      </v-toolbar-items>
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