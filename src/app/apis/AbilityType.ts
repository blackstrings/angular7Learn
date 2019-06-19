import {ElementType} from './ElementType';

export class AbilityType {

    protected static values: Map<string, AbilityType> = new Map<string, AbilityType>();

    public static readonly TAUNT = new AbilityType('taunt', ElementType.NORMAL);
    public static readonly RUN = new AbilityType('run', ElementType.NORMAL);
    public static readonly PUNCH = new AbilityType('punch', ElementType.NORMAL);
    public static readonly SHOCK = new AbilityType('shock', ElementType.THUNDER);

    public static readonly JUMP = new AbilityType('jump', ElementType.NORMAL);
    public static readonly DASH = new AbilityType('dash', ElementType.NORMAL);
    public static readonly FIRE_BREATH = new AbilityType('fire breath', ElementType.FIRE);
    public static readonly NIGHTMARE = new AbilityType('nightmare', ElementType.DARK);

    public static readonly SQUIRT = new AbilityType('squirt', ElementType.WATER);
    public static readonly WATER_BLAST = new AbilityType('water blast', ElementType.WATER);
    public static readonly DRAGON_STARE = new AbilityType('dragon stare', ElementType.DRAGON);
    public static readonly FREEZE = new AbilityType('freeze', ElementType.ICE);

    // ------------- Methods ---------------------------------------------
    public static fromValue(value: string): AbilityType {
        return AbilityType.values.has(value) ? AbilityType.values.get(value) : null;
    }

    protected constructor(protected _value: string, public elementType: ElementType) {
        AbilityType.values.set(_value, this);
    }

    public value(): string {
        return this._value;
    }
}
