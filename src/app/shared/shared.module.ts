import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// for ngModules to import so they don't have to keep importing redundant modules
// shared across all modules

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule {
}
