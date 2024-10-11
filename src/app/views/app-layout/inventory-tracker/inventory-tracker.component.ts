import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-tracker',
  templateUrl: './inventory-tracker.component.html',
  styleUrl: './inventory-tracker.component.scss'
})
export class InventoryTrackerComponent {
  isWareHouse: boolean = false;
  currentWareHouseId!: string;
  isCreateProduct: boolean = false;
  itemType = [
    {
      "id": "1",
      "name": "Unavailable Items",
      "productCount": "80",
    },

    {
      "id": "2",
      "name": "Deleteing Items",
      "productCount": "30",
    },

    {
      "id": "3",
      "name": "Available Items",
      "productCount": "50",
    },
    {
      "id": "4",
      "name": "KIV",
      "productCount": "50",
    }
  ]
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

  tableHeader = ['Name', 'Location', 'Inventory date', 'status', 'progress bar']

  products = [
    {
      "stockLevel": "Fresh Food Stock Level",
      "warehouse": "Warehouse A",
      "date": "Nov 23, 2023",
      "status": "Available",
      "quantity": 1,
      "editIcon": "assets/icons/edit.svg",
      "deleteIcon": "assets/icons/delete.svg"
    },
    {
      "stockLevel": "Perishable Goods Stock Level",
      "warehouse": "Warehouse B",
      "date": "Nov 25, 2023",
      "status": "Available",
      "quantity": 1,
      "editIcon": "assets/icons/edit.svg",
      "deleteIcon": "assets/icons/delete.svg"
    },
    {
      "stockLevel": "Presidential Dinner Stock Items",
      "warehouse": "Warehouse A",
      "date": "Nov 23, 2023",
      "status": "Available",
      "quantity": "All products",
      "editIcon": "assets/icons/edit.svg",
      "deleteIcon": "assets/icons/delete.svg"
    },
    {
      "stockLevel": "Cold Room Stock Level",
      "warehouse": "Warehouse B",
      "date": "Nov 23, 2023",
      "status": "Available",
      "quantity": "All products",
      "editIcon": "assets/icons/edit.svg",
      "deleteIcon": "assets/icons/delete.svg"
    },
    {
      "stockLevel": "Event XYZ Stock Items",
      "warehouse": "Warehouse A",
      "date": "Nov 23, 2023",
      "status": "Available",
      "quantity": 5,
      "editIcon": "assets/icons/edit.svg",
      "deleteIcon": "assets/icons/delete.svg"
    }
  ]

  toggleWareHouse(id:string){
    this.isWareHouse =!this.isWareHouse;
    this.currentWareHouseId = id
  }

  toggleCreateProduct(){
    this.isCreateProduct =!this.isCreateProduct;
  }


}
