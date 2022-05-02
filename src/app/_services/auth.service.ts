import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      email: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup', {
      displayName: user.displayName,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }

  
  registerVendor(vendor): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup/Vendor', {
      displayName: vendor.displayName,
      email: vendor.email,
      password: vendor.password,
      matchingPassword: vendor.matchingPassword,
      socialProvider: 'LOCAL',
      creatingDate:vendor.creatingDate,
      publicStatus:vendor.publicStatus,
      capital:vendor.capital,
      webSiteUrl:vendor.webSiteUrl,
      phoneNumber:vendor.phoneNumber
    }, httpOptions);
  }
}
