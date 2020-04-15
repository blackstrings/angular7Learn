import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';

@Component({
    selector: 'app-back-forward-controls',
    templateUrl: './back-forward-controls.component.html',
    styleUrls: ['./back-forward-controls.component.css']
})
export class BackForwardControlsComponent implements OnInit, OnDestroy {

    constructor(private pokiService: PokiService) {

    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    back(): void {
        this.pokiService.back();
    }

    next(): void {
        this.pokiService.next();
    }

  getData(): void {
        this.pokiService.getTestData();
    }

}
