import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';
import {Poki} from '../apis/Poki';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-poki-search',
    templateUrl: './poki-search.component.html',
    styleUrls: ['./poki-search.component.css']
})
export class PokiSearchComponent implements OnInit, OnDestroy {

    // angulars way of accessing a dom elements in the view marked with the '#' symbol
    @ViewChild('textInput') input: ElementRef;

    // for unsubscribing to subscriptions on destroy
    private _unSubscriberEvents: Subject<boolean> = new Subject();  // subjects vs replay won't replay when reinitialize
    private unSubscriberEvents: Observable<boolean> = this._unSubscriberEvents.asObservable();

    constructor(private pokiService: PokiService) {
    }

    ngOnInit(): void {
        this.pokiService.pokiSelected.pipe(takeUntil(this.unSubscriberEvents)).subscribe((poki: Poki) => {
           this.updateTextInput(poki);
        });
    }

    ngOnDestroy(): void {
        this._unSubscriberEvents.next(true);
        this._unSubscriberEvents.complete();
    }

    private searchById(id: string): void {
        this.pokiService.searchById(id);
    }

    updateTextInput(poki: Poki): void {
        console.log('<< poki-search >> update text');
        if (poki) {
            // new way to access the element with angular
            if (this.input) {
                this.input.nativeElement.value = poki.id.toString();
            }
            // old way
            // (document.getElementById('textInputId') as HTMLInputElement).value = poki.id.toString();
        }
    }

}
