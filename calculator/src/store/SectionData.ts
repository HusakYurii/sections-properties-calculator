import {
  BaseGeometryProperties,
  GeometryProperties
} from "@/math/GeometryProperties";
import {
  BasePhysicsProperties,
  PhysicsProperties
} from "@/math/PhysicsProperties";
import {
  BaseSectionProperties,
  SectionProperties
} from "@/math/SectionProperties";
import { SectionTypes } from "../db/DataBase";

export interface BaseSectionData {
  psProperties: BasePhysicsProperties;
  gmProperties: BaseGeometryProperties;
  seProperties: BaseSectionProperties;
  type: SectionTypes;
  profileType: string;
  name: string;
  id: string;
}

export class SectionData implements BaseSectionData {
  protected _psProperties: PhysicsProperties;
  protected _gmProperties: GeometryProperties;
  protected _seProperties: SectionProperties;
  protected _type: SectionTypes;
  protected _profileType: string;
  protected _name: string;
  protected _id: string;

  constructor(data: BaseSectionData) {
    this._psProperties = new PhysicsProperties(data.psProperties);
    this._gmProperties = new GeometryProperties(data.gmProperties);
    this._seProperties = new SectionProperties(data.seProperties);
    this._profileType = data.profileType;
    this._type = data.type;
    this._name = data.name;
    this._id = data.id;
  }

  public get psProperties(): PhysicsProperties {
    return this._psProperties.clone();
  }

  public get gmProperties(): GeometryProperties {
    return this._gmProperties.clone();
  }

  public get seProperties(): SectionProperties {
    return this._seProperties.clone();
  }

  public get profileType(): string {
    return this._profileType;
  }

  public get type(): SectionTypes {
    return this._type;
  }

  public get name(): string {
    return this._name;
  }

  public get id(): string {
    return this._id;
  }

  public static copy(sectionData: SectionData): SectionData {
    return new SectionData({
      id: sectionData.id,
      type: sectionData.type,
      name: sectionData.name,
      profileType: sectionData.profileType,
      psProperties: sectionData.psProperties,
      gmProperties: sectionData.gmProperties,
      seProperties: sectionData.seProperties
    });
  }

  public static createEmpty(): SectionData {
    return new SectionData({
      type: SectionTypes.None,
      id: "",
      name: "",
      profileType: "",
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
        A: 0
      },
      seProperties: {
        x: 0,
        y: 0,
        Xo: 0,
        Yo: 0,
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
        iy: 0
      }
    });
  }
}
