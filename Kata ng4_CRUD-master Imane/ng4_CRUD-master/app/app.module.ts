import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { NavbarComponent } from './nav/nav.component';

import { CurrencyService } from './currency/currency.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule
                   ],
  declarations: [ AppComponent,
                          CurrencyComponent,
                          NavbarComponent
                          ],
  providers: [ CurrencyService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }