import Vue from "vue";
import { Getter } from "vuex-class";
import { Component } from "vue-property-decorator";

import { GetterTypes } from "../../store";
import { SectionData } from "../../store/SectionData";

@Component
export default class SectionsList extends Vue {
    @Getter(GetterTypes.Sections) public sections!: SectionData[];
    @Getter(GetterTypes.CanAddNewSection) public canAddNewSections!: boolean;

    public toStringIndex(val: number): string {
        return String(val + 1);
    }
}