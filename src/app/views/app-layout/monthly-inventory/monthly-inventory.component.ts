import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-inventory',
  templateUrl: './monthly-inventory.component.html',
  styleUrl: './monthly-inventory.component.scss'
})
export class MonthlyInventoryComponent {
  istoggleUpdateProduct:boolean = true;
  iscompleteInventry:boolean = false;
  isWareHouse:boolean = false;
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

  updatedQuantityData = [
    {
      "label": "Location",
      "value": "Warehouse A"
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
      "value": "All (50 products)"
    },
    {
      "label": "Total Items Counted",
      "value": "200 items"
    },

  ]

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
  constructor(private router: Router){}

  route(){
    this.router.navigateByUrl('/app/product')
    console.log('router click')
  }



  toggleCompleteInventry(){
    this.iscompleteInventry =!this.iscompleteInventry;
  }



}
