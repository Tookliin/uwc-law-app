<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
<style lang="css">
* {
  font-family: "Poppins", sans-serif;
  border-radius: 0px !important;
}

body {
  background-color: #f5f3ef;
}
</style>