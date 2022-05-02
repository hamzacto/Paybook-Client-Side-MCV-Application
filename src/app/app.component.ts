// import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from './enum/data-state.enum';
import { AppState } from './Interface/App-State';
import { CustomClientResponse } from './Interface/CustomClientResponse';
import { ClientService } from './Service/Client-Service';


import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','fonts/icomoon/style.css','css/owl.carousel.min.css','css/bootstrap.min.css','css/style.css']
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent{
  title = 'Tour of Heroes';
  

  //////////////////////////////////////////
  
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  status:number = 3
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.displayName;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}