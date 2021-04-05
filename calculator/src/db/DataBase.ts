import { cloneDeep } from "lodash";
import CSections1 from "./CSections/CSections_1.json";
import CSections2 from "./CSections/CSections_2.json";

import ISections1 from "./ISections/ISections_1.json";
import ISections2 from "./ISections/ISections_2.json";

type MakeType<T> = {
  [P in keyof T]: T[P];
};

export type CSections = MakeType<typeof CSections1>;
export type ISections = MakeType<typeof ISections1>;

export enum SectionTypes {
  None,
  RectTubeSection,
  TubeSection,
  LSection1, // L beam
  LSection2, // L beam with different length of flanges
  CSection1, // C-Beam
  CSection2, // Parallel Flange C-Beam
  ISection1, // I-Beams
  ISection2 // Parallel Flange I-Beams
}

export interface DataBase {
  getSectionByType: (type: SectionTypes) => CSections | ISections | null;
}

export const DB: DataBase = {
  getSectionByType(type: SectionTypes): CSections | ISections | null {
    switch (type) {
      case SectionTypes.CSection1:
        return cloneDeep(CSections1);
      case SectionTypes.CSection2:
        return cloneDeep(CSections2);
      case SectionTypes.ISection1:
        return cloneDeep(ISections1);
      case SectionTypes.ISection2:
        return cloneDeep(ISections2);
      default:
        console.warn(`DataBase: section type${type} does not exist`);
        return null;
    }
  }
};
