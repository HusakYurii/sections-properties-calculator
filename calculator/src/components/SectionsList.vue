<template>
  <div id="sections">
    <div id="add-section">
      <button @click.stop="$emit(`addNewSection`)">
        Add new section
      </button>
    </div>
    <div id="sections-list">
      <Section
        v-for="(section, index) in sections"
        v-bind:sectionData="section"
        v-bind:sectionIndex="index"
        v-bind:key="section.id"
        v-on:changeSection="onChangeSection"
        v-on:deleteSection="onDeleteSection"
      ></Section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "./Section.vue";

import { getUniqueId } from "../utils/Utils";
import { SectionTypes, SectionData } from "../data/SectionData";

export interface SectionsListInterface {
  isMaxSections: () => boolean;
  addNewSection: (data: SectionData) => void;
}

export default Vue.extend({
  name: "SectionsList",
  components: {
    Section,
  },
  data() {
    return {
      maxSections: 19,
      sections: [
        new SectionData(getUniqueId(), SectionTypes.ISection, "Main Beam"),
        new SectionData(
          getUniqueId(),
          SectionTypes.LSection,
          "Upper Left Angle"
        ),
        new SectionData(
          getUniqueId(),
          SectionTypes.CSection,
          "Upper Right Angle"
        ),
        new SectionData(
          getUniqueId(),
          SectionTypes.CSection,
          "Button Stibilizer"
        ),
      ],
    };
  },
  methods: {
    onChangeSection(id: string): void {
      console.log(id);
    },
    onDeleteSection(id: string): void {
      this.sections = this.sections.filter((section) => section.id !== id);
    },
    addNewSection(data: SectionData): void {
      this.sections.push(data);
    },
  },
  computed: {
    isMaxSections(): boolean {
      return this.sections.length >= this.maxSections;
    },
  },
});
</script>

<style>
#sections {
  position: absolute;
  width: 30%;
  height: 100%;
  padding: 5px 10px;
  top: 0;
  right: 0;
  background-color: #272d37;
}
/* Add section button container and button */
#add-section {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  padding: 10px;
}

#add-section > button {
  background-color: #337ab7;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  padding: 10px;
}

#add-section > button:hover {
  background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  background-color: #0688fa;
}

#add-section > button:active {
  position: relative;
  top: 1px;
}

#add-section > button:focus {
  outline: none;
}

/* Sections list */
#sections-list {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  padding: 10px;
}
</style>
