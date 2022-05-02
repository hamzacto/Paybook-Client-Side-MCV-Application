import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';
import { Client } from '../Interface/Client';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
		  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
    }

@Injectable({
  providedIn: 'root'
})


export class VendorService {
  
  constructor(private http: HttpClient, private token: TokenStorageService) { }

  registerProduct(product,uploadImageData):Observable<any>{
    
    return this.http.post(AppConstants.API_BASE_URL+'Vendors/add-Product'+'?email='+this.token.getUser().email+
    '&name='+product.name+'&price='+product.price+'&categorie='+product.categorie+'&brand='+product.brand
    +'&dateFabrication='+product.dateFabrication+'&modelId='+product.modelId
    ,uploadImageData)
  }

  getProductByVendor():Observable<any>{
    return this.http.get(AppConstants.API_BASE_URL+"Vendor/"+this.token.getUser().email +"/Product/ALL",httpOptions)
  }

  getAllProducts():Observable<any>{
    return this.http.get(AppConstants.API_BASE_URL+"product/All")
  }
  getAllSells():Observable<any>{
    return this.http.get(AppConstants.API_BASE_URL+"Sells/All")
  }

  

}