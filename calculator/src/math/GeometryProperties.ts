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

  /**
   * Data that comes from the database has values in MM and CM,
   * the GeometryProperties class converts them all to CM
   * @param data
   */
  constructor(data: BaseGeometryProperties) {
    this.h = data.h / 10;
    this.b = data.b / 10;
    this.s = data.s / 10;
    this.t = data.t / 10;
    this.R = data.R / 10;
    this.r = data.r / 10;
    this.A = data.A;
  }
}
