import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {PokiViewComponent} from './poki-view/poki-view.component';
import {AppRoutingModule} from './app-routing.module';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { PokiListViewComponent } from './poki-list-view/poki-list-view.component';

@NgModule({
    declarations: [
        AppComponent,
        MyNavComponent,
        PokiViewComponent,
        FooterMainComponent,
        NavMainComponent,
        HeaderMainComponent,
        PokiListViewComponent
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
