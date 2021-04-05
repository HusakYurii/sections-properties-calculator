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

      <OptionsPopup
        v-on:close="closePopup"
        v-on:confirm="confirmOptions"
        v-on:change="confirmChangedOptions"
        ref="optionsPopup"
      ></OptionsPopup>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator";

// OptionsPopup
import { PopupInterface } from "./components/popup/OptionsPopup";
import OptionsPopup from "./components/popup/OptionsPopup.vue";

// SectionsList
import SectionsList from "./components/list/SectionsList.vue";

// Results
import Results from "./components/results/Results.vue";

// Canvas
import Canvas from "./components/canvas/Canvas.vue";

// store
import { ActionTypes, GetterTypes, StateTypes } from "./store";
import { NullSectionData } from "./store/NullSectionData";
import { SectionData } from "./store/SectionData";

import { wrapRefsWith } from "./utils/Utils";
/**
 * This class acts as a main controller
 */
@Component({
  components: {
    Canvas,
    SectionsList,
    OptionsPopup,
    Results,
  },
})
export default class App extends Vue {
  @Getter(GetterTypes.Sections) public sections!: SectionData[];
  @Getter(GetterTypes.CanAddNewSection) public canAddNewSection!: boolean;

  @Action(ActionTypes.DeleteSection) public deleteSection!: (
    id: string
  ) => void;
  @Action(ActionTypes.AddSectionData) public addSectionData!: (
    data: SectionData
  ) => void;
  @Action(ActionTypes.UpdateSectionData) public updateSectionData!: (
    newData: SectionData
  ) => void;
  @Action(ActionTypes.SetCurrentState) public setCurrentRequestType!: (
    type: StateTypes
  ) => void;

  // the logic of this class
  public closePopup(): void {
    this._closeOptionsPopup();
    this.setCurrentRequestType(StateTypes.None);
  }

  public confirmOptions(): void {
    this._closeOptionsPopup();
    this.addSectionData(new NullSectionData());
    this.setCurrentRequestType(StateTypes.None);
  }

  public confirmChangedOptions(): void {
    this._closeOptionsPopup();
    this.setCurrentRequestType(StateTypes.None);
  }

  public onAddSectionRequest(): void {
    this.setCurrentRequestType(StateTypes.AddSection);
    this._showOptionsPopup();
  }

  public onChangeSectionRequest(id: string): void {
    this.setCurrentRequestType(StateTypes.ChangeSection);
    this._showOptionsPopup();
  }

  public onDeleteSectionRequest(id: string): void {
    this.setCurrentRequestType(StateTypes.DeleteSection);
    this.deleteSection(id);
  }

  private _closeOptionsPopup(): void {
    const popup = wrapRefsWith<PopupInterface>(
      this,
      "optionsPopup"
    ) as PopupInterface;
    popup.hide();
  }

  private _showOptionsPopup(): void {
    const popup = wrapRefsWith<PopupInterface>(
      this,
      "optionsPopup"
    ) as PopupInterface;
    popup.show();
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
