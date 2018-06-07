import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CurrenciesService} from '../services/currencies.service';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.css']
})
export class DetailCurrencyComponent implements OnInit {

  idCurrency:string;
  currency:any;
  constructor(private activatedRoute:ActivatedRoute,private cuurenciesService:CurrenciesService) {
    this.idCurrency=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.cuurenciesService.getCurrencyById(this.idCurrency)
      .subscribe(resp=>{
        this.currency=resp.data.attributes;
      })
  }

}
