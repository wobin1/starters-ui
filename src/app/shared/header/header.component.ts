import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


    menu = [
      {
        "name": "dashboard",
        "icon": "assets/icons/layout.png",
        "route": "/app/dashboard"
      },
      {
        "name": "products",
        "icon": "assets/icons/package.png",
        "route": "/app/products"

      },
      {
        "name": "purchases",
        "icon": "assets/icons/reciept.png",
        "route": "/app/purchases"

      },
      {
        "name": "sales",
        "icon": "assets/icons/cart.png",
        "route": "/app/sales"
      },
      {
        "name": "inventory plan",
        "icon": "assets/icons/achive.png",
        "route": "/app/inventory-tracker"

      }
    ]

  constructor(private router: Router){}

  ngOnInit() {
  }

  route(page:string){
    this.router.navigate([page]);
  }
}
