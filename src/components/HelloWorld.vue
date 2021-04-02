<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      {{ contents }}
    </p>
    <button type="button" class="btn btn-primary" @click="onclick"></button>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      event: true,
      contents: "",
    };
  },
  methods: {
    onclick() {
      Event.fire("loadingSubmit", true);
      var self = this;
      this.http('post','asd','asdas')
       
        .then(function (response) {
          Event.fire("loadingSubmit", false);
          self.contents = response.status;
        })
        .catch(function () {
          Event.fire("loadingSubmit", true);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
