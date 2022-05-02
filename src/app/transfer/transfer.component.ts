import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { transferService } from '../_services/transfer.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  form: any = {};
  constructor(private transferService: transferService) { }
  dataLoading=false
  isSeccuseful = false
  errorMessage :string
  isTransferFailed
  ngOnInit(): void {
      // this.transferService.getcurrentUserId()
  }

  makeTransfer(){
    this.transferService.makeTransfer(this.form).subscribe(
      (res) => {console.log(res)
                this.dataLoading = false
                this.isSeccuseful = true
      },
      err => {
        this.errorMessage = err.error.message;
        this.isTransferFailed = true;
      }
    ),startWith(
      this.dataLoading = true
    )
  }

  getOperations(){
    
  }

}
