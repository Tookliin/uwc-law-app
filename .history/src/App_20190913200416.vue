<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar
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