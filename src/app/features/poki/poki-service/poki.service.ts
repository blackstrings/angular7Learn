import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Observable, pipe, ReplaySubject, Subject, throwError} from 'rxjs';
import {PokiType} from '../../../apis/PokiType';
import {Poki} from '../../../apis/Poki';
import {AbilityType} from '../../../apis/AbilityType';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, timeout, timeoutWith} from 'rxjs/operators';

/**
 * By providing the service at the root level, all components can access the same service instance.
 * If provided in an NgModule, only all components within that NgModule can access the same service instance.
 * If provided in a component, each component provided will instantiate its own PokiService.
 *
 * In angular 6.0+ the providedIn 'root' will make this a singleton service.
 * No longer will you need to provide the service in the providers array
 */
@Injectable({
    providedIn: 'root'
})
export class PokiService {

    private pokiData: Poki[] = [];
    public activePoki: Poki = null;
    private indexCounter = 0;

    //guard test
    public canViewAbility: boolean = false;

    // subscriptions
    private _pokiSelected: Subject<Poki> = new Subject<Poki>();
    public pokiSelected: Observable<Poki> = this._pokiSelected.asObservable();

    /**
     * By passing in the service into its constructor and using optional and skipself
     * it makes the services a singleton
     * @param singletonService the poki service
     */
    constructor(@Optional() @SkipSelf() private singletonService: PokiService, public http: HttpClient) {
        console.log('<< poki-service >> Initiated');
        this.loadData();
    }

    /**
     * Hard codded data
     */
    private loadData(): void {
        const data = [
          {id: 0, name: 'Toki', avatar: 'fa-seedling', type: PokiType.FIRE, hp: 100, atk: 5, def: 5, lvl: 1,
            abilities: [AbilityType.DASH, AbilityType.FIRE_BREATH, AbilityType.JUMP, AbilityType.NIGHTMARE],
            description: 'short and tall'},
          {id: 1, name: 'Bosilon', avatar: 'fa-car-side', type: PokiType.GHOST, hp: 50, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.RUN, AbilityType.NIGHTMARE, AbilityType.JUMP],
            description: 'short and skinny'},
          {id: 2, name: 'Tricero', avatar: 'fa-share-alt', type: PokiType.ICE, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.FREEZE, AbilityType.JUMP, AbilityType.DASH],
            description: 'shy and hard'},
          {id: 3, name: 'Famo', avatar: 'fa-adjust', type: PokiType.FIRE, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.JUMP, AbilityType.RUN],
            description: 'fast but super slow'},
          {id: 4, name: 'Elo', avatar: 'fa-angry', type: PokiType.THUNDER, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.SHOCK, AbilityType.RUN],
            description: 'scary and fast'},
          {id: 5, name: 'Sno', avatar: 'fa-asterisk', type: PokiType.ICE, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.DASH, AbilityType.FIRE_BREATH],
            description: 'lives in tall trees'},
          {id: 6, name: 'Krip', avatar: 'fa-box', type: PokiType.WATER, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.RUN, AbilityType.SQUIRT, AbilityType.PUNCH],
            description: 'prefers hard rocks'},
          {id: 7, name: 'Lank', avatar: 'fa-brain', type: PokiType.WATER, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.DASH, AbilityType.WATER_BLAST, AbilityType.DASH],
            description: 'super soft and slow'},
          {id: 8, name: 'Spea', avatar: 'fa-burn', type: PokiType.FIRE, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.JUMP, AbilityType.FIRE_BREATH, AbilityType.RUN],
            description: 'shiny and mystery'},
          {id: 9, name: 'Noto', avatar: 'fa-cat', type: PokiType.GHOST, hp: 100, atk: 10, def: 5, lvl: 1,
            abilities: [AbilityType.DASH, AbilityType.FIRE_BREATH],
            description: 'playful and sad'},
        ];
        data.forEach(d => {
            this.pokiData.push(new Poki(d.id, d.name, d.avatar, d.type, d.hp, d.atk, d.def, d.lvl, d.abilities, d.description));
        });
        this.canViewAbility = true; // test guard to allow abilities to be viewed
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

    // for some reason not working yet
    // to fully use httpClient, you have to import the module in the appModule root file of the app.
    public getTestData(): Observable<{}>  {

      console.log('getting data');

      if (this.http) {
        const uri: string = 'https://api.geekdo.com/xmlapi2/thing?id=302723';
        // http request
        // get setup params
        const getHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        const getOptions = {headers: getHeaders, body: null, pathParams: new HttpParams()};

        // post setup params
        const postHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        const postOptions = {headers: postHeaders, body: null, pathParams: new HttpParams()};
        const postHeadersJSON: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        const postOptionsJSON = {headers: postHeadersJSON, body: null, pathParams: new HttpParams()};


        return this.http.get(uri, {params: getOptions.pathParams, headers: getHeaders})
          .pipe(
            timeoutWith(3000, throwError('Timeout')),
            map((response) => {
              console.log('response returned successfully');
              console.log(response);
              return response;
            }),
            catchError(error => {
              console.error('there was error in get');
              return null;
            })
          );

      } else {
        console.error('poki service no http null');
        return null;
      }
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
