<template>
  <div class="home">
    <h1 class="home">Home page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
    };
  },
};
</script>
