import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { transferService } from '../_services/transfer.service';

@Component({
  selector: 'app-operations-list',
  templateUrl: './operations-list.component.html',
  styleUrls: ['./operations-list.component.css']
})
export class OperationsListComponent implements OnInit {


  appState$: Observable<any>;
  MyOperation$ : Observable<any>;
  showOperations = true ;
  cond = false
  pageNumber = 0
  SenderpageNumber = 0

  constructor(private transferService: transferService) { }

  ngOnInit(): void {
    this.appState$ = this.transferService.getOperations(0).pipe(
      map(
        (response) => {
          console.log(response)
          return { response: response }
        }
      )
    )


    this.MyOperation$ = this.transferService.getOperationsBySender(0).pipe(
      map(
        (response) => {
          console.log(response)
          return {response : response}
        }
      )
    )
  }


  // getMyOperations(){
  //   this.showMyOperations = true 
  //   this.MyOperation$ = this.transferService.getOperationsBySender().pipe(
  //     map(
  //       (response) => {
  //         console.log(response)
  //         return {response : response}
  //       }
  //     )
  //   )

  // }

  NextPage():void{
    this.pageNumber ++
    this.appState$ = this.transferService.getOperations(this.pageNumber).pipe(
      map(
        (response) => {
          console.log(response)
          return { response: response }
        }
      )
    )
    
  }


  PreviousPage():void{
    if(this.pageNumber>0){this.pageNumber --
      this.appState$ = this.transferService.getOperations(this.pageNumber).pipe(
        map(
          (response) => {
            console.log(response)
            return { response: response }
          }
        )
      )}
    
    
  }

  page(i):void{
    this.pageNumber = i
    this.appState$ = this.transferService.getOperations(i).pipe(
      map(
        (response) => {
          console.log(response)
          return { response: response }
        }
      )
    )
  }




  NextSenderPage():void{
    this.pageNumber ++
    
    this.MyOperation$ = this.transferService.getOperationsBySender(this.pageNumber).pipe(
      map(
        (response) => {
          console.log(response)
          return {response : response}
        }
      )
    )
    
  }


  PreviousSenderPage():void{
    if(this.pageNumber>0){this.pageNumber --
      this.MyOperation$ = this.transferService.getOperationsBySender(this.pageNumber).pipe(
        map(
          (response) => {
            console.log(response)
            return {response : response}
          }
        )
      )
    
    
  }}

  Senderpage(i):void{
    this.pageNumber = i
    this.MyOperation$ = this.transferService.getOperationsBySender(this.pageNumber).pipe(
      map(
        (response) => {
          console.log(response)
          return {response : response}
        }
      )
    )
  }


}
