export enum SectionTypes {
  None,
  RectTubeSection,
  TubeSection,
  LSection,
  ISection,
  CSection
}

export class SectionData {
  private _type: SectionTypes;
  private _name: string;
  private _id: string;

  constructor(id: string, type: SectionTypes, name: string) {
    this._type = type;
    this._name = name;
    this._id = id;
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
