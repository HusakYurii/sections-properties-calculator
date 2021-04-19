import Vue from "vue";
import { Getter } from "vuex-class";
import { Component } from "vue-property-decorator";

import { GetterTypes, StateTypes } from "../../store";
import { imagesMap } from "./imagesMap";
import { SectionTypes } from "@/db/DataBase";
import { sectionTypesMap } from "./sectionTypesMap";
import { getProfileTypes } from "./profilesTypesMap";
import { SectionData } from "@/store/SectionData";

import { GeometryProperties } from "../../math/GeometryProperties";
import { PhysicsProperties } from "../../math/PhysicsProperties";
import { SectionProperties } from "../../math/SectionProperties";

export interface PopupInterface {
    hide: () => void;
    show: () => void;
    setCurrentSectionData: (data: SectionData) => void;
    getCurrentSectionData: () => SectionData;
    resetCurrentSectionData: () => void;
}

@Component
export default class OptionsPopup extends Vue implements PopupInterface {
    @Getter(GetterTypes.CurrentState)
    public currentStateType!: StateTypes;

    public currentSectionData: SectionData = new SectionData({
        profileType: "",
        name: "",
        id: "",
        type: SectionTypes.None,
        gmProperties: Object.freeze(GeometryProperties.empty()),
        psProperties: Object.freeze(PhysicsProperties.empty()),
        seProperties: Object.freeze(SectionProperties.empty())
    });

    public hide(): void {
        this.$el.setAttribute("class", "hidden");
    }

    public show(): void {
        this.$el.setAttribute("class", "");
    }

    public setCurrentSectionData(data: SectionData): void {
        this.currentSectionData = data;
    }

    public getCurrentSectionData(): SectionData {
        return new SectionData({
            id: this.currentSectionData.id,
            type: this.currentSectionData.type,
            name: this.currentSectionData.name,
            profileType: this.currentSectionData.profileType,
            gmProperties: this.currentSectionData.gmProperties,
            psProperties: this.currentSectionData.psProperties,
            seProperties: this.currentSectionData.seProperties
        });
    }

    public resetCurrentSectionData(): void {
        this.setCurrentSectionData(new SectionData({
            profileType: "",
            name: "",
            id: "",
            type: SectionTypes.None,
            gmProperties: Object.freeze(GeometryProperties.empty()),
            psProperties: Object.freeze(PhysicsProperties.empty()),
            seProperties: Object.freeze(SectionProperties.empty())
        }));
    };

    public get isNewSection(): boolean {
        return this.currentStateType === StateTypes.AddNewSection;
    }

    public get imageSrc(): string {
        return imagesMap.get(this.currentSectionData.type) as string;
    }

    public get sectionTypesMap(): Array<[SectionTypes, string]> {
        return [...sectionTypesMap.entries()]
    }

    public get profileTypesMap(): string[] {
        return getProfileTypes(this.currentSectionData.type);
    }

    public get isDisabled(): boolean {
        const isEmpty: (val?: string) => boolean = (val = "") => {
            return val.trim() === "";
        };

        return (
            this.currentSectionData.type === SectionTypes.None ||
            isEmpty(this.currentSectionData.profileType) ||
            isEmpty(this.currentSectionData.name)
        );
    }
}
