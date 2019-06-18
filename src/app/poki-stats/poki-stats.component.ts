import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';
import {Poki} from '../apis/Poki';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-poki-stats',
    templateUrl: './poki-stats.component.html',
    styleUrls: ['./poki-stats.component.css']
})
export class PokiStatsComponent implements OnInit, OnDestroy {

    private poki: Poki;

    private _unSub: Subject = new Subject();
    private unSub: Observable = this._unSub.asObservable();

    constructor(private pokiService: PokiService) {

    }

    ngOnInit(): void {
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
