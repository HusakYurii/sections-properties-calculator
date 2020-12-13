<template>
  <div class="section">
    <h3>
      {{ `${index}. ${sectionData.name}` }}
    </h3>
    <div>
      <button
        class="change-section"
        @click.stop="$emit(`changeSection`, sectionData.id)"
      >
        Change
      </button>
      <button
        class="delete-section"
        @click.stop="$emit(`deleteSection`, sectionData.id)"
      >
        Delete
      </button>
    </div>
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
  computed: {
    index(): string {
      return String(this.sectionIndex + 1);
    },
  },
});
</script>

<style>
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
