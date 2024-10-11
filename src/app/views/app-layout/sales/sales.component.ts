import { Component } from '@angular/core';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
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


  constructor(private salesService: SalesService){}

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

  saveSale() {
    const purchaseData = {
      purchaseDate: '', // get this from the input
      supplier: '', // get this from the input
    };

    // Logic to save purchaseData (e.g., call a service)
    console.log(purchaseData);
  }

  isLast(item: string, list: string[]): boolean {
    return list.indexOf(item) === list.length - 1;
  }

}
