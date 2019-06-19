import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {PokiService} from './poki-service/poki.service';
import {Poki} from '../../apis/Poki';

@Component({
    selector: 'app-poki',
    templateUrl: './poki.component.html',
    styleUrls: ['./poki.component.css']
})
export class PokiComponent implements OnInit, OnDestroy {

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
