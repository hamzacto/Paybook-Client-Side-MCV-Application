import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';
import { Client } from '../Interface/Client';
import { UserService } from './user.service';
import { TokenStorageService } from './token-storage.service';
import { ClientService } from './client.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class transferService {
  
    currentClient:Client;
    currentClientId:number;

  constructor(private http: HttpClient,private clientService:ClientService, private token: TokenStorageService) { }

  makeTransfer(transfer):Observable<any>{
    this.currentClientId =this.token.getUser().id
    console.log("client id" + this.currentClientId)

    return this.http.post(AppConstants.API_BASE_URL + 'make-transfer',{
        sendingEmail:this.token.getUser().email,
        recievingEmail:transfer.recievingEmail,
        montant:transfer.montant
    },httpOptions)
  }

  getOperations(pn):Observable<any>{
    return this.http.get("https://localhost:8080/" + 'operations/'+this.clientService.getCurrentUserEmail()+'?pn='+pn)
  }

  getOperationsBySender(pn):Observable<any>{
    return this.http.get("https://localhost:8080/" + 'MyOperations/'+this.clientService.getCurrentUserEmail()+'?pn='+pn)
  }


  getAllOperation():Observable<any>{
    return this.http.get("https://localhost:8080/"+"AllOperations")
  }
}
