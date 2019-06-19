import {NgModule} from '@angular/core';
import {PokiRoutingModule} from './poki-routing.module';
import {PokiStatsComponent} from './poki-stats/poki-stats.component';
import {PokiSearchComponent} from './poki-search/poki-search.component';
import {PokiListViewComponent} from './poki-list-view/poki-list-view.component';
import {PokiAbilitiesComponent} from './poki-abilities/poki-abilities.component';
import {BackForwardControlsComponent} from './back-forward-controls/back-forward-controls.component';
import {PokiComponent} from './poki.component';
import {CommonModule} from '@angular/common';

// common module gives us NgDirectives like ngIf ngFor etc

@NgModule({
    declarations: [
        PokiStatsComponent,
        PokiSearchComponent,
        PokiAbilitiesComponent,
        BackForwardControlsComponent,
        PokiComponent
    ],
    imports: [
        CommonModule,
        PokiRoutingModule
    ]
})
export class PokiModule {
}
