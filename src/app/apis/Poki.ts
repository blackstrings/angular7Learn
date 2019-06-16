import {PokiType} from './PokiType';

export class Poki {
    constructor(
        public id: number,
        public name: string,
        public avatar: string,
        public type: PokiType,
        public hp: number,
        public atk: number,
        public def: number,
        public lvl: number
    ) {

    }
}
