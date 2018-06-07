import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: CurrencyComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }