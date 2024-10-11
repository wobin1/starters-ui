import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchUploadHeaderComponent } from './search-upload-header/search-upload-header.component';
import { ButtonComponent } from './button/button.component';
import { TagComponent } from './tag/tag.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchUploadHeaderComponent,
    ButtonComponent,
    TagComponent,
    SubHeaderComponent,
    ProductCardComponent,
    SubMenuComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HeaderComponent,
    SearchUploadHeaderComponent,
    TagComponent,
    SubHeaderComponent,
    ProductCardComponent,
    SubMenuComponent,
    ItemListComponent

  ]
})
export class SharedModule {
  constructor(){
    console.log('SharedModule loaded');
  }
}
