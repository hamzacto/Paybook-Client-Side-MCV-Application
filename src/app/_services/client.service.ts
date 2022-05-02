import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tokenize } from "@angular/compiler/src/ml_parser/lexer";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, map, Observable, tap } from "rxjs";
import { AppConstants } from "../common/app.constants";
import { DataState } from "../enum/data-state.enum";
import { AppState } from "../Interface/App-State";
import { cards } from "../Interface/card";
import { Client } from "../Interface/Client";
import { CustomCardResponse } from "../Interface/CustomCardResponse";
import { CustomClientResponse } from "../Interface/CustomClientResponse";
import { TokenStorageService } from "./token-storage.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient, private token: TokenStorageService) { }

    readonly DataState = DataState;
    profile 
    clientId$:Observable<any>
    id:number

    getCurrentUserEmail() {
        console.log(this.token.getUser().email);
        return this.token.getUser().email;
    }

    getclient(): Observable<AppState<CustomClientResponse>> {
        let myparams: URLSearchParams = new URLSearchParams();
        myparams.append("email", this.getCurrentUserEmail());

        
        return <Observable<AppState<CustomClientResponse>>>
            this.http.get<CustomClientResponse>(AppConstants.API_BASE_URL + 'Client/ByEmail/' + this.getCurrentUserEmail())
                .pipe(
                    tap(console.log)
                );
    }

    getClients():Observable<any>{
        return this.http.get(AppConstants.API_BASE_URL+'Client/all');
    }

    getUsers():Observable<any>{
        return this.http.get(AppConstants.API_BASE_URL+'Users')
    }

    getClientIdByEmail():Observable<any>{
        console.log("email"+this.token.getUser().email)
        return this.http.get(AppConstants.API_BASE_URL+'Client/Id?email='+this.token.getUser().email, { responseType: 'text' })
    }

    myClientId():Promise<number>{
        this.clientId$ = this.getClientIdByEmail().pipe(
          map(
            (res)=> {
              // console.log(this.id)
              // console.log(res)
              return res}
          )
        )
        return lastValueFrom(this.clientId$);
    }
    
    async ClientId(): Promise<number> {
      const value = await this.myClientId() 
      // how to unwrap the value inside this  promise
      console.log(value)
      return value;
    }

    addImage(uploadImageData):Observable<any>{
        return this.http.post(AppConstants.API_BASE_URL+'Client/image'+'?email='+this.getCurrentUserEmail(),uploadImageData)
    }

    retriveProfileImage():Observable<Blob>{
        return this.http.get(AppConstants.API_BASE_URL+"Client/myImage"+'?email='+this.getCurrentUserEmail(),{ responseType: 'blob' })
    }

    checkOut(productId:number,quantity:number){
        console.log("service");
    
       return this.http.get(AppConstants.API_BASE_URL+'Client/Check-out/'+this.getCurrentUserEmail()+'/'+productId+'/'+quantity).subscribe();
    }

    sendMail(mail){
        return this.http.post(AppConstants.API_BASE_URL+'mail/new?senderEmail='+this.getCurrentUserEmail()+
        '&recieverEmail='+mail.recieverEmail,{
            object:mail.object,
            content:mail.content,
            sendingDate:"24/03/2022"
        })
    }

    clientMails():Observable<any>{
        return this.http.get(AppConstants.API_BASE_URL+"mail/my/"+this.getCurrentUserEmail())
      }

}