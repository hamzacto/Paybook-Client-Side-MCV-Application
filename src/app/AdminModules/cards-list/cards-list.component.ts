import { Component, OnInit } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor() { }


  Clients$:Observable<any>

  ngOnInit(): void {
      
  }

}
