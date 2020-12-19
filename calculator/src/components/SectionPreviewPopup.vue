<template>
  <div id="overlay" class="hidden">
    <div id="new-section">
      <button id="close-button" @click.stop="$emit(`close`)">x</button>
      <button
        v-if="isNewSection"
        id="confirm-button"
        @click.stop="$emit(`confirm`)"
      >
        Add Section
      </button>
      <button v-else id="change-button" @click.stop="$emit(`change`)">
        Change Section
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator";

import { GetterTypes, RequestTypes } from "../store";

export interface PopupInterface {
  hide: () => void;
  show: () => void;
}

@Component
export default class SectionPreviewPopup extends Vue implements PopupInterface {
  @Getter(GetterTypes.CurrentRequestType)
  private currentRequestType!: RequestTypes;

  // the logic of this class
  public hide(): void {
    this.$el.setAttribute("class", "hidden");
  }
  public show(): void {
    this.$el.setAttribute("class", "");
  }

  private get isNewSection(): boolean {
    return this.currentRequestType === RequestTypes.AddSection;
  }
}
</script>

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

/* Confirm - to add a new section button
   Chanve - to save the cnahed props of the target section data
 */
#confirm-button,
#change-button {
  background-color: #44c767;
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
</style>
