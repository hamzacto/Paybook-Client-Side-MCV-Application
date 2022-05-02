import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { startWith } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  vendor: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  showSingle = 1;
  dataLoading = false

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.delay(50000);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.dataLoading = false;
        // this.delay(50000);
        this.router.navigate(['login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    ),startWith(
      this.dataLoading = true
    );
  }




  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }



  registerVendor(): void {
    this.authService.registerVendor(this.vendor).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.delay(50000);
        this.dataLoading = false;
        // this.delay(50000);
        this.router.navigate(['login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    ),startWith(
      this.dataLoading = true
    );;
  }

}
