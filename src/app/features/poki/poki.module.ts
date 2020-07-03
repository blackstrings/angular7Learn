import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {PokiRoutingModule} from './poki-routing.module';
import {PokiStatsComponent} from './poki-stats/poki-stats.component';
import {PokiSearchComponent} from './poki-search/poki-search.component';
import {PokiListViewComponent} from './poki-list-view/poki-list-view.component';
import {PokiAbilitiesComponent} from './poki-abilities/poki-abilities.component';
import {BackForwardControlsComponent} from './back-forward-controls/back-forward-controls.component';
import {PokiComponent} from './poki.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PokiService} from './poki-service/poki.service';
import {PokiServiceConfig} from './poki-service/PokiServiceConfig';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {PokiAbilityGuard} from './poki-abilities/poki-ability-guard';
import {PokiDescriptionComponent} from './poki-description/poki-description.component';

// HttpClientModule
// to use HttpClient, you must import the module

// common module gives us NgDirectives like ngIf ngFor etc
// ReactiveFormsModule for formControl
// Notice we don't need to provide any services here
@NgModule({
    declarations: [
      PokiStatsComponent,
      PokiSearchComponent,
      PokiAbilitiesComponent,
      PokiDescriptionComponent,
      BackForwardControlsComponent,
      PokiComponent
    ],
    imports: [
        SharedModule,
        PokiRoutingModule,
        ReactiveFormsModule
    ]
})
export class PokiModule {

    // to help alert, guard and prevent the module being imported twice since this module is lazy loaded
    constructor (@Optional() @SkipSelf() parentModule: PokiModule) {
        if (parentModule) {
            throw new Error('Poki is already loaded. Import it in the AppModule only');
        }
    }

    /**
     * Currently not in used, as the poki.component is lazy loaded.
     * but When PokiModule needs the ability to pass in configuration to a
     * service who
     * is not providedIn:
     * 'root'
     * when importing PokiModule into another app module that is to be initialized with configs for certain services
     *
     * @param config this interface has to be created in order to pass in object literal when using forRoot
     */
    static forRoot(config: PokiServiceConfig): ModuleWithProviders {
        return {
            ngModule: PokiModule,
            providers: [
                PokiService, [{provide: 'config', useValue: config}],
            ]
        };
    }
}
