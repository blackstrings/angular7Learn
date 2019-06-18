import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Poki} from '../apis/Poki';
import {PokiService} from '../poki-service/poki.service';
import {takeUntil} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {ActivatedRoute, Route, Router, RouterModule} from '@angular/router';

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

    constructor(private pokiService: PokiService, private router: Router) {
    }

    ngOnInit() {
        console.log('<< poki-view >> init');
        // subscription
        this.pokiService.pokiSelected.pipe(takeUntil(this.unSubscriberEvents)).subscribe((poki: Poki) => {
            this.selectedPoki = poki;
        });
        this.pokiService.setActive();
    }

    ngOnDestroy(): void {
        this._unSubscriberEvents.next(true);
        this._unSubscriberEvents.complete();
    }

    // only when we need to display two router-outlets within one component or module
    // navigateStats(): void {
    //     this.router.navigate([{outlets: {primary: 'poki' , stats_ol: 'stats'}}]);
    // }

}
