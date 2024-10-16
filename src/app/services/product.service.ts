import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      "id": 1,
      "warehouseId": 1,
      "name": "Chicken",
      "amountSold": 120
    },
    {
      "id": 2,
      "warehouseId": 2,
      "name": "Beef",
      "amountSold": 120
    },
    {
      "id": 3,
      "warehouseId": 3,
      "name": "Catfish",
      "amountSold": 120
    },
    {
      "id": 4,
      "warehouseId": 1,
      "name": "Tomatoes",
      "amountSold": 120
    },
    {
      "id": 5,
      "warehouseId": 2,
      "name": "Flour",
      "amountSold": 120
    },
    {
      "id": 6,
      "warehouseId": 3,
      "name": "Flour",
      "amountSold": 120
    },
    {
      "id": 7,
      "warehouseId": 1,
      "name": "Yam",
      "amountSold": 120
    },
    {
      "id": 8,
      "warehouseId": 2,
      "name": "Garlic",
      "amountSold": 120
    }
  ]

  constructor() { }


  getProducts(){
    return this.products
  }
}
