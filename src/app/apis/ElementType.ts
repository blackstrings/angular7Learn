export class ElementType {

    protected static values: Map<string, ElementType> = new Map<string, ElementType>();

    public static readonly NORMAL = new ElementType('normal');
    public static readonly FIRE = new ElementType('fire');
    public static readonly WATER = new ElementType('water');
    public static readonly THUNDER = new ElementType('thunder');
    public static readonly ICE = new ElementType('ice');
    public static readonly DRAGON = new ElementType('dragon');
    public static readonly DARK = new ElementType('dark');

    // ------------- Methods ---------------------------------------------
    public static fromValue(value: string) {
        return ElementType.values.has(value) ? ElementType.values.get(value) : null;
    }

    protected constructor(protected _value: string) {
        ElementType.values.set(_value, this);
    }

    public value(): string {
        return this._value;
    }
}
