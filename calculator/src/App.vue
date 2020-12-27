<template>
  <div id="app">
    <h1>Cross Sections Properties</h1>
    <div id="calculator">
      <Canvas ref="canvas"></Canvas>

      <SectionsList
        v-on:addSectionRequest="onAddSectionRequest"
        v-on:changeSectionRequest="onChangeSectionRequest"
        v-on:deleteSectionRequest="onDeleteSectionRequest"
        ref="sectionsList"
      ></SectionsList>

      <Results ref="results"></Results>

      <SectionPreviewPopup
        v-on:close="closePopup"
        v-on:confirm="confirmPopup"
        ref="newSectionPopup"
      ></SectionPreviewPopup>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator";

import { PopupInterface } from "./components/SectionPreviewPopup.vue";
import SectionPreviewPopup from "./components/SectionPreviewPopup.vue";
import SectionsList from "./components/SectionsList.vue";
import Results from "./components/Results.vue";
import Canvas from "./components/Canvas.vue";

import { ActionTypes, GetterTypes, StateTypes } from "./store";
import { SectionData } from "./store/SectionData";

import { getUniqueId, wrapRefsWith } from "./utils/Utils";
/**
 * This class acts as a main controller
 */
@Component({
  components: {
    Canvas,
    SectionsList,
    SectionPreviewPopup,
    Results,
  },
})
export default class App extends Vue {
  @Getter(GetterTypes.Sections) private sections!: SectionData[];
  @Getter(GetterTypes.CanAddNewSection) private canAddNewSection!: boolean;

  @Action(ActionTypes.DeleteSection) private deleteSection!: (
    id: string
  ) => void;
  @Action(ActionTypes.AddSectionData) private addSectionData!: (
    data: SectionData
  ) => void;
  @Action(ActionTypes.UpdateSectionData) private updateSectionData!: (
    newData: SectionData
  ) => void;
  @Action(ActionTypes.SetCurrentState) private setCurrentRequestType!: (
    type: StateTypes
  ) => void;

  // the logic of this class
  private closePopup(): void {
    this.closeSectionPopup();
    this.setCurrentRequestType(StateTypes.None);
  }

  private confirmPopup(): void {
    this.closeSectionPopup();
    this.setCurrentRequestType(StateTypes.None);
  }

  private onAddSectionRequest(): void {
    this.setCurrentRequestType(StateTypes.AddSection);
    this.showNewSectionPopup();
  }

  private onChangeSectionRequest(id: string): void {
    this.setCurrentRequestType(StateTypes.ChangeSection);
    this.showNewSectionPopup();
  }

  private onDeleteSectionRequest(id: string): void {
    this.setCurrentRequestType(StateTypes.DeleteSection);
    this.deleteSection(id);
  }

  private closeSectionPopup(): void {
    const popup = wrapRefsWith<PopupInterface>(this, "newSectionPopup");
    popup?.hide();
  }

  private showNewSectionPopup(): void {
    const popup = wrapRefsWith<PopupInterface>(this, "newSectionPopup");
    popup?.show();
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
