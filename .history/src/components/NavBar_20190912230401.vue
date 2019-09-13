

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