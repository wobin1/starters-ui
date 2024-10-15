import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [MessageService]
})
export class ProductsComponent {
  isWareHouse: boolean = false;
  isSubmitted: boolean = false;
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

  products:any = [];

  constructor(private messageService: MessageService, private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getProducts()
  }

  toggleWareHouse(id:string){
    this.isWareHouse =!this.isWareHouse;
    this.currentWareHouseId = id
  }

  toggleCreateProduct(){
    this.isCreateProduct =!this.isCreateProduct;
  }

  saveProduct(){
    this.isSubmitted = !this.isSubmitted;
    setTimeout(() => {
      this.showSuccess('product saved successfully!')
    })

  }

  showSuccess(message: string) {
    console.log('showSuccess')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
