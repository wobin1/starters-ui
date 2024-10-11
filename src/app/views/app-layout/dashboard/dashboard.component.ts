import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    data: any;
    options: any;
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

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');


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

}
