import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { VendorService } from 'src/app/_services/Vendor.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private vendorService:VendorService) { }


  products$ : Observable<any>

  ngOnInit(): void {

    this.products$ = this.vendorService.getProductByVendor().pipe(
      map(
        (respnse)=>{
          console.log(respnse)
          return{respnse:respnse}
        }
      )
    )
  }

}
