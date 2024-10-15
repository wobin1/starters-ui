import { Component } from '@angular/core';
import { SalesService } from '../../../services/sales.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
  providers: [MessageService]
})
export class SalesComponent {
  isAddSale: boolean = false;
  saleDetailHeader = ['time', 'product', 'quantity', 'saleAmount']
  tableHeader = [
    "Date",
    "Sales",
    "Revenue",
    "Profit",
    "Expenses",
    "Customers",
    "Top Sellers",
    "Notes"
  ]

  sales:any;
  expandedSales: Set<number> = new Set();
  salesForm:any;
  isSubmitted: boolean = false;
  loading: boolean = false;


  constructor(private salesService: SalesService, private fb: FormBuilder, private messageService: MessageService){
    this.salesForm = this.fb.group({
      // Sale Information
      saleDate: ['', Validators.required],
      pricePerUnit: ['', [Validators.required, Validators.min(0)]],

      // Sale Details
      product: ['', Validators.required],  // Not required by default
      quantity: ['', Validators.required],  // Not required by default
    });
  }


  ngOnInit(){
    this.getSales()
  }

  toggleAddSale(){
    this.isAddSale =!this.isAddSale;
  }

  toggleExpand(index: number) {
    if (this.expandedSales.has(index)) {
      this.expandedSales.delete(index);
    } else {
      this.expandedSales.add(index);
    }
  }

  getSales(){
    let data =this.salesService.getSalesData()
    this.sales = data
  }


  get f(){return this.salesForm.controls}

  saveSale() {
    this.isSubmitted = true;
    this.loading = true;

    if(this.salesForm.invalid){
      return;
    }

    const purchaseData = {
      purchaseDate: '', // get this from the input
      supplier: '', // get this from the input
    };

    // Logic to save purchaseData (e.g., call a service)
    this.showSuccess('sale saved successfully!')
    console.log(purchaseData);
  }

  isLast(item: string, list: string[]): boolean {
    return list.indexOf(item) === list.length - 1;
  }

  showSuccess(message: string) {
    console.log('showSuccess')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
