import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PokiListViewComponent} from './features/poki/poki-list-view/poki-list-view.component';

// creation a routing module using cli
// ng generate module app-routing --flat --module=app
// link: https://angular.io/tutorial/toh-pt5

// whenever the url changes and matches the string below
// the component will be fired and loaded into the router-outlet in the view
// use loadChildren vs component if the loaded view is a ngModule
// if a component has nested router-outlet, create a children like below
// new way of loadChildren, use the hashTag #PokiModule
//      {path: 'poki', loadChildren: './features/poki/poki.module#PokiModule'},
// old way of loadChildren in as a module, use the import
//      {path: 'poki', loadChildren: () => import('./features/poki/poki.module').then(mod => mod.PokiModule)}
const routes: Routes = [
    {path: 'poki', loadChildren: () => import('./features/poki/poki.module').then(m => m.PokiModule)},
    {path: 'pokilist', component: PokiListViewComponent},
    // default routing fall back when no url matches, this should be last
    {path: '', redirectTo: '/poki', pathMatch: 'full'}
];

// default routing setup - this should be the only forRoot, all other router should use forChild
@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true, enableTracing: false})],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
