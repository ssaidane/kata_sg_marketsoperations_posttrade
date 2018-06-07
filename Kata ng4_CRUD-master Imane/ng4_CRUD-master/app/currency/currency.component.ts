import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from './currency';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'currency.template.html'
})

export class CurrencyComponent implements OnInit {
    currencies: Currency[];
    currencyForm: boolean = false;
  editCurrencyForm: boolean = false;
  isNewForm: boolean;
  newCurrency: any = {};
  editedCurrency: any = {};

  constructor(private _currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencies = this._currencyService.getCurrenciesFromData();
  }

  showEditCurrencyForm(currency: Currency) {
    if(!currency) {
      this.currencyForm = false;
      return;
    }
    this.editCurrencyForm = true;
    this.editedCurrency = clone(currency);
  }

  showAddCurrencyForm() {
    // resets form if edited Currency
    if(this.currencies.length) {
      this.newCurrency = {};
    }
    this.currencyForm = true;
    this.isNewForm = true;
  }

  saveCurrency(currency: Currency ) {
    if(this.isNewForm) {
      // add a new product
      this._currencyService.addCurrency(currency);
    }
    this.currencyForm = false;
  }

  removeCurrency(currency: Currency ) {
    this._currencyService.deleteCurrency(currency);
  }

    updateCurrency() {
    this._currencyService.updateCurrency(this.editedCurrency);
    this.editCurrencyForm = false;
    this.editedCurrency = {};
  }

  cancelNewCurrency () {
    this.newCurrency  = {};
    this.currencyForm = false;
  }

  cancelEdits() {
    this.editedCurrency  = {};
    this.editCurrencyForm = false;
  }

}
