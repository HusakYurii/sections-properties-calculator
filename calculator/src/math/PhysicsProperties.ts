import { AbstractProperties } from "./AbstractProperties";

export interface BasePhysicsProperties {
  mass: number; // kg/m
}

export class PhysicsProperties extends AbstractProperties implements BasePhysicsProperties {
  public mass: number;

  constructor(data: BasePhysicsProperties) {
    super();

    this.mass = data.mass;
  }

  public clone(): PhysicsProperties {
    return new PhysicsProperties({
      mass: this.mass
    });
  }

  public static empty(): PhysicsProperties {
    return new PhysicsProperties({
      mass: 0
    });
  }
}
