import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokiStatsComponent} from './poki-stats/poki-stats.component';
import {PokiAbilitiesComponent} from './poki-abilities/poki-abilities.component';
import {PokiComponent} from './poki.component';
import {PokiAbilityGuard} from './poki-abilities/poki-ability-guard';
import {PokiDescriptionComponent} from './poki-description/poki-description.component';

const routes: Routes = [
    {path: '', component: PokiComponent,
        children: [
            {path: 'stats', component: PokiStatsComponent},
            {path: 'descriptions', component: PokiDescriptionComponent},
            {path: 'abilities', component: PokiAbilitiesComponent, canActivate: [PokiAbilityGuard]},
            {path: '', redirectTo: 'stats', pathMatch: 'full'},
        ]
    }
];

// all ngModule to bel loaded inside a parent should always use forChild
// ony the app-level module should use the forRoot
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokiRoutingModule { }
