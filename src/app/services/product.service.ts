import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      "name": "chiken",
      "amountSold": 120,
    },
    {
      "name": "Beef",
      "amountSold": 120,
    },
    {
      "name": "catfish",
      "amountSold": 120,
    },
    {
      "name": "Tomatoes",
      "amountSold": 120,
    },
    {
      "name": "Flour",
      "amountSold": 120,
    },
    {
      "name": "Flour",
      "amountSold": 120,
    },
    {
      "name": "Yam",
      "amountSold": 120,
    },
    {
      "name": "Garlic",
      "amountSold": 120,
    }
  ]

  constructor() { }


  getProducts(){
    return this.products
  }
}
