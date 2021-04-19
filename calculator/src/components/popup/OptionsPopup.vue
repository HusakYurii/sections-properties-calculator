<template>
  <div id="overlay" class="hidden">
    <div id="new-section">
      <button id="close-button" @click.stop="$emit(`close`)">x</button>
      <div id="selected-options">
        <div id="image-review">
          <img :src="imageSrc" />
        </div>
        <div id="options-review">
          <div class="option">
            <label for="option-name">Section Name</label>
            <input
              id="option-name"
              type="text"
              v-model="currentSectionData.name"
            />
          </div>
          <div class="option">
            <label for="option-type">Section Type</label>
            <select id="option-type" v-model="currentSectionData.type">
              <option
                v-for="[type, name] of sectionTypesMap"
                :key="type"
                :value="type"
                >{{ name }}</option
              >
            </select>
          </div>
          <div class="option">
            <label for="option-profileType">Profile Type</label>
            <select
              id="option-profileType"
              v-model="currentSectionData.profileType"
            >
              <option
                v-for="value of profileTypesMap"
                :key="value"
                :value="value"
                >{{ value }}</option
              >
            </select>
          </div>
          <p>
            <br />

            TODO
            <br />
            <br />
            1) Когда Section Type меняестся то не сбрасывется значение
            profileType из обекта

            <br />
            <br />
            2)
            <br />@Watch("currentSectionData.type") <br />
            public onTypeChanged(): void {<br />
            this.currentSectionData.profileType = ""; <br />
            } <br />
            Изпользовал @Watch теперь проблема - каждый раз когда открываю popup
            данные устанавливаются по новой и profileType сбрасыветсяб, что не
            должно происходить
          </p>
        </div>
      </div>
      <button
        v-if="isNewSection"
        id="confirm-button"
        @click.stop="$emit(`confirm`)"
        :disabled="isDisabled"
      >
        Add Section
      </button>
      <button
        v-else
        id="change-button"
        @click.stop="$emit(`change`)"
        :disabled="isDisabled"
      >
        Change Section
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./OptionsPopup.ts"></script>

<style>
#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(36, 4, 180, 0.294);
  display: flex;
  justify-content: center;
  align-items: center;
}

#overlay.hidden {
  visibility: hidden;
}

/* The window where properties will be chosen for a new section */

#new-section {
  height: 600px;
  width: 800px;
  background-color: #019ad2;
  border-radius: 10px;
  position: relative;
}

/* Button common styles */
#confirm-button,
#change-button,
#close-button {
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  line-height: 15px;
  padding: 5px;
}

/* Close button */
#close-button {
  background-color: #e4685d;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
}

#close-button:hover {
  background-color: #eb675e;
}

#close-button:focus {
  outline: none;
}

/* Preview section */
#selected-options {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
}

#image-review {
  width: 300px;
  height: 300px;
}

#image-review > img {
  width: 100%;
  height: 100%;
}

#options-review {
  display: flex;
  flex-direction: column;
  width: 320px;
}

.option {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 5px 0px;
}

.option > * {
  width: 160px;
}

/* Confirm - to add a new section button
   Chanve - to save the cnahed props of the target section data
 */
#confirm-button,
#change-button {
  background-color: #44c767;
  color: #ffffff;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

#change-button {
  width: 150px;
}

#confirm-button:hover,
#change-button:hover {
  background-color: #5cbf2a;
}

#confirm-button:focus,
#change-button:focus {
  outline: none;
}

#confirm-button[disabled]:hover,
#change-button[disabled]:hover {
  background-color: #263b4e;
  color: #bdb6b6;
}

#confirm-button:disabled,
#change-button:disabled {
  background-color: #263b4e;
  color: #bdb6b6;
}
</style>
