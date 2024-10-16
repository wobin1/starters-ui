import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-inventory-tracker',
  templateUrl: './inventory-tracker.component.html',
  styleUrl: './inventory-tracker.component.scss',
  providers: [MessageService]
})
export class InventoryTrackerComponent {
  isWareHouse: boolean = false;
  currentWareHouseId!: string;
  isCreateProduct: boolean = false;
  products:any = []
  availableProducts:any = []
  unavailableProducts:any = []

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
  tableHeader = ['Name', 'Location', 'Inventory date', 'status', 'progress bar']


  constructor(private messageService: MessageService,
              private productService: ProductService
              ){}

  ngOnInit(){
    // this.products = this.productService.getProducts()
    this.availableProducts = this.productService.getAvailableProducts()
    this.unavailableProducts = this.productService.getUnavailableProducts()
  }

  getWareHouse(warehouseId:number){
    let wareHouse = this.productService.getWareHouse(warehouseId)
    console.log('warehouse', wareHouse)
    return wareHouse[0].name

  }

  toggleWareHouse(id:string){
    this.isWareHouse =!this.isWareHouse;
    this.currentWareHouseId = id
  }

  toggleCreateProduct(){
    this.isCreateProduct =!this.isCreateProduct;
  }



  saveProduct(){

  }


}
