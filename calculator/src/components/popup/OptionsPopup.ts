import Vue from "vue";
import { Getter } from "vuex-class";
import { Component, Watch } from "vue-property-decorator";

import { CurrentSectionData, GetterTypes, StateTypes } from "../../store";
import { imagesMap } from "./imagesMap";
import { SectionTypes } from "@/db/DataBase";
import { sectionTypesMap } from "./sectionTypesMap";
import { getProfileTypes } from "./profilesTypesMap";

export interface PopupInterface {
    hide: () => void;
    show: () => void;

    name: string;
    profileType: string;
    type: SectionTypes;
}

@Component
export default class OptionsPopup extends Vue implements PopupInterface {
    @Getter(GetterTypes.CurrentState)
    public currentStateType!: StateTypes;
    @Getter(GetterTypes.CurrentSectionData)
    public currentSectionData!: CurrentSectionData;

    // watch CurrentSectionData in the store
    @Watch('currentSectionData', { immediate: true, deep: true })
    onSectionChanged(newData: CurrentSectionData) {
        this.name = newData.name;
        this.profileType = newData.profileType;
        this.type = newData.type;
    }

    public name = "";
    public profileType = "";
    public type: SectionTypes = SectionTypes.None;

    // the logic of this class
    public hide(): void {
        this.$el.setAttribute("class", "hidden");
    }

    public show(): void {
        this.$el.setAttribute("class", "");
    }

    public get isNewSection(): boolean {
        return this.currentStateType === StateTypes.AddNewSection;
    }

    public get imageSrc(): string {
        return imagesMap.get(this.type) as string;
    }

    public get sectionTypesMap(): Array<[SectionTypes, string]> {
        return [...sectionTypesMap.entries()]
    }

    public get profileTypesMap(): string[] {
        return getProfileTypes(this.type);
    }
}
