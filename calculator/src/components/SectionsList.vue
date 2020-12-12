<template>
  <div id="sections-list">
      <div id="add-section">
          <span>Add new section</span>
          <button>+</button>
      </div>
  </div>
</template>

<script lang="ts">
export default {
    name: "SectionsList"
}
</script>

<style>
    #sections-list {
        position: absolute;
        width: 30%;
        height: 100%;
        padding: 5px 10px;
        top: 0;
        right: 0;
        background-color: rgb(120, 9, 224);
    }
</style>