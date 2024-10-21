import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any;
  wareHouses:any;

  constructor(private api:HttpServiceService) { }


  getWarehouses(){
    this.api.get('warehouses').subscribe(
      res=>{
        this.wareHouses = res
        this.wareHouses = this.wareHouses.data
      },
      err=>{
        console.log(err)
      }
    )
  }

  getProducts(){
    this.api.get('products').subscribe(
      res =>{
        this.products = res
        this.products = this.products.data
      },
      err=>{
        console.log(err)
      }
    )
  }

  getAvailableProducts(){
    return this.products.filter((product:any)=>{
      return product.quantity - product.amountSold === 0;
    })
  }

  getUnavailableProducts(){
    return this.products.filter((product:any)=>{
      return product.quantity - product.amountSold === 0;
    })
  }

  getWareHouses(){
    return this.wareHouses
  }

  getWareHouse(id:number){
    let wareHouse = this.wareHouses.filter((wareHouse:any)=>{
      return wareHouse.id === id;
    })

    return wareHouse;
  }
}
