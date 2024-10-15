import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


interface Warehouse {
  id: string;
  name: string;
  address: string;
  productCount: string;
  itemCount: string;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  @Input() wareHouses!: Warehouse[];
  @Input() loading:boolean = false;
  @Output() togleModal = new EventEmitter<string>();
  @Output() saveProduct = new EventEmitter<string>();

  createProductForm:any;
  isSubmitted: boolean = false;



  constructor(private fb:FormBuilder){}


  ngOnInit(){
    this.createProductForm = this.fb.group({
      // Basic information
      productName: ['', Validators.required],
      warehouse: ['', Validators.required],
      vendor: ['', Validators.required],
      code: [''],
      sku: ['', Validators.required],
      image: ['', Validators.required],
      barcode: [''],

      // Sales information
      price: ['', [Validators.required, Validators.min(0)]],
      profit: ['', [Validators.required, Validators.min(0)]],
      margin: ['', [Validators.required, Validators.min(0)]],

      // Inventory
      quantity: ['', [Validators.required, Validators.min(1)]],
      unit: ['', Validators.required],
    });
  }

  toggleCreateProduct(){
    this.togleModal.emit()
  }


  get f() {
    return this.createProductForm.controls;
  }

  save(){
    this.isSubmitted = true;

    if(this.createProductForm.invalid){
      console.log("form invalid")
      return;
    }

    this.saveProduct.emit()
  }

}
