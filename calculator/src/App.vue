<template>
  <div id="app">
    <h1>Cross Sections Properties</h1>
    <div id="calculator">
      <Canvas ref="canvas"></Canvas>

      <SectionsList
        v-on:addNewSection="onAddNewSection"
        v-on:changeSection="onChangeSection"
        v-on:deleteSection="onDeleteSection"
        ref="sectionsList"
      ></SectionsList>

      <Results ref="results"></Results>

      <OptionsPopup
        v-on:close="closePopup"
        v-on:confirm="confirmNewSection"
        v-on:change="confirmChangedSection"
        ref="optionsPopup"
      ></OptionsPopup>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Action, Getter } from "vuex-class";
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
import {
  ActionTypes,
  CurrentSectionData,
  GetterTypes,
  StateTypes,
} from "./store";
import { SectionData } from "./store/SectionData";

import { getUniqueId, wrapRefsWith } from "./utils/Utils";
import { SectionTypes } from "./db/DataBase";
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
  @Getter(GetterTypes.Sections) public sections!: Array<SectionData>;

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
  @Action(ActionTypes.UpdateCurrentSectionData)
  public updateCurrentSectionData!: (
    props: Partial<CurrentSectionData>
  ) => void;

  // the logic of this class
  public closePopup(): void {
    wrapRefsWith<PopupInterface>(this, "optionsPopup").hide();
    this.setCurrentRequestType(StateTypes.None);
    this.updateCurrentSectionData({
      type: SectionTypes.None,
      profileType: "",
      name: "",
    });
  }

  public confirmNewSection(): void {
    const popup = wrapRefsWith<PopupInterface>(this, "optionsPopup");
    const {
      gmProperties,
      psProperties,
      seProperties,
    } = SectionData.createEmpty();

    this.addSectionData(
      new SectionData({
        id: getUniqueId(),
        name: popup.name,
        type: popup.type,
        profileType: popup.profileType,
        gmProperties,
        seProperties,
        psProperties,
      })
    );
    this.setCurrentRequestType(StateTypes.None);
    popup.hide();
  }

  public confirmChangedSection(): void {
    wrapRefsWith<PopupInterface>(this, "optionsPopup").hide();
    this.setCurrentRequestType(StateTypes.None);
  }

  public onAddNewSection(): void {
    this.setCurrentRequestType(StateTypes.AddNewSection);
    this.updateCurrentSectionData({
      name: `Section-${Math.floor(Math.random() * 1000)}`,
      type: SectionTypes.None,
      profileType: "",
    });
    wrapRefsWith<PopupInterface>(this, "optionsPopup").show();
  }

  public onChangeSection(id: string): void {
    const targetSection = this.sections.find((section) => section.id === id);
    this.updateCurrentSectionData({
      name: targetSection.name,
      type: targetSection.type,
      profileType: targetSection.profileType,
    });
    this.setCurrentRequestType(StateTypes.ChangeSection);
    wrapRefsWith<PopupInterface>(this, "optionsPopup").show();
  }

  public onDeleteSection(id: string): void {
    this.setCurrentRequestType(StateTypes.DeleteSection);
    this.deleteSection(id);
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
