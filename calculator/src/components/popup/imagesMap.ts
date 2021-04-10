import { SectionTypes } from "@/db/DataBase";

export const imagesMap = new Map<SectionTypes, string>([
    [SectionTypes.None, require("@/assets/images/empty.gif")],
    [SectionTypes.LSection1, require("@/assets/images/LSection1.gif")],
    [SectionTypes.LSection2, require("@/assets/images/LSection2.png")],
    [SectionTypes.CSection1, require("@/assets/images/CSection1.gif")],
    [SectionTypes.CSection2, require("@/assets/images/CSection2.jpg")],
    [SectionTypes.ISection1, require("@/assets/images/ISection1.png")],
    [SectionTypes.ISection2, require("@/assets/images/ISection2.png")],
]);