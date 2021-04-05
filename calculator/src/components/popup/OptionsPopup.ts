import Vue from "vue";
import { Getter } from "vuex-class";
import { Component } from "vue-property-decorator";

import { GetterTypes, StateTypes } from "../../store";

export interface PopupInterface {
    hide: () => void;
    show: () => void;
}

@Component
export default class OptionsPopup extends Vue implements PopupInterface {
    @Getter(GetterTypes.CurrentState)
    public currentStateType!: StateTypes;

    // the logic of this class
    public hide(): void {
        this.$el.setAttribute("class", "hidden");
    }

    public show(): void {
        this.$el.setAttribute("class", "");
    }

    public get isNewSection(): boolean {
        return this.currentStateType === StateTypes.AddSection;
    }
}

