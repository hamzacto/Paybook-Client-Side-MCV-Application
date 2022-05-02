import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { product } from '../Interface/product';
import { CartService } from '../_services/cart.service';
import { ClientService } from '../_services/client.service';
import { VendorService } from '../_services/Vendor.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {
  retrievedImage: any;
  base64Data: any;
  
  product: product;
  public items:any;
  item;
  CartNumberItems:number
  showCart=false

  form: any = {};
  checkOutSuccess=false

  constructor(private vendorServide:VendorService,public cartService: CartService,private clientService:ClientService) { }


  products$:Observable<any>
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.products$ = this.vendorServide.getAllProducts().pipe(
      map(
        (data)=>{
          // console.log(data)
          
          return {response:data}
        }
      )
    )
    
    this.CartNumberItems = this.cartService.numberOfItems();
    console.log(this.cartService.getItems())
    // this.cartService.clearCart()
  }

  decodeImage(image){
    this.base64Data = image
    image='data:image/png;base64,' + this.base64Data;
    return image
  }

  // addToCart(product:product){
  //     this.cart.addToCart(product)
  // }

  deleteItem(item){
    this.cartService.deleteItem(item);
    let domItem = document.getElementById(`cart-item`+item.product.id);
    setTimeout(() =>{
    domItem.classList.add('delete-style');
    domItem.parentNode.removeChild(domItem);
    },1000);

  }
  addQty(item){
    this.cartService.addQty(item);
  }

  addToCart(product: product){
    this.cartService.addToCart(product)
    this.CartNumberItems = this.cartService.numberOfItems();
  }

  subTotal():number{
    var sum:number = 0
    this.cartService.getItems().forEach(
      (element)=>{
        sum += element.product.price*element.quantity
      }
    )
    return sum
  }

  checkOut(productId,quantity){
    console.log("check out")
       return  this.clientService.checkOut(productId,quantity);
  }

  buy(){
    var items  = this.cartService.getItems()
    
    let res =false
    
    items.forEach(
      (item)=>{
        this.checkOut(item.product.id,item.quantity)
        this.cartService.deleteItem(item)
      }
    );
    this.checkOutSuccess = true
  }

  clearCart(){
    this.cartService.clearCart()
  }
  popCart(){
    this.showCart=!this.showCart
    this.checkOutSuccess=false
    console.log(this.checkOutSuccess)
  }
  deleteFromCart(item){
    this.cartService.deleteItem(item)
  }

}
