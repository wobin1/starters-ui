import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [MessageService]  // Add MessageService to the component's providers array
})
export class SignUpComponent {
  registrationForm: any;
  loading:boolean = false;
  isSubmitted:boolean = false;
  hidePassword:boolean = true;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ){}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  get f(){return this.registrationForm.controls}


  register(){
    console.log('submitted')
    this.isSubmitted = true;
    this.loading=true
    if(this.registrationForm.invalid){
      this.loading=false;
      return;
    }

    this.auth.signup(this.registrationForm.value).subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/auth/login']);

      },
      err=> {
        console.log(err)
      }
    );
  }


  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

  showSuccess(message:string) {
    console.log(message);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message:string) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
