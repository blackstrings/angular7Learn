import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';
import {Poki} from '../apis/Poki';

@Component({
    selector: 'app-poki-search',
    templateUrl: './poki-search.component.html',
    styleUrls: ['./poki-search.component.css']
})
export class PokiSearchComponent implements OnInit {

    // angulars way of accessing a dom elements in the view marked with the '#' symbol
    @ViewChild('textInput') input: ElementRef;

    constructor(private pokiService: PokiService) {
    }

    ngOnInit() {
    }

    private searchById(id: string): void {
        this.pokiService.searchById(id);
    }

    updateTextInput(poki: Poki): void {
        console.log('<< my-nav >> update text');
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
