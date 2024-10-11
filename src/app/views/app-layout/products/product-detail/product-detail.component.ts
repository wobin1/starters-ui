import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  istoggleUpdateProduct:boolean = true;
  isUpdateProduct:boolean = false;
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
    "label": "Current quantity",
    "value": 200
  },
  {
    "label": "New quantity",
    "value": 206
  },
  {
    "label": "Discrepancies",
    "value": "+6 items"
  },
  {
    "label": "Reason for update",
    "value": "Adjustment"
  },
  {
    "label": "Notes",
    "value": ""
  },
  // {
  //   "label": "Account",
  //   "value": "Janet Haruna"
  // }
]

  cards = [{"title": "On hand", "figure": 234}, {"title": "To be Delivered", "figure": 64}, {"title": "To be ordered", "figure": 50}]
  responsiveOptions: any[] | undefined;

  constructor(private router: Router){}


    ngOnInit() {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

  route(){
    this.router.navigateByUrl('/app/product')
    console.log('router click')
  }




  toggleUpdatedProduct(){
    this.isProductUpdated =!this.isProductUpdated;
    this.isUpdateProduct =!this.isUpdateProduct;
  }

  closeExistingModal(){
    this.isProductUpdated = false;
    this.isUpdateProduct = false;
  }

  toggleUpdateProduct(){
    this.isUpdateProduct =!this.isUpdateProduct;
  }



}
