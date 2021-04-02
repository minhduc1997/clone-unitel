<template>
  <div id="app">
    <Loading />
    <Header />
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
import Nav from "@/components/layout/Nav.vue";
import Loading from "@/components/layout/Loading.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    Nav,
    Loading,
  },
};
</script>