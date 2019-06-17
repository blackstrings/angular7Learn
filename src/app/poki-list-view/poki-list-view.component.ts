import {Component, OnInit} from '@angular/core';
import {PokiService} from '../poki-service/poki.service';
import {Poki} from '../apis/Poki';

@Component({
    selector: 'app-poki-list-view',
    templateUrl: './poki-list-view.component.html',
    styleUrls: ['./poki-list-view.component.css']
})
export class PokiListViewComponent implements OnInit {

    public pokiListAll: Poki[];

    constructor(private pokiService: PokiService) {
        this.pokiListAll = this.pokiService.getAllPoki();
    }

    ngOnInit() {
        console.log('<< PokiListView >> init');
    }

}
