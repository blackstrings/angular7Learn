import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Poki} from '../apis/Poki';
import {PokiType} from '../apis/PokiType';
import {Observable, ReplaySubject, Subject} from 'rxjs';

/**
 * By providing the service at the root level, all components can access the same service instance.
 * If provided in an NgModule, only all components within that NgModule can access the same service instance.
 * If provided in a component, each component provided will instantiate its own PokiService.
 */
@Injectable({
    providedIn: 'root'
})
export class PokiService {

    private pokiData: Poki[] = [];
    public activePoki: Poki = null;
    private indexCounter = 0;

    // subscriptions
    private _pokiSelected: Subject<Poki> = new Subject<Poki>();
    public pokiSelected: Observable<Poki> = this._pokiSelected.asObservable();

    /**
     * By passing in the service into its constructor and using optional and skipself
     * it makes the services a singleton
     * @param singletonService
     */
    constructor(@Optional() @SkipSelf() private singletonService: PokiService) {
        console.log('<< PokiService >> Initiated');
        this.loadData();
    }

    /**
     * Hard codded data
     */
    private loadData(): void {
        const data = [
            {id: 0, name: 'Toki', avatar: 'fa-seedling', type: PokiType.FIRE, hp: 100, atk: 5, def: 5, lvl: 1, abilities: ['taunt', 'fly']},
            {id: 1, name: 'Bosilon', avatar: 'fa-car-side', type: PokiType.GHOST, hp: 50, atk: 10, def: 5, lvl: 1, abilities: ['taunt', 'jump']},
            {id: 2, name: 'Tricero', avatar: 'fa-share-alt', type: PokiType.ICE, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['tackle', 'fly']},
            {id: 3, name: 'Famo', avatar: 'fa-adjust', type: PokiType.FIRE, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['bite', 'run']},
            {id: 4, name: 'Elo', avatar: 'fa-angry', type: PokiType.THUNDER, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['jump', 'fly']},
            {id: 5, name: 'Sno', avatar: 'fa-asterisk', type: PokiType.ICE, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['fly', 'taunt']},
            {id: 6, name: 'Krip', avatar: 'fa-box', type: PokiType.NEUTRAL, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['punch', 'run']},
            {id: 7, name: 'Lank', avatar: 'fa-brain', type: PokiType.WATER, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['jump', 'fly']},
            {id: 8, name: 'Spea', avatar: 'fa-burn', type: PokiType.FIRE, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['hide', 'fly']},
            {id: 9, name: 'Noto', avatar: 'fa-cat', type: PokiType.GHOST, hp: 100, atk: 10, def: 5, lvl: 1, abilities: ['fire breath', 'fly']},
        ];
        data.forEach(d => {
            this.pokiData.push(new Poki(d.id, d.name, d.avatar, d.type, d.hp, d.atk, d.def, d.lvl, d.abilities));
        });
        this.activePoki = this.pokiData[0];
    }

    public back(): void {
        this.indexCounter--;
        if (this.indexCounter < 0) {
            this.indexCounter = this.pokiData.length - 1;
        }
        this.setActive();
    }

    public next(): void {
        this.indexCounter++;
        if (this.indexCounter >= this.pokiData.length) {
            this.indexCounter = 0;
        }
        this.setActive();
    }

    searchById(val: string): void {
        const index: number = parseInt(val, null);
        if (!isNaN(index)) {
            if (this.pokiData && this.pokiData.length) {
                const poki: Poki = this.pokiData[index];
                if (poki) {
                    this.indexCounter = index;
                    this.setActive();
                } else {
                    console.error('<< PokiService >> failed to search, index is out of bound: ' + index);
                }
            }
        } else {
            console.error('<< PokiService >> failed to search, index is: ' + index);
        }
    }

    public getAllPoki(): Poki[] {
        return this.pokiData;
    }

    /** publishes the active poki to all listeners */
    public setActive(): void {
        this.activePoki = this.pokiData[this.indexCounter];
        this._pokiSelected.next(this.activePoki);
    }

}
