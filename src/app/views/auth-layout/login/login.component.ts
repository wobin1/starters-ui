import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: any;
  isSubmitted: boolean = false;
  loading: boolean = false;
  hidePassword: boolean = true;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f(){return this.loginForm.controls;}

  login(){
    this.isSubmitted = true;
    this.loading = true;

    if(this.loginForm.invalid){
      this.loading = false;
      return;
    }

    const formData = new FormData();

    formData.set('username', this.loginForm.get('email')?.value);
    formData.set('password', this.loginForm.get('password')?.value);
    // this.auth.login(formData).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.loading = false;
    //     this.router.navigate(['/app/home']);
    //   },
    //   (err) => {
    //     console.error(err);
    //     this.loading = false;
    //   }
    // );

        this.router.navigate(['/app/dashboard']);

  }

  viewPassword(){
    this.hidePassword =!this.hidePassword;
  }

}
