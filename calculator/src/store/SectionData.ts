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
import { cloneDeep } from "lodash";
import { SectionTypes } from "../db/DataBase";

export interface BaseSectionData {
  psProperties: BasePhysicsProperties;
  gmProperties: BaseGeometryProperties;
  csProperties: BaseSectionProperties;
  type: SectionTypes;
  name: string;
  id: string;
}

export class SectionData {
  protected _phProperties: BasePhysicsProperties;
  protected _gmProperties: GeometryProperties;
  protected _seProperties: SectionProperties;
  protected _type: SectionTypes;
  protected _name: string;
  protected _id: string;

  constructor(data: BaseSectionData) {
    this._phProperties = new PhysicsProperties(data.psProperties);
    this._gmProperties = new GeometryProperties(data.gmProperties);
    this._seProperties = new SectionProperties(data.csProperties);
    this._type = data.type;
    this._name = data.name;
    this._id = data.id;
  }

  public get phProperties(): BasePhysicsProperties {
    return cloneDeep(this._phProperties);
  }

  public get gmProperties(): GeometryProperties {
    return cloneDeep(this._gmProperties);
  }

  public get seProperties(): SectionProperties {
    return cloneDeep(this._seProperties);
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
}
