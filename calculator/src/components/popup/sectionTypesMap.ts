import { SectionTypes } from "@/db/DataBase";

export const sectionTypesMap = new Map<SectionTypes, string>([
    [SectionTypes.None, "-"],
    [SectionTypes.LSection1, "L Section 1"],
    [SectionTypes.LSection2, "L Section 2"],
    [SectionTypes.CSection1, "C Section 1"],
    [SectionTypes.CSection2, "C Section 2"],
    [SectionTypes.ISection1, "I Section 1"],
    [SectionTypes.ISection2, "I Section 2"],
]);