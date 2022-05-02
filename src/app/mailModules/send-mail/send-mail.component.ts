import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  form: any = {};
  myMails$:Observable<any>
  blurClass=false
  selectedMail:any
  showSelected=false
  base64Data: any;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.myMails$=this.clientService.clientMails().pipe(
      map(
        (response)=>{
          console.log(response)
          return {response:response}
        }
      )
    )
  }


  sendMail(){
    return this.clientService.sendMail(this.form).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

  myMails(){

  }
  showmail(mail){
    this.selectedMail=mail 
    this.showSelected=true
    console.log(this.selectedMail)
  }

  decodeImage(image){
    this.base64Data = image
    image='data:image/png;base64,' + this.base64Data;
    return image
  }
}
