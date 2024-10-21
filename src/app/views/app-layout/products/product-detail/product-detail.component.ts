import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpServiceService } from '../../../../services/http-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [MessageService]
})
export class ProductDetailComponent {
  istoggleUpdateProduct:boolean = true;
  isSubmitted:boolean = false;
  isUpdateProduct:boolean = false;
  loading:boolean = false;
  isWareHouse:boolean = false;
  isProductUpdated: boolean = false;
  updateQuantityForm!:any;
  productId:any;
  productDetail:any =null;
  images:any;
  wareHouses:any;


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

  constructor(private router: Router,
              private fb: FormBuilder,
              private messageService: MessageService,
              private api:HttpServiceService){}




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

        this.updateQuantityForm = this.fb.group({
          // Form fields here
          quantity: ['', Validators.required],
          unit: ['', [Validators.required]],
          note: ['', [Validators.required]],
          // ... other fields
        });


        this.getProduct(this.getProductId())
    }

  route(){
    this.router.navigateByUrl('/app/product')
    console.log('router click')
  }


  getProductId(){
    const url = window.location.href;
    const segments = url.split('/');
    this.productId = segments[segments.length - 1];
  }

  getProduct(id:any){
    this.api.get('products/' + this.productId).subscribe(
      res=>{
        console.log(res);
        this.productDetail = res;
        this.images = this.productDetail.data.media
        console.log('images', this.images);
      },
      err=>{
        console.log(err);
      }
    )
  }

  getWarehouses(){
    this.api.get('warehouses').subscribe(
      res=>{
        this.wareHouses = res
        this.wareHouses = this.wareHouses.data
      }
    )
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

  get f(){
    return this.updateQuantityForm.controls;
  }

  updateQuantity(){
    this.isSubmitted=!this.isSubmitted;
    this.loading = true;

    if(this.updateQuantityForm.invalid){
      console.log('form invalid');
      return;
    }

    setTimeout(() => {
      this.showSuccess('quantity updated successfully!')
      this.loading = false;

    }, 2000)

  }


  showSuccess(message: string) {
    console.log('showSuccess')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }



}
