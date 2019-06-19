import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {NavMainComponent} from './nav-main/nav-main.component';
import {HeaderMainComponent} from './header-main/header-main.component';
import {PokiService} from './features/poki/poki-service/poki.service';
import {PokiListViewComponent} from './features/poki/poki-list-view/poki-list-view.component';

// declarations are for components
// imports are for modules
// providers are for services
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
    providers: [PokiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
