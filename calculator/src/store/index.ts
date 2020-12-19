import { SectionData, SectionTypes } from "./SectionData";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

enum MutationNames {
  AddSectionData = "addSectionData",
  DeleteSection = "deleteSection",
  UpdateSectionData = "updateSectionData",
  SetTargetSection = "setTargetSection",
  SetCurrentRequestType = "setCurrentRequestType"
}

enum GetterNames {
  CanAddNewSection = "canAddNewSection",
  CurrentRequestType = "currentRequestType",
  TargetSection = "targetSection",
  Sections = "sections"
}

export const MutationTypes: Record<keyof typeof MutationNames, MutationNames> = {
  ...MutationNames
};

export const ActionTypes: Record<keyof typeof MutationNames, MutationNames> = {
  ...MutationNames
};

export const GetterTypes: Record<keyof typeof GetterNames, GetterNames> = {
  ...GetterNames
};

export enum RequestTypes {
  None,
  AddSection,
  DeleteSection,
  ChangeSection
}

export interface StoreState {
  sections: Array<SectionData>;
  currentRequestType: RequestTypes;
  targetSection: SectionData; // currently shown section on NewSectionPopup.vue
  maxSections: number;
}

export default new Vuex.Store<StoreState>({
  state: {
    maxSections: 15, // to make sections fit in the window
    sections: Array<SectionData>(),
    currentRequestType: RequestTypes.None,
    targetSection: new SectionData("", SectionTypes.None, "")
  },
  /** Mutations ===================== */
  mutations: {
    [MutationTypes.SetTargetSection](state, sectionData: SectionData): void {
      state.targetSection = sectionData;
    },
    [MutationTypes.SetCurrentRequestType](state, requestType: RequestTypes): void {
      state.currentRequestType = requestType;
    },
    [MutationTypes.AddSectionData](state, sectionData: SectionData): void {
      state.sections.push(sectionData);
    },
    [MutationTypes.DeleteSection](state, id: string): void {
      state.sections = state.sections.filter(section => section.id !== id);
    },
    [MutationTypes.UpdateSectionData](
      state,
      newSectionData: SectionData
    ): void {
      const oldSectionData: SectionData = state.sections.find(
        ({ id }) => id === newSectionData.id
      ) as SectionData;
      const index: number = state.sections.indexOf(oldSectionData);
      state.sections.splice(index, 1, newSectionData);
    }
  },
  /** Actions ===================== */
  actions: {
    [ActionTypes.SetTargetSection](context, sectionData: SectionData): void {
      context.commit(MutationTypes.SetTargetSection, sectionData);
    },
    [ActionTypes.SetCurrentRequestType](context, requestType: RequestTypes): void {
      context.commit(MutationTypes.SetCurrentRequestType, requestType);
    },
    [ActionTypes.AddSectionData](context, sectionData: SectionData): void {
      context.commit(MutationTypes.AddSectionData, sectionData);
    },
    [ActionTypes.DeleteSection](context, id: string): void {
      context.commit(MutationTypes.DeleteSection, id);
    },
    [ActionTypes.UpdateSectionData](
      context,
      newSectionData: SectionData
    ): void {
      context.commit(MutationTypes.UpdateSectionData, newSectionData);
    }
  },
  /** Getters ======================== */
  getters: {
    [GetterTypes.Sections](state): Array<SectionData> {
      return state.sections;
    },
    [GetterTypes.CurrentRequestType](state): RequestTypes {
      return state.currentRequestType;
    },
    [GetterTypes.TargetSection](state): SectionData {
      return state.targetSection;
    },
    [GetterTypes.CanAddNewSection](state): boolean {
      return state.sections.length < state.maxSections;
    }
  }
});
