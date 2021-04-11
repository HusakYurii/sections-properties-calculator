<template>
  <div id="app">
    <h1>Cross Sections Properties</h1>
    <div id="calculator">
      <Canvas ref="canvas"></Canvas>

      <SectionsList
        v-on:addNewSection="onAddNewData"
        v-on:changeSection="onChangeData"
        v-on:deleteSection="onDeleteData"
        ref="sectionsList"
      ></SectionsList>

      <Results ref="results"></Results>

      <OptionsPopup
        v-on:close="closePopup"
        v-on:confirm="confirmNewData"
        v-on:change="confirmChangedData"
        ref="optionsPopup"
      ></OptionsPopup>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

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
