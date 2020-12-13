<template>
  <div id="app">
    <h1>Cross Sections Properties</h1>
    <div id="calculator">
      <Canvas ref="canvas"></Canvas>

      <SectionsList
        v-on:addNewSection="showNewSectionPopup"
        ref="sectionsList"
      ></SectionsList>

      <Results ref="results"></Results>

      <NewSectionPopup
        v-on:closePopup="closeSectionPopup"
        v-on:addSection="addNewSection"
        ref="newSectionPopup"
      ></NewSectionPopup>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NewSectionPopup, {
  SectionPopupInterface,
} from "./components/NewSectionPopup.vue";
import SectionsList, {
  SectionsListInterface,
} from "./components/SectionsList.vue";
import Results from "./components/Results.vue";
import Canvas from "./components/Canvas.vue";

import { getUniqueId, wrapRefsWith } from "./utils/Utils";
import { SectionData, SectionTypes } from "./data/SectionData";

@Component({
  components: {
    Canvas,
    SectionsList,
    NewSectionPopup,
    Results,
  },
})
export default class App extends Vue {
  public closeSectionPopup(): void {
    const popup = wrapRefsWith<SectionPopupInterface>(this, "newSectionPopup");
    popup?.hide();
  }

  public showNewSectionPopup(): void {
    const popup = wrapRefsWith<SectionPopupInterface>(this, "newSectionPopup");
    popup?.show();
  }

  public addNewSection(): void {
    this.closeSectionPopup();

    const sectionsList = wrapRefsWith<SectionsListInterface>(
      this,
      "sectionsList"
    );
    sectionsList?.addNewSection(
      new SectionData(getUniqueId(), SectionTypes.TubeSection, "Test Section")
    );
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
