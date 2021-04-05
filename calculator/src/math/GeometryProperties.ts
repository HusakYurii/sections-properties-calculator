export interface BaseGeometryProperties {
  h: number; // mm
  b: number; // mm
  s: number; // mm
  t: number; // mm
  R: number; // mm
  r: number; // mm
  A: number; // cm2
}

export class GeometryProperties {
  public h: number;
  public b: number;
  public s: number;
  public t: number;
  public R: number;
  public r: number;
  public A: number;

  constructor(data: BaseGeometryProperties) {
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
}
