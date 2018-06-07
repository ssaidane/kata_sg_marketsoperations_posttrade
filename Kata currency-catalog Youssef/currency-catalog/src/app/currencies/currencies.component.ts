import { Component, OnInit } from '@angular/core';
import {CurrenciesService} from '../services/currencies.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  constructor(private currenciesService:CurrenciesService,private router:Router) { }
   page:number=0;
   size:number=10;
   currencies:Array<any>;
   pages:Array<number>;
   totalPages:number;
  pager: any = {};
  ngOnInit() {
    this.getCurrencies();
  }
setPage(i,event:any){
    this.page=i;
  this.getCurrencies();

}
  getCurrencies(){
    this.currenciesService.getCurrencies(this.page,this.size)
      .subscribe(resp=>{

console.log(resp);
        this.currencies=resp.data;
        this.pages=new Array(resp.meta.pages);


      });

  }

  voirDetail(id:number){

    this.router.navigate(['detail',id]);

}

}
