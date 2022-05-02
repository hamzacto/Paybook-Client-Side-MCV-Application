import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from '../enum/data-state.enum';
import { AppState } from '../Interface/App-State';
import { CustomClientResponse } from '../Interface/CustomClientResponse';
import { ClientService } from '../_services/client.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','./style.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  appState$: Observable<AppState<CustomClientResponse>>;
  base64Data:any


  
  selectedFile: File;
  retrievedImage: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  
  
  constructor(private token: TokenStorageService,private clientService:ClientService ,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.appState$ = this.clientService.getclient().pipe(
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
    );
    console.log(this.clientService.getCurrentUserEmail())
    console.log(this.appState$);
    
    this.getProfileImage()
    


    }
    addimage(){
      const uploadImageData = new FormData();
      uploadImageData.append('image', this.selectedFile);

      this.clientService.addImage(uploadImageData).subscribe(
        (data)=>console.log(data)
      )
    }
    
    decodeImage(image){
      this.base64Data = image
      image='data:image/png;base64,' + this.base64Data;
      return this.domSanitizer.bypassSecurityTrustUrl(JSON.stringify(image))
      
    }


    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];

      const uploadImageData = new FormData();
      uploadImageData.append('image', this.selectedFile);

      this.clientService.addImage(uploadImageData).subscribe(
        (data)=>console.log(data)
      )


      this.clientService.retriveProfileImage().subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/png;base64,' + this.base64Data;
        }
      );

      window.location.reload();

    }

    getProfileImage(){
      this.clientService.retriveProfileImage().subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/png;base64,' + this.base64Data;
        }
      );
    }
    
  
}
