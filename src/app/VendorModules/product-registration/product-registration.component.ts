import { Component, OnInit } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { VendorService } from 'src/app/_services/Vendor.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  dataloaded = true
  isSuccesful = false
  product : any = {} 

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
 
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
  }

  RegisterProduct():void{

    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile);


     this.vendorService.registerProduct(this.product,uploadImageData).subscribe(
        data=> {console.log(data)
        this.dataloaded=true
        this.isSuccesful = true
      }

      ),startWith(
        this.dataloaded=false
      );
  }


  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

}
