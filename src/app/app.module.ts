import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {NavMainComponent} from './nav-main/nav-main.component';
import {HeaderMainComponent} from './header-main/header-main.component';
import {PokiListViewComponent} from './features/poki/poki-list-view/poki-list-view.component';
import {SharedModule} from './shared/shared.module';

// declarations are for components
// imports are for modules

// providers are for services prior to 6.0, but as of angular 6.0+ it's preferred to use providedIn: 'root' in the @injectable service now
// you can use providers for providing concrete services into abstract services with 'useExisting'
// ex: {provide: Operation, useExisting: MyOperation} where myOperation implements @Injectable providedIn: 'root'

// bootstrap are for the main top level app components
@NgModule({
    imports: [
        SharedModule,
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
