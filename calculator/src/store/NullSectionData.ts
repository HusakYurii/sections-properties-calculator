import { SectionTypes } from "@/db/DataBase";
import { SectionData, BaseSectionData } from "./SectionData";

export class NullSectionData extends SectionData {
    constructor() {

        const data: BaseSectionData = {
            type: SectionTypes.None,
            name: "Default",
            id: "default",
            psProperties: {
                mass: 0
            },
            gmProperties: {
                h: 0,
                b: 0,
                s: 0,
                t: 0,
                R: 0,
                r: 0,
                A: 0,
            },
            csProperties: {
                x: 0,
                y: 0,
                A: 0,
                Sx: 0,
                Sy: 0,
                Ix: 0,
                Iy: 0,
                Ip: 0,
                Ixy: 0,
                Wx: 0,
                Wy: 0,
                Wp: 0,
                ix: 0,
                iy: 0,
            }

        };

        super(data);
    }
}