import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokiStatsComponent} from './poki-stats/poki-stats.component';
import {PokiAbilitiesComponent} from './poki-abilities/poki-abilities.component';
import {PokiComponent} from './poki.component';

const routes: Routes = [
    {path: '', component: PokiComponent,
        children: [
            {path: 'stats', component: PokiStatsComponent},
            {path: 'abilities', component: PokiAbilitiesComponent},
            {path: 'description', component: PokiStatsComponent},
            {path: '', redirectTo: 'stats', pathMatch: 'full'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokiRoutingModule { }
