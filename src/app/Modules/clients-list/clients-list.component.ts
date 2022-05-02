import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from '../../enum/data-state.enum';
import { AppState } from '../../Interface/App-State';
import { CustomClientResponse } from '../../Interface/CustomClientResponse';
import { ClientService } from '../../Service/Client-Service';
@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css',
  'css/owl.carousel.min.css','css/style.css',
  'fonts/icomoon/style.css',
  'css/bootstrap.min.css']
})
// ./clients-list.component.html
@Injectable({
  providedIn: 'root'
})

export class ClientsListComponent implements OnInit {

  appState$: Observable<AppState<CustomClientResponse>>;

  constructor(private clientService:ClientService){}

  readonly DataState = DataState;

  ngOnInit():void{
    this.appState$=this.clientService.clients$
    .pipe(
      map(
        (response)=>{
          return  {dataState : DataState.LOADED_STATE,appData:response}
        }
      ),
      startWith({dataState : DataState.LOADING_STATE}),
      catchError(
        (error:String) => {
        return of( {dataState:DataState.ERROR_STATE,error :error} );
        })
    )
  }
  saveClient(Client):void{
  }

}
