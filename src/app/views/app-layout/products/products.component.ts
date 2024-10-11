import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isWareHouse: boolean = false;
  currentWareHouseId!: string;
  isCreateProduct: boolean = false;
  wareHouses = [
    {
      "id": "1",
      "name": "Warehouse A",
      "address": "No 2 B Close off 11 crescent, Kado | Cold Room",
      "productCount": "80",
      "itemCount": "9000"
    },

    {
      "id": "2",
      "name": "Warehouse B",
      "address": "No 6 C Close off 11 crescent, Qwarinpa | Cold Room",
      "productCount": "30",
      "itemCount": "11,000"
    },

    {
      "id": "3",
      "name": "Warehouse C",
      "address": "No 2 H Close off 11 crescent, Garki | Cold Room",
      "productCount": "50",
      "itemCount": "31,000"
    }
  ]

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
    },
    {
      "name": "Ginger",
      "amountSold": 120,
    },
  ]

  toggleWareHouse(id:string){
    this.isWareHouse =!this.isWareHouse;
    this.currentWareHouseId = id
  }

  toggleCreateProduct(){
    this.isCreateProduct =!this.isCreateProduct;
  }



}
