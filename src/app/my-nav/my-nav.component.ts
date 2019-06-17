import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Poki} from '../apis/Poki';
import {PokiService} from '../poki-service/poki.service';
import {take, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Component({
    selector: 'app-my-nav',
    templateUrl: './my-nav.component.html',
    styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit, OnDestroy {

    // needed to unsubscribe from all subscriptions on destroy
    private _unSubscriberEvents: Subject<boolean> = new Subject();
    private unSubscriberEvents: Observable<boolean> = this._unSubscriberEvents.asObservable();

    constructor(private pokiService: PokiService) {

    }

    ngOnInit(): void {
        // if you subscribe, you need to unsubscribe when component destroys to prevent memory leak
        // this.pokiService.pokiSelected
        //     .pipe(takeUntil(this.unSubscriberEvents))
        //     .subscribe((poki: Poki) => {
        //     this.updateTextInput(poki);
        // });
    }

    ngOnDestroy(): void {
        console.log('<< my-nav >> unsub');
        this._unSubscriberEvents.next(true);
        this._unSubscriberEvents.complete();
    }

    back(): void {
        this.pokiService.back();
    }

    next(): void {
        this.pokiService.next();
    }

}
