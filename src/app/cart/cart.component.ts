import { Component, OnInit } from '@angular/core';
import { product } from '../Interface/product';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  product: product;
  public items:any;
  item;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  
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
  }

}
