import { Component, OnInit } from '@angular/core';
import { async, AsyncSubject, lastValueFrom, map, Observable } from 'rxjs';
import { ClientService } from 'src/app/_services/client.service';
import { interval} from 'rxjs';

@Component({
  selector: 'app-vendor-dashbord',
  templateUrl: './vendor-dashbord.component.html',
  styleUrls: ['./vendor-dashbord.component.css']
})
export class VendorDashbordComponent implements OnInit {
  showOperations = 0
  constructor(private clientService:ClientService) { }

  clientId$:Observable<any>
  id:number
  ngOnInit(): void {
    let idC : number

    this.clientId$ = this.clientService.getClientIdByEmail().pipe(
      map(
        (res)=> {
          // console.log(this.id)
          // console.log(res)
          return res}
      )
    )
    // const myvar = async lastValueFrom(this.clientId$);

  
    // console.log(myvar)

    // console.log(idC)

    // // this.id = this.clientId$.pipe(
    // //   map(
    // //     (res)=>{return res}
    // //   )
    // // )
    this.ClientId()
  }


  myClientId():Promise<number>{
    this.clientId$ = this.clientService.getClientIdByEmail().pipe(
      map(
        (res)=> {
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


}
