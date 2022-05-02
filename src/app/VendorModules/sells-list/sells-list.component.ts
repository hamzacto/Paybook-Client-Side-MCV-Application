import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { VendorService } from 'src/app/_services/Vendor.service';

@Component({
  selector: 'app-sells-list',
  templateUrl: './sells-list.component.html',
  styleUrls: ['./sells-list.component.css']
})
export class SellsListComponent implements OnInit {
  sellsList$:Observable<any>
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.sellsList$ = this.vendorService.getAllSells().pipe(
      map(
        (response)=>{
          console.log(response)
          return {response:response}
        }
      )
    )
  }

}
