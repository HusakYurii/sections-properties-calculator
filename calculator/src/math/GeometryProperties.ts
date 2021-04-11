import { AbstractProperties } from "./AbstractProperties";

export interface BaseGeometryProperties {
  h: number; // mm
  b: number; // mm
  s: number; // mm
  t: number; // mm
  R: number; // mm
  r: number; // mm
  A: number; // cm2
}

export class GeometryProperties extends AbstractProperties implements BaseGeometryProperties {
  public h: number;
  public b: number;
  public s: number;
  public t: number;
  public R: number;
  public r: number;
  public A: number;

  constructor(data: BaseGeometryProperties) {
    super();

    this.h = data.h;
    this.b = data.b;
    this.s = data.s;
    this.t = data.t;
    this.R = data.R;
    this.r = data.r;
    this.A = data.A;
  }

  public clone(): GeometryProperties {
    return new GeometryProperties({
      h: this.h,
      b: this.b,
      s: this.s,
      t: this.t,
      R: this.R,
      r: this.r,
      A: this.A
    });
  }

  public static empty(): GeometryProperties {
    return new GeometryProperties({
      h: 0,
      b: 0,
      s: 0,
      t: 0,
      R: 0,
      r: 0,
      A: 0
    });
  }
}
