import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {PokiViewComponent} from './poki-view/poki-view.component';

@NgModule({
    declarations: [
        AppComponent,
        MyNavComponent,
        PokiViewComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
