import { Injectable } from '@angular/core';
import { CURRENCY_ITEMS } from './currency-data';
import { findIndex } from 'lodash';
import {Currency} from "./currency";

@Injectable()
export class CurrencyService {
  private pItems = CURRENCY_ITEMS;

    getCurrenciesFromData(): Currency[] {
    console.log(this.pItems);
    return this.pItems
  }

  addCurrency(currency: Currency) {
    this.pItems.push(currency);
    console.log(this.pItems);
  }

  updateCurrency(currency: Currency) {
    let index = findIndex(this.pItems, (p: Currency) => {
      return p.id === currency.id;
    });
    this.pItems[index] = currency;
  }

  deleteCurrency(currency: Currency) {
    this.pItems.splice(this.pItems.indexOf(currency), 1);
    console.log(this.pItems);
  }

}

  // getProductsFromService(): Currency[] {
  //   return [{
  //   id: 1,
  //   name: 'Scissors',
  //   description: 'use this to cut stuff',
  //   price: 4.99
  // }, {
  //   id: 2,
  //   name: 'Steak Knives',
  //   description: 'use this to eat food with',
  //   price: 10.99
  // }, {
  //   id: 3,
  //   name: 'Shot Glass',
  //   description: 'use this to take shots',
  //   price: 5.99
  // }]
  // }
