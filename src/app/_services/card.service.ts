import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tokenize } from "@angular/compiler/src/ml_parser/lexer";
import { Injectable } from "@angular/core";
import { async, catchError, map, Observable, of, startWith, tap } from "rxjs";
import { AppConstants } from "../common/app.constants";
import { DataState } from "../enum/data-state.enum";
import { AppState } from "../Interface/App-State";
import { cards } from "../Interface/card";
import { CustomCardResponse } from "../Interface/CustomCardResponse";
import { CustomClientResponse } from "../Interface/CustomClientResponse";
import { ClientService } from "./client.service";
import { TokenStorageService } from "./token-storage.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};


@Injectable({
  providedIn: 'root'
})
export class CardService {
  id :number
  appState$: Observable<AppState<CustomClientResponse>>;
  
  constructor(private http: HttpClient, private token: TokenStorageService , private clientService:ClientService) { }

  getCards(): any {
    return this.http.get(AppConstants.API_BASE_URL + 'Cards/'+this.token.getUser().email);
  }


  cards$ = <Observable<CustomCardResponse>>
    this.http.get<CustomCardResponse>(AppConstants.API_BASE_URL +this.token.getUser().email+'/Cards')
      .pipe(
        tap(console.log)
      )


  register(card): Observable<any> {
    return this.http.post(AppConstants.API_BASE_URL + 'Card/link'+'?email='+this.token.getUser().email, {
      number: card.number,
      balance: 0,
      holderName: card.holderName,
      exp_month: card.exp_month,
      exp_year: card.exp_year,
      cvc: card.cvc,
      isDefault: true,
    }, httpOptions);
  }

  


  deleteCard(cardId: number): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });
    window.location.reload()
    return this.http.post(AppConstants.API_BASE_URL + "Delete/Card",cardId).pipe(
      tap(console.log)
    )
    
  }

  updateCard(CardBody):Observable<any>{
    console.log("card body =>")  
    
    CardBody = {
      id:CardBody.id,
      balance:200,
      holderName:CardBody.holderName,
      exp_month:CardBody.exp_month,
      exp_year:CardBody.exp_year,
      cvc:CardBody.cvc,
      isDefault:false,
      number:CardBody.number,
    }
    console.log(CardBody)
      return <Observable<cards>> this.http.post("https://localhost:8080/Card/update/"+CardBody.id,
        CardBody)
  }


  ChargeDefault(amount):Observable<any>{ 
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    console.log("id :"+this.clientService.getCurrentUserEmail())


      
    let chargeamout : number
    chargeamout = amount
    return this.http.post("https://localhost:8080/chargefromdefault/"+this.clientService.getCurrentUserEmail(),chargeamout,httpOptions);
  }



  


}
