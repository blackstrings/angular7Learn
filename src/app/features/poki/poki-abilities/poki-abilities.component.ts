import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Poki} from '../../../apis/Poki';

@Component({
    selector: 'app-poki-abilities',
    templateUrl: './poki-abilities.component.html',
    styleUrls: ['./poki-abilities.component.css']
})
export class PokiAbilitiesComponent implements OnInit, OnDestroy {

    private poki: Poki;

    private _unSub: Subject<boolean> = new Subject();
    private unSub: Observable<boolean> = this._unSub.asObservable();

    constructor(private pokiService: PokiService) {

    }

    ngOnInit(): void {
        console.log('<< poki-abilities >> init');
        this.poki = this.pokiService.activePoki;
        this.pokiService.pokiSelected.pipe(takeUntil(this.unSub)).subscribe((poki: Poki) => {
            this.poki = poki;
        });
    }

    ngOnDestroy(): void {
        this._unSub.next(true);
        this._unSub.complete();
    }

}
