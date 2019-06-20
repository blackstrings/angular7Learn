import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {NavMainComponent} from './nav-main/nav-main.component';
import {HeaderMainComponent} from './header-main/header-main.component';
import {PokiListViewComponent} from './features/poki/poki-list-view/poki-list-view.component';
import {PokiModule} from './features/poki/poki.module';

// declarations are for components
// imports are for modules
// providers are for services prior to 6.0, but as of angular 6.0+ it's preferred to use providedIn: 'root' in the @injectable service now
// bootstrap are for the main top level app components
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        FooterMainComponent,
        NavMainComponent,
        HeaderMainComponent,
        PokiListViewComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
