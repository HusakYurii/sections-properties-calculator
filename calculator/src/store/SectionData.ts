import { AbstractProperties } from "@/math/AbstractProperties";
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

export class SectionData extends AbstractProperties implements BaseSectionData {
  public type: SectionTypes;
  public profileType: string;
  public name: string;
  public id: string;

  protected _psProperties: PhysicsProperties;
  protected _gmProperties: GeometryProperties;
  protected _seProperties: SectionProperties;

  constructor(data: BaseSectionData) {
    super();

    this._psProperties = new PhysicsProperties(data.psProperties);
    this._gmProperties = new GeometryProperties(data.gmProperties);
    this._seProperties = new SectionProperties(data.seProperties);
    this.profileType = data.profileType;
    this.type = data.type;
    this.name = data.name;
    this.id = data.id;
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

  public clone(): SectionData {
    return new SectionData({
      id: this.id,
      type: this.type,
      name: this.name,
      profileType: this.profileType,
      psProperties: this.psProperties,
      gmProperties: this.gmProperties,
      seProperties: this.seProperties
    });
  }

  public static empty(): SectionData {
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
