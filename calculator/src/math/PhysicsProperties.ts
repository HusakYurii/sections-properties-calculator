export interface BasePhysicsProperties {
  mass: number; // kg/m
}

export class PhysicsProperties {
  public mass: number;

  constructor(data: BasePhysicsProperties) {
    this.mass = data.mass;
  }

  public clone(): PhysicsProperties {
    return new PhysicsProperties({
      mass: this.mass
    });
  }
}
