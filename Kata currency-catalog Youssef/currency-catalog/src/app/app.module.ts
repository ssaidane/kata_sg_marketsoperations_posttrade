import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import {HttpModule} from '@angular/http';
import {CurrenciesService} from './services/currencies.service';
import {FormsModule} from '@angular/forms';
import { DetailCurrencyComponent } from './detail-currency/detail-currency.component';
import {RouterModule, Routes} from '@angular/router';
import {PagerService} from './services/pager.service';

const appRoutes:Routes=[

  {path:'detail/:id',component:DetailCurrencyComponent},
  {path:'currencies',component:CurrenciesComponent},
  {path:'',redirectTo:'/currencies',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    DetailCurrencyComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [CurrenciesService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
