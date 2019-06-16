import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Poki} from '../apis/Poki';
import {PokiType} from '../apis/PokiType';
import {PokiService} from '../poki-service/poki.service';

@Component({
    selector: 'app-my-nav',
    templateUrl: './my-nav.component.html',
    styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

    // angulars way of accessing a dom elements in the view marked with the '#' symbol
    @ViewChild('textInput') input: ElementRef;

    constructor(private pokiService: PokiService) {
        this.pokiService.pokiSelected.subscribe((poki: Poki) => {
            this.updateTextInput(poki);
        });
    }

    back(): void {
        this.pokiService.back();
    }

    next(): void {
        this.pokiService.next();
    }

    searchById(id: string): void {
        this.pokiService.searchById(id);
    }

    updateTextInput(poki: Poki): void {
        if (poki) {
            // new way to access the element with angular
            this.input.nativeElement.value = poki.id.toString();
            // old way
            // (document.getElementById('textInputId') as HTMLInputElement).value = poki.id.toString();
        }
    }

}
