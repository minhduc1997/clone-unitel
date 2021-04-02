<template>
  <div class="vld-parent">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
      :background-color="'#000000'"
      :loader="'bars'"
      :color="'#f30909'"
    ></loading>
  </div>
</template>
<script>

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  methods: {},
  created() {
    Event.listen("loadingSubmit", (data) => {
      this.isLoading = data;
    });
  },
};
</script> 