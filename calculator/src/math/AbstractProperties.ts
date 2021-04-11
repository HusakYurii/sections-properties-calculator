export abstract class AbstractProperties {
    abstract clone(): AbstractProperties;
    static empty(): unknown {
        throw new Error(`${this.prototype.constructor.name}: Static method is not implemented`);
    }
}