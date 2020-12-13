<template>
  <div class="section">
    <h3>{{ `#${sectionIndex} Section Type: ${sectionData.name}` }}</h3>
    <button class="change-section">Change</button>
    <button class="delete-section">Delete</button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { SectionData } from "../data/SectionData";

export default Vue.extend({
  name: "Section",
  props: {
    sectionIndex: {
      type: Number,
    },
    sectionData: {
      type: Object as PropType<SectionData>,
    },
  },
});
</script>

<style></style>
