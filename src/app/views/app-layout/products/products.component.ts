import { filter } from 'rxjs/operators';
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
  wareHouses:any = []

  products:any = [];

  constructor(private messageService: MessageService, private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getProducts()
    this.wareHouses = this.productService.getWareHouses()
  }

  toggleWareHouse(id:string){
    this.isWareHouse =!this.isWareHouse;
    this.currentWareHouseId = id
  }

  toggleCreateProduct(){
    this.isCreateProduct =!this.isCreateProduct;
  }

  getProducts(warehouseId:number){
    let products = this.products.filter((product:any)=>{return product.warehouseId == warehouseId})
    return products
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
