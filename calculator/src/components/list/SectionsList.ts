import Vue from "vue";
import { Getter } from "vuex-class";
import { Component } from "vue-property-decorator";

import { GetterTypes } from "../../store";
import { SectionData } from "../../store/SectionData";

@Component
export default class SectionsList extends Vue {
  @Getter(GetterTypes.Sections) public sections!: SectionData[];
  @Getter(GetterTypes.MaxSectionsAmount) public maxSectionsAmount!: number;

  public toStringIndex(val: number): string {
    return String(val + 1);
  }

  public get isButtonDisabled(): boolean {
    return this.sections.length >= this.maxSectionsAmount;
  }
}
