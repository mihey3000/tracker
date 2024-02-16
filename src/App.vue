<template>
  <div class="main-container">
    <h1 class="page-title">Task tracker</h1>
    <myTaskTracker />
  </div>
</template>

<script>
import MyTaskTracker from "./components/MyTaskTracker.vue";

export default {
  name: "App",
  components: {
    MyTaskTracker,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.page-title {
  margin-top: 10px;
}

.main-container {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #d8def6;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 20px;
}

h1 {
  text-align: center;
  font-family: "Bebas Neue", cursive;
}
</style>
