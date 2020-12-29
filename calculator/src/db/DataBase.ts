import { cloneDeep } from "lodash";
import CSections_1 from "./CSections/CSections_1.json";
import CSections_2 from "./CSections/CSections_2.json";

import ISections_1 from "./ISections/ISections_1.json";
import ISections_2 from "./ISections/ISections_2.json";

export enum SectionTypes {
  None,
  RectTubeSection,
  TubeSection,
  LSection_1, // L beam
  LSection_2, // L beam with different length of flanges
  CSection_1, // C-Beam
  CSection_2, // Parallel Flange C-Beam
  ISection_1, // I-Beams
  ISection_2// Parallel Flange I-Beams
}

export interface DataBase {
  getSectionByType: (type: SectionTypes) => Array<any> | null;
}

export const DB: DataBase = {
  getSectionByType(type: SectionTypes): Array<any> | null {
    switch (type) {
      case SectionTypes.CSection_1:
        return cloneDeep(CSections_1);
      case SectionTypes.CSection_2:
        return cloneDeep(CSections_2);
      case SectionTypes.ISection_1:
        return cloneDeep(ISections_1);
      case SectionTypes.ISection_2:
        return cloneDeep(ISections_2);
      default:
        console.warn(`DataBase: section type${type} does not exist`);
        return null;
    }
  }
};
