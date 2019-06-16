import {Component, Input, OnInit} from '@angular/core';
import {Poki} from '../apis/Poki';
import {PokiService} from '../poki-service/poki.service';

@Component({
    selector: 'app-poki-view',
    templateUrl: './poki-view.component.html',
    styleUrls: ['./poki-view.component.css']
})
export class PokiViewComponent implements OnInit {

    // contains the selected poki the view will read from
    private selectedPoki: Poki;

    constructor(private pokiService: PokiService) {

        // subscription
        this.pokiService.pokiSelected.subscribe((poki: Poki) => {
            this.selectedPoki = poki;
        });
    }

    ngOnInit() {
        this.pokiService.setActive();
    }

}
