import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Poki} from '../../../apis/Poki';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-poki-search',
    templateUrl: './poki-search.component.html',
    styleUrls: ['./poki-search.component.css']
})
export class PokiSearchComponent implements OnInit, OnDestroy {

    // angulars way of accessing a dom elements in the view marked with the '#' symbol
    // @ViewChild('textInput') input: ElementRef;

    /** field name should match the variable in the html */
    private searchTextInput = new FormControl('');

    // for unsubscribing to subscriptions on destroy
    private _unSub: Subject<boolean> = new Subject();  // subjects vs replay won't replay when reinitialize
    private unSub: Observable<boolean> = this._unSub.asObservable();

    constructor(private pokiService: PokiService) {

    }

    ngOnInit(): void {
        this.searchTextInput.valueChanges.pipe(takeUntil(this.unSub)).subscribe((val: string) => {
            this.searchById(val);
        });
        this.pokiService.pokiSelected.pipe(takeUntil(this.unSub)).subscribe((poki: Poki) => {
            this.updateTextInput(poki);
        });
    }

    ngOnDestroy(): void {
        this._unSub.next(true);
        this._unSub.complete();
    }

    private searchById(id: string): void {
        this.pokiService.searchById(id);
    }

    updateTextInput(poki: Poki): void {
        console.log('<< poki-search >> update text');
        if (poki) {
            // method 1: reactive form
            this.searchTextInput.setValue(poki.id, {emitEvent: false});

            // method 2: newer way to access the element with angular
            // if (this.input) {
            //     this.input.nativeElement.value = poki.id.toString();
            // }

            // method 3: old way
            // (document.getElementById('textInputId') as HTMLInputElement).value = poki.id.toString();
        }
    }

}
