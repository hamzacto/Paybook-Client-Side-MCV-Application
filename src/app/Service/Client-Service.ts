import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { Client } from "../Interface/Client";
import { CustomClientResponse } from "../Interface/CustomClientResponse";
import { UserAuth } from "../Interface/User-Auth";


@Injectable({
    providedIn: 'root'
  })
export class ClientService{
    
    apiUrl: string = 'C:\Users\B-M\payementapp\src\assets\Clients.json';
    serverApiUrl:string = 'http//localHost:9000';
    constructor(private http:HttpClient){};

    clients$ = <Observable<CustomClientResponse>>
    this.http.get(`http://localhost:9000/Client/all`)
    .pipe(
        tap(console.log),
        catchError(this.handleError)
    )

    client$ = (clientId : number) => <Observable<CustomClientResponse>>
    this.http.get<CustomClientResponse>(`${this.serverApiUrl}/Client/retrive/${clientId}`)
    .pipe(
        tap(console.log),
        catchError(this.handleError)
    )
    
    save$ = (client : Client) => <Observable<CustomClientResponse>> 
    this.http.post<CustomClientResponse>(`http://localhost:9000/Client/create`,client)
    .pipe(
        tap(console.log),
        catchError(this.handleError)
    )

    delete$ = (clientId:number) => <Observable<CustomClientResponse>>
    this.http.delete(`${this.serverApiUrl}/Client/${clientId}`)
    .pipe(
        tap(console.log)
        ,catchError(this.handleError)
    )

    update$ = (client:Client) => <Observable<CustomClientResponse>>
    this.http.put(`${this.serverApiUrl}/Client/update`,client)
    .pipe(
        tap(console.log),
        catchError(this.handleError)
    )

    auth$ = (userAuthParams:UserAuth) => <Observable<CustomClientResponse>>
    this.http.post(`${this.serverApiUrl}/Client/Login`,userAuthParams)
    .pipe(
        tap(console.log),
        catchError(this.handleError)
    )

    getByEmail$ = (userEmail:string) => <Observable<CustomClientResponse>>
    this.http.get(`${this.serverApiUrl}/Client/retriveByEmail/${userEmail}`)
    .pipe(
        tap(console.log),
        catchError(this.handleError)
    )




    handleError(handleError: any): import("rxjs").Observable<never> {
        throw new Error(`an error has occured ${handleError}`)
    }

}