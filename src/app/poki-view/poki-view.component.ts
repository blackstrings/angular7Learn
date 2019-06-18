import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Poki} from '../apis/Poki';
import {PokiService} from '../poki-service/poki.service';
import {takeUntil} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject, Subscription} from 'rxjs';

@Component({
    selector: 'app-poki-view',
    templateUrl: './poki-view.component.html',
    styleUrls: ['./poki-view.component.css']
})
export class PokiViewComponent implements OnInit, OnDestroy {

    // contains the selected poki the view will read from
    public selectedPoki: Poki;

    // to unsubscribe from all subscriptions in here on destroy
    private _unSubscriberEvents: Subject<boolean> = new Subject();
    private unSubscriberEvents: Observable<boolean> = this._unSubscriberEvents.asObservable();

    constructor(private pokiService: PokiService) {
    }

    ngOnInit() {
        // subscription
        this.pokiService.pokiSelected.pipe(takeUntil(this.unSubscriberEvents)).subscribe((poki: Poki) => {
            console.log('<< poki-view >> pokiSelected');
            this.selectedPoki = poki;
        });
        console.log('<< PokiView >> init');
        this.pokiService.setActive();
    }

    ngOnDestroy(): void {
        this._unSubscriberEvents.next(true);
        this._unSubscriberEvents.complete();
    }

}
