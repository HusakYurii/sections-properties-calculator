import Vue from "vue";
import { Action, Getter } from "vuex-class";
import { Component, Ref } from "vue-property-decorator";

// OptionsPopup
import { PopupInterface } from "./components/popup/OptionsPopup";
import OptionsPopup from "./components/popup/OptionsPopup.vue";

// SectionsList
import SectionsList from "./components/list/SectionsList.vue";

// Results
import Results from "./components/results/Results.vue";

// Canvas
import Canvas from "./components/canvas/Canvas.vue";

// store
import { ActionTypes, GetterTypes, StateTypes } from "./store";
import { SectionData } from "./store/SectionData";

import { getUniqueId } from "./utils/Utils";
import { SectionTypes } from "./db/DataBase";

import { GeometryProperties } from "./math/GeometryProperties";
import { PhysicsProperties } from "./math/PhysicsProperties";
import { SectionProperties } from "./math/SectionProperties";
/**
 * This class acts as a main controller
 */
@Component({
    components: {
        Canvas,
        SectionsList,
        OptionsPopup,
        Results,
    },
})
export default class App extends Vue {
    @Getter(GetterTypes.Sections) public sections!: Array<SectionData>;

    @Action(ActionTypes.DeleteSection) public deleteSection!: (
        id: string
    ) => void;
    @Action(ActionTypes.AddSectionData) public addSectionData!: (
        data: SectionData
    ) => void;
    @Action(ActionTypes.UpdateSectionData) public updateSectionData!: (
        newData: SectionData
    ) => void;
    @Action(ActionTypes.SetCurrentState) public setCurrentRequestType!: (
        type: StateTypes
    ) => void;
    @Ref("sectionsList") public sectionsList!: SectionsList;
    @Ref('optionsPopup') public optionsPopup!: Vue & PopupInterface;

    // just close popup without saving any changes
    public closePopup(): void {
        this.optionsPopup.resetCurrentSectionData();
        this.optionsPopup.hide();

        this.setCurrentRequestType(StateTypes.None);
    }

    // confirm newly added and modified data
    public confirmNewData(): void {

        this.addSectionData(this.optionsPopup.getCurrentSectionData());
        this.setCurrentRequestType(StateTypes.None);

        this.optionsPopup.resetCurrentSectionData();
        this.optionsPopup.hide();
    }

    // confirm existing data which has been modified
    public confirmChangedData(): void {
        this.updateSectionData(this.optionsPopup.getCurrentSectionData());
        this.setCurrentRequestType(StateTypes.None);

        this.optionsPopup.resetCurrentSectionData();
        this.optionsPopup.hide();
    }

    // add new data which can be modified and saved
    public onAddNewData(): void {

        this.setCurrentRequestType(StateTypes.AddNewSection);

        this.optionsPopup.setCurrentSectionData(
            new SectionData({
                id: getUniqueId(),
                profileType: "",
                name: `Section-${Math.floor(Math.random() * 1000)}`,
                type: SectionTypes.None,
                gmProperties: Object.freeze(GeometryProperties.empty()),
                psProperties: Object.freeze(PhysicsProperties.empty()),
                seProperties: Object.freeze(SectionProperties.empty()),
            })
        );
        this.optionsPopup.show();
    }

    /**
     * When the existing section data has been selected form the SectionsList
     * and is going to be modified
     */
    public onChangeData(id: string): void {
        const targetSection = this.sections.find((section) => section.id === id);
        if (!targetSection) {
            throw new Error(`App: SectionData does not exist!`);
        }

        this.setCurrentRequestType(StateTypes.ChangeSection);

        this.optionsPopup.setCurrentSectionData(targetSection.clone())
        this.optionsPopup.show();
    }

    /**
     * When the existing section data has been selected form the SectionsList
     * and is going to be deleted form the Store
     */
    public onDeleteData(id: string): void {
        this.setCurrentRequestType(StateTypes.DeleteSection);
        this.deleteSection(id);
    }
}