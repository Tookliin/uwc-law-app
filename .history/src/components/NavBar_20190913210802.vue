<template>
  <div>
    <v-toolbar
      dark
      class="cover"
      white
      height="300px"
      prominent
      src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjs3YClv87kAhXhyIUKHWnLDxoQjRx6BAgBEAQ&url=https%3A%2F%2Fdribbble.com%2Fshots%2F5788521-House-Husband&psig=AOvVaw3pTihxpBGw4pkcJ6FgnR4R&ust=1568487989507084"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(29,34,52,.7)"></v-img>
      </template>

      <v-toolbar-title
        src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjs3YClv87kAhXhyIUKHWnLDxoQjRx6BAgBEAQ&url=https%3A%2F%2Fdribbble.com%2Fshots%2F5788521-House-Husband&psig=AOvVaw3pTihxpBGw4pkcJ6FgnR4R&ust=1568487989507084"
      >
        <h1 class="text-green my-5 py-5">
          R K &
          <span color="red">Queens Of Ironing</span>
        </h1>
        <!-- <span>&</span>
        <h3 class="subheading grey--text">Son</h3>-->
      </v-toolbar-title>

      <div class="flex-grow-1 my-3"></div>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About-U s</v-btn>
        <v-btn text to="/contact">Contact-Us</v-btn>
        <v-btn text to="/services">Services</v-btn>
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