import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { transferService } from 'src/app/_services/transfer.service';

@Component({
  selector: 'app-operations-for-admin',
  templateUrl: './operations-for-admin.component.html',
  styleUrls: ['./operations-for-admin.component.css']
})
export class OperationsForAdminComponent implements OnInit {

  constructor(private trasferService:transferService) { }
  operations$ : Observable<any>
  ngOnInit(): void {
    this.operations$ = this.trasferService.getAllOperation().pipe(
      map(
        (response)=>{
          console.log(response)
          return{response:response}
        }
      )
    )
  }

}
