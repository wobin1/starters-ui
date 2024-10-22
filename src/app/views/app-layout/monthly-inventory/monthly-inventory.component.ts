import { DataViewModule } from 'primeng/dataview';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-monthly-inventory',
  templateUrl: './monthly-inventory.component.html',
  styleUrl: './monthly-inventory.component.scss'
})
export class MonthlyInventoryComponent {
  istoggleUpdateProduct:boolean = true;
  iscompleteInventry:boolean = false;
  isWareHouse:boolean = false;
  wareHousesId:any;
  warehouseInventory:any;
  completeInventoryData:any;
  isProductUpdated: boolean = false;
  images: any[] = [
    {
        itemImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        itemImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        alt: 'Description for Image 2',
        title: 'Title 2'
    },
    {
        itemImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        alt: 'Description for Image 3',
        title: 'Title 3'
    },
    {
        itemImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        alt: 'Description for Image 4',
        title: 'Title 4'
    },
    {
        itemImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        thumbnailImageSrc: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25ha3N8ZW58MHx8MHx8fDA%3D',
        alt: 'Description for Image 5',
        title: 'Title 5'
    },

];



  updatedQuantityData:any = []

  descrepancies =   [
      {
        "product": "Product A",
        "value": "+5 units"
      },
      {
        "product": "Product B",
        "value": "+1 units"
      },
      {
        "product": "Product C",
        "value": "-2 units"
      }
    ]


  tableHeader = ['No', 'Image', 'Product Name', 'On Hand', 'Counted', 'Difference']

  products = [
    {
      "no": 1,
      "image": "assets/images/product1.jpg",
      "productName": "Product 1",
      "onHand": 100,
      "counted": 102,
      "difference": 2
    },
    {
      "no": 2,
      "image": "assets/images/product2.jpg",
      "productName": "Product 2",
      "onHand": 50,
      "counted": 48,
      "difference": -2
    },
    {
      "no": 3,
      "image": "assets/images/product3.jpg",
      "productName": "Product 3",
      "onHand": 150,
      "counted": 150,
      "difference": 0
    },
    {
      "no": 4,
      "image": "assets/images/product4.jpg",
      "productName": "Product 4",
      "onHand": 200,
      "counted": 195,
      "difference": -5
    },
    {
      "no": 5,
      "image": "assets/images/product5.jpg",
      "productName": "Product 5",
      "onHand": 80,
      "counted": 85,
      "difference": 5
    },
    {
      "no": 6,
      "image": "assets/images/product6.jpg",
      "productName": "Product 6",
      "onHand": 120,
      "counted": 118,
      "difference": -2
    },
    {
      "no": 7,
      "image": "assets/images/product7.jpg",
      "productName": "Product 7",
      "onHand": 75,
      "counted": 70,
      "difference": -5
    },
    {
      "no": 8,
      "image": "assets/images/product8.jpg",
      "productName": "Product 8",
      "onHand": 90,
      "counted": 92,
      "difference": 2
    },
    {
      "no": 9,
      "image": "assets/images/product9.jpg",
      "productName": "Product 9",
      "onHand": 110,
      "counted": 115,
      "difference": 5
    },
    {
      "no": 10,
      "image": "assets/images/image.png",
      "productName": "Product 10",
      "onHand": 60,
      "counted": 62,
      "difference": 2
    }
  ]
  constructor(private router: Router, private api:HttpServiceService){}

  ngOnInit(){
    this.getWareHouseId();
    this.getWarehouseInventory();
  }

  route(){
    this.router.navigateByUrl('/app/product')
    console.log('router click')
  }

  getWareHouseId(){
    const url = window.location.href;
    const segments = url.split('/');
    this.wareHousesId = segments[segments.length - 1];
  }

  getWarehouseInventory(){
    this.api.get('warehouses/inventory/' + this.wareHousesId).subscribe(
      res=>{
        console.log(res);
        this.warehouseInventory = res;
        this.warehouseInventory = this.warehouseInventory.data

        console.log('warehouseInventory', this.warehouseInventory)

        this.updatedQuantityData.push(
          {
            "label": "Location",
            "value": this.warehouseInventory?.location
          },
          {
            "label": "Inventory Date",
            "value": "August 3, 2023"
          },
          {
            "label": "Duration of Inventory",
            "value": "10 days"
          },
          {
            "label": "Product",
            "value": this.warehouseInventory?.total_products
          },
          {
            "label": "Total Items Counted",
            "value": 200
          }
        )

        console.log(this.updatedQuantityData)
      },
      err=>{
        console.log(err);
      }
    )
  }

  completeInventory(){

    let completeInventory:any=[];
    for(let inventory of this.warehouseInventory.product_list){
      completeInventory.push({'id': inventory.no, 'counted': inventory.counted})
    }

    console.log(completeInventory)

    this.api.post('inventory/completed', {'products': completeInventory}).subscribe(
      res=>{
        console.log(res);
        this.completeInventoryData = res;
        this.completeInventoryData = this.completeInventoryData.data
        console.log('completeInventoryData', this.completeInventoryData)
        this.toggleCompleteInventry()
      },
      err=>{
        console.log(err);
      }
    )
  }

  toggleCompleteInventry(){
    this.iscompleteInventry =!this.iscompleteInventry;
  }



}
