<template>
  <div id="sections">
    <div id="add-section">
      <button>
        Add new section
      </button>
    </div>
    <div id="sections-list">
      <Section
        v-for="(section, index) in sections"
        v-bind:sectionData="section"
        v-bind:sectionIndex="index"
        v-bind:key="section.id"
      ></Section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "./Section.vue";

import { SectionTypes, SectionData } from "../data/SectionData";

export default Vue.extend({
  name: "SectionsList",
  components: {
    Section,
  },
  data() {
    return {
      sections: [new SectionData("adf", SectionTypes.ISection, "I-Beam")],
    };
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
  color: #cfd4db;
}

#add-section {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding: 10px;
}

#add-section > button {
  background-color: #337ab7;
  border-color: #2e6da4;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
  padding: 10px;
}
#add-section > button:hover {
  background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  background-color: #0688fa;
}
#add-section > button:focus {
  outline: none;
}
</style>
