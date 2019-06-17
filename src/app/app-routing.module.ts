import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokiViewComponent} from './poki-view/poki-view.component';

// whenever the url changes and matches the string below
// the component will be fired and loaded into the router-outlet in the view
const routes: Routes = [
    {path: '', redirectTo: '/poki', pathMatch: 'full'}, // default routing when url dont match
    {path: 'poki', component: PokiViewComponent}
];

// default routing setup
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
