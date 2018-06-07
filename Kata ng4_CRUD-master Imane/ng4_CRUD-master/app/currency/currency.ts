export interface Currency {

  /*name: string;
  description: string;
  price: number;  */
    id: string;
    code: string;
    name: string;
    currency_type: string;
    code_iso_numeric3: string;
    code_iso_alpha3: string;
    symbol: string;
    native_symbol: string;
    category: string;
}