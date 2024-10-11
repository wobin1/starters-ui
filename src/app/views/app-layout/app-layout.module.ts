import { PrimengModule } from './../../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AppLayoutComponent } from './app-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { InventoryTrackerComponent } from './inventory-tracker/inventory-tracker.component';
import { MonthlyInventoryComponent } from './monthly-inventory/monthly-inventory.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
    ProductsComponent,
    CreateProductComponent,
    ProductDetailComponent,
    InventoryTrackerComponent,
    MonthlyInventoryComponent,
    SalesComponent,
    PurchasesComponent,

  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    FormsModule
  ]
})
export class AppLayoutModule { }
