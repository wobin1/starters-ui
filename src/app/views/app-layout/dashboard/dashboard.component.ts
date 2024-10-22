import { Component } from '@angular/core';
import { HttpServiceService } from '../../../services/http-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [MessageService]  // Import MessageService to use it in the component
})
export class DashboardComponent {
    responsiveOptions: any[] | undefined;
    data: any;
    options: any=null;
    metrics: any=null;
    TopSellingProduct: any=null;
    warehouseDetail: any=null;
    products = [
      {
        "name": "SPRING ROLLS (CHICKEN)",
        "amountSold": 120,
      },
      {
        "name": "FISH KEBAB",
        "amountSold": 120,
      },
      {
        "name": "Buns",
        "amountSold": 120,
      },
      {
        "name": "MEAT PIE (MINI)",
        "amountSold": 120,
      },
    ]

    constructor(private api:HttpServiceService, private messageService:MessageService){}

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        this.getMetrics()
        this.getTopSellingProducts()
        this.getWarehouseDetail()

        this.data = {
            // labels: ['A', 'B'],
            datasets: [
                {
                    data: [300, 200],
                    backgroundColor: [documentStyle.getPropertyValue('--black-500'), documentStyle.getPropertyValue('--gray-500')],
                    // hoverBackgroundColor: [documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--black-400')]
                }
            ]
        };


        this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }

    getTopSellingProducts(){
      this.api.get('dashboard/topsellingproducts').subscribe(
        res=>{
          this.TopSellingProduct = res
          console.log(this.TopSellingProduct)
        }
      )
    }

    getMetrics(){
      this.api.get('dashboard/metrics').subscribe(
        res=>{
          this.metrics = res;
          console.log(this.metrics)
        },
        err=>{
          this.showError('Error fetching metrics');
        }
      )
    }

    getWarehouseDetail(){
      this.api.get('dashboard/warehouses/details').subscribe(
        res=>{
          this.warehouseDetail = res;
          console.log(this.warehouseDetail)
        },
        err=>{
          this.showError('Error fetching metrics');
        }
      )
    }

    showError(message:string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
