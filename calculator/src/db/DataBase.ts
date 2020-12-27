import { cloneDeep } from "lodash";
import CSections from "./CSections/CSections.json";
import CSectionsP from "./CSections/CSections.json";

import ISections from "./ISections/ISections.json";
import ISectionsP from "./ISections/ISections.json";

export enum SectionTypes {
  None,
  RectTubeSection,
  TubeSection,
  LSection,
  CSection, // C-Beam
  CSectionP, // Parallel Flange C-Beam
  ISection, // I-Beams
  ISectionP // Parallel Flange I-Beams
}

export interface DataBase {
  getAllCSections: () => Record<string, unknown>;
  getAllCSectionsP: () => Record<string, unknown>;
  getAllISections: () => Record<string, unknown>;
  getAllISectionsP: () => Record<string, unknown>;
  getSectionByType: (type: SectionTypes, name: string) => unknown | null;
}

export const DB: DataBase = {
  getAllCSections() {
    return cloneDeep(CSections);
  },

  getAllCSectionsP() {
    return cloneDeep(CSectionsP);
  },

  getAllISections() {
    return cloneDeep(ISections);
  },

  getAllISectionsP() {
    return cloneDeep(ISectionsP);
  },

  getSectionByType(type: SectionTypes, name: string) {
    switch (type) {
      case SectionTypes.CSection:
        return this.getAllCSections()[name] || null;
      case SectionTypes.CSectionP:
        return this.getAllCSectionsP()[name] || null;
      case SectionTypes.ISection:
        return this.getAllISections()[name] || null;
      case SectionTypes.ISectionP:
        return this.getAllISectionsP()[name] || null;
      default:
        console.warn(`DataBase: section type${type} does not exist`);
        return null;
    }
  }
};
