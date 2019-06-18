import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {PokiViewComponent} from './poki-view/poki-view.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {NavMainComponent} from './nav-main/nav-main.component';
import {HeaderMainComponent} from './header-main/header-main.component';
import {PokiListViewComponent} from './poki-list-view/poki-list-view.component';
import {PokiSearchComponent} from './poki-search/poki-search.component';
import {PokiStatsComponent} from './poki-stats/poki-stats.component';
import { PokiAbilitiesComponent } from './poki-abilities/poki-abilities.component';

// declarations are for components
// imports are for modules
// providers are for services
// bootstrap are for the main top level app components
@NgModule({
    declarations: [
        AppComponent,
        MyNavComponent,
        PokiViewComponent,
        FooterMainComponent,
        NavMainComponent,
        HeaderMainComponent,
        PokiListViewComponent,
        PokiSearchComponent,
        PokiStatsComponent,
        PokiAbilitiesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
