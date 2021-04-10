import { SectionTypes } from "@/db/DataBase";
import Vue from "vue";
import Vuex from "vuex";

import { BaseSectionData, SectionData } from "./SectionData";

Vue.use(Vuex);

enum MutationNames {
  AddSectionData = "addSectionData",
  DeleteSection = "deleteSection",
  UpdateSectionData = "updateSectionData",
  SetCurrentState = "setCurrentState",
  UpdateCurrentSectionData = "updateCurrentSectionData"
}

enum GetterNames {
  CurrentSectionData = "currentSectionData",
  MaxSectionsAmount = "maxSectionsAmount",
  CurrentState = "currentState",
  Sections = "sections"
}

export const MutationTypes: Record<
  keyof typeof MutationNames,
  MutationNames
> = {
  ...MutationNames
};

export const ActionTypes: Record<keyof typeof MutationNames, MutationNames> = {
  ...MutationNames
};

export const GetterTypes: Record<keyof typeof GetterNames, GetterNames> = {
  ...GetterNames
};

export enum StateTypes {
  None,
  AddNewSection,
  DeleteSection,
  ChangeSection
}

export type CurrentSectionData = Pick<
  BaseSectionData,
  "type" | "profileType" | "name"
>;

export interface StoreState {
  sections: Array<SectionData>;
  currentState: StateTypes;
  maxSections: number;
  currentSectionData: CurrentSectionData;
}

export default new Vuex.Store<StoreState>({
  state: {
    maxSections: 15, // to make sections fit in the window
    sections: Array<SectionData>(),
    currentState: StateTypes.None,
    currentSectionData: {
      type: SectionTypes.None,
      profileType: "",
      name: ""
    }
  },
  /** Mutations ===================== */
  mutations: {
    [MutationTypes.SetCurrentState](state, requestType: StateTypes): void {
      state.currentState = requestType;
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
    },
    [MutationTypes.UpdateCurrentSectionData](
      state,
      props: Partial<CurrentSectionData>
    ): void {
      state.currentSectionData = Object.assign(state.currentSectionData, props);
    }
  },
  /** Actions ===================== */
  actions: {
    [ActionTypes.SetCurrentState](context, requestType: StateTypes): void {
      context.commit(MutationTypes.SetCurrentState, requestType);
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
    },
    [ActionTypes.UpdateCurrentSectionData](
      context,
      props: Partial<CurrentSectionData>
    ): void {
      context.commit(MutationTypes.UpdateCurrentSectionData, props);
    }
  },
  /** Getters ======================== */
  getters: {
    [GetterTypes.Sections](state): Array<SectionData> {
      return state.sections;
    },
    [GetterTypes.CurrentState](state): StateTypes {
      return state.currentState;
    },
    [GetterTypes.MaxSectionsAmount](state): number {
      return state.maxSections;
    },
    [GetterTypes.CurrentSectionData](state): CurrentSectionData {
      return state.currentSectionData;
    }
  }
});
