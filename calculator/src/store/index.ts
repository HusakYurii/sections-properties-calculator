import { SectionTypes } from "@/db/DataBase";
import Vue from "vue";
import Vuex from "vuex";

import { SectionData } from "./SectionData";

Vue.use(Vuex);

enum MutationNames {
  AddSectionData = "addSectionData",
  DeleteSection = "deleteSection",
  UpdateSectionData = "updateSectionData",
  SetCurrentState = "setCurrentState",
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


export interface StoreState {
  sections: Array<SectionData>;
  currentState: StateTypes;
  maxSections: number;
}

export default new Vuex.Store<StoreState>({
  state: {
    maxSections: 15, // to make sections fit in the window
    sections: Array<SectionData>(),
    currentState: StateTypes.None
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
      const oldSectionData = state.sections.find(
        ({ id }) => id === newSectionData.id
      );

      if (!oldSectionData) {
        throw new Error(`Store: SectionData with id: ${newSectionData.id} doesn't exist!`);
      }

      const index: number = state.sections.indexOf(oldSectionData);
      state.sections.splice(index, 1, newSectionData);
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
    }
  }
});
