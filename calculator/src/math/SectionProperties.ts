export interface BaseSectionProperties {
  x: number; // cm
  y: number; // cm
  Xo: number; // cm
  Yo: number; // cm

  A: number; // cm2

  Sx: number; // cm3
  Sy: number; // cm3

  Ix: number; // cm4
  Iy: number; // cm4
  Ip: number; // cm4
  Ixy: number; // cm4

  Wx: number; // cm3
  Wy: number; // cm3
  Wp: number; // cm3

  ix: number; // cm
  iy: number; // cm
}

export class SectionProperties {
  public x: number;
  public y: number;
  public A: number;
  public Sx: number;
  public Sy: number;
  public Ix: number;
  public Iy: number;
  public Ip: number;
  public Ixy: number;
  public Wx: number;
  public Wy: number;
  public Wp: number;
  public ix: number;
  public iy: number;
  public Xo: number;
  public Yo: number;

  constructor(data: BaseSectionProperties) {
    this.x = data.x;
    this.y = data.y;
    this.A = data.A;
    this.Sx = data.Sx;
    this.Sy = data.Sy;
    this.Ix = data.Ix;
    this.Iy = data.Iy;
    this.Ip = data.Ip;
    this.Ixy = data.Ixy;
    this.Wx = data.Wx;
    this.Wy = data.Wy;
    this.Wp = data.Wp;
    this.ix = data.ix;
    this.iy = data.iy;
    this.Xo = data.Xo;
    this.Yo = data.Yo;
  }
}
