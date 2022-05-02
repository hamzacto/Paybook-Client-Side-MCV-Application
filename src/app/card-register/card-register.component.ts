import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

 
  cardForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      creditCard: [],
      creditCardDate: [],
      creditCardCvv: [],
    });

  }

  onSubmit(){
    console.log(this.cardForm.value)
  }

}
