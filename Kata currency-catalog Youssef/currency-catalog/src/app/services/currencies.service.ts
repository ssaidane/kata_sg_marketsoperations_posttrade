import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class  CurrenciesService {

constructor(private  _http:Http){


}

getCurrencies(page:number,size:number){

 return this._http.get("https://api.openfintech.io/v1/currencies?page[number]="+page+"&page[size]="+size)
    .map(resp=>resp.json())
}
getCurrencyById(id:string){
return this._http.get("https://api.openfintech.io/v1/currencies/"+id)
  .map(resp=>resp.json());
}
}
