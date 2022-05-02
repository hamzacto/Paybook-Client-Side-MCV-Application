import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService:ClientService) { }
  Clients$:Observable<any>
  Users$:Observable<any>
  ngOnInit(): void {
    this.Clients$ = this.clientService.getClients().pipe(
      map(
        (response)=>{
          return {response: response};
        }
      )
    )

    this.Users$ = this.clientService.getUsers().pipe(
      map(
        (response)=>{
          console.log( response);
          return {response: response};
        }
      )
    )
  }

}
