<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" height="40px" width="40px" alt />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!authUser">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>

          <li class="nav-item" v-if="!authUser">
            <router-link class="nav-link" to="/Signup">Signup</router-link>
          </li>

          <li class="nav-item" v-if="authUser">
            <router-link class="nav-link" to="/articles/create">Create New Articl</router-link>
          </li>

          <li class="nav-item dropdown" v-if="authUser">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Hey {{authUser.name}}</a>

            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="logout()" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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