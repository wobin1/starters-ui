import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PurchaseService } from '../../../services/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss',
  providers: [MessageService]  // Add MessageService to your component providers
})
export class PurchasesComponent {
  isAddSale: boolean = false;
  isCreatePurchase:boolean = false
  isSubmitted:boolean = false;
  formIsValid:boolean = false;
  loading:boolean = false;
  totalPrice: number = 0;
  invalidFields!: string[];
  purchases:any = []
  purchaseForm:any = {
    "purchaseDate": "",
    "supplier": "",
  };

  expandedPurchases: Set<number> = new Set();

  purchaseItems: any[] = [
    { product: '', quantity: null, pricePerUnit: null }
  ];

  suppliers = [
    {"name": "supplier A"},
    {"name": "supplier B"},
    {"name": "supplier C"},
    {"name": "supplier D"},
  ]

  constructor(private fb:FormBuilder,
              private messageService: MessageService,
              private purchaseService: PurchaseService){}

  ngOnInit(){
    this.getPurchases()
  }

  toggleCreatePurchase() {
    this.isCreatePurchase = !this.isCreatePurchase;
  }

  getPurchases(){
    this.purchases = this.purchaseService.getPurchases();
  }

  addItem() {
    this.purchaseItems.push({ product: '', quantity: null, pricePerUnit: null });
  }


  calculateTotalCost(): number {
    return this.purchaseItems.reduce((total, item) => {
      return total + (item.quantity * item.pricePerUnit || 0);
    }, 0);
  }

  tableHeader = [
    "purchaseDate",
    "supplier",
    "items",
    "totalCost",
    ""
  ]


  getTotalPrice(items: any[]): number {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  toggleExpand(index: number) {
    if (this.expandedPurchases.has(index)) {
      this.expandedPurchases.delete(index);
    } else {
      this.expandedPurchases.add(index);
    }
  }

  get f(){
    return this.purchaseForm.controls;
  }

  validateForm(){

    if(this.purchaseForm.purchaseData == '' || this.purchaseForm.supplier == ''){
      this.loading = false;
      return;
    }

    if(this.purchaseItems.length > 0){
      this.formIsValid = true;
      console.log('form is valid')
    }else {
      this.formIsValid = false;
      console.log('form is invalid')
      this.loading = false;
      return;
    }
  }

  savePurchase() {
    this.isSubmitted = true;
    this.loading = true;
    this.validateForm()
    const purchaseData = {
      purchaseDate: this.purchaseForm.purchaseDate, // get this from the input
      supplier: this.purchaseForm.supplier, // get this from the input
      items: this.purchaseItems,
      totalCost: this.calculateTotalCost()
    };

    // Logic to save purchaseData (e.g., call a service)
    this.showSuccess('purchase added successfully!')
    console.log(purchaseData);
  }

  toggleAddPurchase(){
    this.isCreatePurchase = !this.isCreatePurchase
  }

  showSuccess(message: string) {
    console.log('showSuccess')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }


}
