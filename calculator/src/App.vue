<template>
  <div id="app">
    <h1>Cross Sections Properties</h1>
    <div id="calculator">
        <Canvas></Canvas>
        <SectionsList></SectionsList>
        <Results></Results>
    </div>
  </div>
</template>

<script lang="ts">
import Canvas from "./components/Canvas.vue";
import SectionsList from "./components/SectionsList.vue";
import Results from "./components/Results.vue";

export default {
  components: {
    Canvas,
    SectionsList,
    Results
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
#app > h1 {
  color: white;
  text-align: center;
  height: 60px;
  margin: 0;
  padding: 10px;
}
#calculator {
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
}
</style>
