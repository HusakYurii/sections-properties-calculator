import { SectionTypes, DB } from "@/db/DataBase";


export const getProfileTypes: (type: SectionTypes) => string[] = (type) => {
    const list = DB.getSectionByType(type) as { name: string, [key: string]: unknown }[];
    if (!list) {
        console.warn(`DB doesn't have any data for type: ${type}`);
        return [];
    }
    return list.map((value) => value.name);
}