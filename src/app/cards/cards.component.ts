import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, of, startWith } from 'rxjs';
import { DataState } from '../enum/data-state.enum';
import { AppState } from '../Interface/App-State';
import { cards } from '../Interface/card';
import { CustomCardResponse } from '../Interface/CustomCardResponse';
import { CardService } from '../_services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  status: string;
  errorMessage: any;
  isupdatepoped = false
  cardToUpdateId : number
  chargeCardPop = false
  form: any = {};
  charge: any = {};
  selectedRowIndex:any
  dataSource:any
  cardsNumber = 0
  chargeLoading = false

  toDisplayCardId = 0
  chargeSuccessful = false

   isSuccessful = false
  constructor(private cardservice: CardService) { }

  appState$: Observable<AppState<CustomCardResponse>>;
  readonly DataState = DataState;

  

  ngOnInit(): void {
    this.appState$ = this.cardservice.cards$
      .pipe(
        map(
          (response) => {
            return { dataState: DataState.LOADED_STATE, appData: response }
          }
        ),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError(
          (error: String) => {
            return of({ dataState: DataState.ERROR_STATE, error: error });
          })
      )
          this.appState$.subscribe(
            (res)=>{
              let number = res.appData.data.cards.length;
              console.log("cards number"+number);
              this.cardsNumber = number 
              console.log("cards number "+this.cardsNumber);
            }
          )
      console.log(this.cardsNumber)
      }

  deleteCard(id: number) {
    console.log(id);
    this.cardservice.deleteCard(id).subscribe({
      next: data => {
        this.status = 'Delete successful';
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
    console.log(status);
  }

  updateCard():void{
    this.form.id=this.cardToUpdateId
    console.log(this.form)
    this.cardservice.updateCard(this.form).subscribe( data => {
      console.log(data);
      this.isSuccessful=true;
    },
    err => {
      this.errorMessage = err.error.message;
    });
  }

  startupdate(cardId:number){
    this.isupdatepoped = !this.isupdatepoped ;
    this.cardToUpdateId = cardId;
    console.log(this.cardToUpdateId);
    this.toDisplayCardId = -1

  }

  startcharge(){
    this.chargeCardPop = !this.chargeCardPop ;
    this.toDisplayCardId = -1

  }

  chargeDefault(){
    console.log(this.charge.amount)
    this.cardservice.ChargeDefault(this.charge.amount).subscribe( data => {
      console.log(data);
      
      this.chargeSuccessful=true;
      this.delay(5000)
      this.chargeLoading = false
      this.chargeCardPop = !this.chargeCardPop
      this.toDisplayCardId = 0
    }),startWith(
      this.chargeLoading = true
    );
    
  }

  cancelCharge(){
    this.chargeCardPop = !this.chargeCardPop ;
    this.toDisplayCardId = 0
    this.chargeSuccessful=false;

  }

  cancelUpdate(){
    this.isupdatepoped = !this.isupdatepoped ;
    this.toDisplayCardId = 0

  }

  nextCard(){
    if(this.cardsNumber>this.toDisplayCardId+1){
      this.toDisplayCardId = this.toDisplayCardId +1;
      console.log(this.toDisplayCardId)
      console.log(this.cardsNumber)
    }
    else{
      this.toDisplayCardId = this.toDisplayCardId ;
    }
    
  }

  previousCard(){
    if(this.toDisplayCardId>0){
      this.toDisplayCardId = this.toDisplayCardId  - 1;
      console.log(this.toDisplayCardId)
      console.log(this.cardsNumber)
    }
    else{
      this.toDisplayCardId = this.toDisplayCardId ;
    }
    


    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }



}
