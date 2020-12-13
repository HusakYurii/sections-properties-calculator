<template>
  <div id="results"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Results"
});
</script>

<style>
#results {
  position: absolute;
  width: 70%;
  height: 40%;
  padding: 5px 10px;
  left: 0;
  bottom: 0;
  background-color: rgb(36, 151, 46);
}
</style>
