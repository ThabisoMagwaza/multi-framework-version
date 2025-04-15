import { Component } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems$ = this.cartService.cart$;

  constructor(private cartService: CartService, private router: Router) {}

  getTotal(): number {
    return this.cartService.getTotal();
  }

  updateQuantity(item: CartItem, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 0) {
      this.cartService.updateQuantity(item.id, newQuantity);
    }
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  checkout() {
    // Navigate to React checkout
    this.router.navigate(['/react']);
  }

  continueShopping() {
    this.router.navigate(['/']);
  }
}
