import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokiViewComponent} from './poki-view/poki-view.component';
import {PokiListViewComponent} from './poki-list-view/poki-list-view.component';
import {PokiStatsComponent} from './poki-stats/poki-stats.component';
import {PokiAbilitiesComponent} from './poki-abilities/poki-abilities.component';

// creation a routing module using cli
// ng generate module app-routing --flat --module=app
// link: https://angular.io/tutorial/toh-pt5

// whenever the url changes and matches the string below
// the component will be fired and loaded into the router-outlet in the view
// use loadChildren vs component if the loaded view is a ngModule
// if a component has nested router-outlet, create a children like below
const routes: Routes = [
    {
        path: 'poki', component: PokiViewComponent,
        children: [
            {path: 'stats', component: PokiStatsComponent},
            {path: 'abilities', component: PokiAbilitiesComponent},
            {path: 'description', component: PokiStatsComponent},
            {path: '', redirectTo: 'stats', pathMatch: 'full'},
        ]
    },
    {path: 'pokilist', component: PokiListViewComponent},
    // default routing fall back when no url matches, this should be last
    {path: '', redirectTo: '/poki', pathMatch: 'full'}
];

// default routing setup - this should be the only forRoot, all other router should use forChild
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
