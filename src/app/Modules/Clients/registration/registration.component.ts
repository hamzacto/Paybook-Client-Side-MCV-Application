import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from '../../../enum/data-state.enum';
import { AppState } from '../../../Interface/App-State';
import { CustomClientResponse } from '../../../Interface/CustomClientResponse';
import { ClientService } from '../../../Service/Client-Service';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/Interface/Client';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css',"vendor/select2/select2.min.css"
  ,"vendor/datepicker/daterangepicker.css","css/main.css",
  "vendor/mdi-font/css/material-design-iconic-font.min.css"
  ,"vendor/font-awesome-4.7/css/font-awesome.min.css"]
})

@Injectable({
  providedIn: 'root'
})

export class RegistrationComponent implements OnInit {

  appState$: Observable<AppState<CustomClientResponse>>;

  private dataSubject = new BehaviorSubject<CustomClientResponse>(null);
  constructor(private clientService:ClientService){}

  ngOnInit(): void {
  }

  saveClient(clientForm:NgForm):void{
    this.clientService.save$(clientForm.value as Client).pipe(
      map( 
        (response)=>{
          console.log(response);
        }
      ),
      catchError(
        (error:String) => {
        return of( {dataState:DataState.ERROR_STATE,error :error} );
        })
    )
  }

}
