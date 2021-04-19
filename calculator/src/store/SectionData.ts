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
      psProperties: PhysicsProperties.empty(),
      gmProperties: GeometryProperties.empty(),
      seProperties: SectionProperties.empty()
    });
  }
}
