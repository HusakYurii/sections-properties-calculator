<template>
  <div id="sections">
    <!--  -->
    <div id="add-section">
      <button
        v-bind:disabled="disabled"
        @click.stop="$emit(`addSectionRequest`)"
      >
        Add new section
      </button>
    </div>
    <!--  -->
    <div id="sections-list">
      <div
        class="section"
        v-for="(section, i) in sections"
        v-bind:key="section.id"
      >
        <h3>
          {{ `${toStringIndex(i)}. ${section.name}` }}
        </h3>
        <div>
          <button
            class="change-section"
            @click.stop="$emit(`changeSectionRequest`, section.id)"
          >
            Change
          </button>
          <button
            class="delete-section"
            @click.stop="$emit(`deleteSectionRequest`, section.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator";

import { GetterTypes } from "../store";
import { SectionData } from "../store/SectionData";
/**
 * This class works only as a view part to show alist of sections
 * It holds buttons which emit different requests, like add / delete / change section
 */
@Component
export default class SectionsList extends Vue {
  @Getter(GetterTypes.Sections) private sections!: SectionData[];
  @Getter(GetterTypes.CanAddNewSection) private canAddNewSections!: boolean;

  // the logic of this class
  private get disabled(): boolean {
    return this.canAddNewSections === false;
  }

  private toStringIndex(val: number): string {
    return String(val + 1);
  }
}
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

#add-section > button:hover:not([disabled]) {
  background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  background-color: #0688fa;
}

#add-section > button:disabled {
  background-color: #263b4e;
  color: #bdb6b6;
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

/* Section item in the list */
.section {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.3s;
}
.section:hover {
  background-color: #019ad2;
}
.section > h3 {
  color: #cfd4db;
  font-weight: normal;
  white-space: nowrap;
}

.section > div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

/* Buttons common style */
.change-section,
.delete-section {
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  padding: 5px 10px;
}

/* Change sectin Button */
.change-section {
  background-color: #44c767;
  margin-right: 10px;
}

.change-section:hover {
  background-color: #5cbf2a;
}

.change-section:active {
  position: relative;
  top: 1px;
}
.change-section:focus {
  outline: none;
}

/* Delete section Button */
.delete-section {
  background-color: #e4685d;
}

.delete-section:hover {
  background-color: #eb675e;
}

.delete-section:active {
  position: relative;
  top: 1px;
}
.delete-section:focus {
  outline: none;
}
</style>
