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

}
