import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      description: 'High-quality wireless headphones with noise cancellation',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 299.99,
      description: 'Advanced smartwatch with health monitoring features',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Casual Denim Jacket',
      price: 79.99,
      description: 'Classic denim jacket perfect for any casual outfit',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      category: 'Fashion',
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 129.99,
      description: 'Comfortable running shoes with advanced cushioning',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      category: 'Sports',
    },
    {
      id: 5,
      name: 'Gaming Mouse',
      price: 59.99,
      description: 'High-precision gaming mouse with RGB lighting',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
      category: 'Electronics',
    },
    {
      id: 6,
      name: 'Yoga Mat',
      price: 29.99,
      description: 'Premium non-slip yoga mat for comfortable practice',
      image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2',
      category: 'Sports',
    },
  ];

  categories = ['All', 'Electronics', 'Fashion', 'Sports'];
  selectedCategory: string = 'All';
  isLoggedIn: boolean = false;
  cartItemCount: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    // Check if user is logged in
    const shellData = localStorage.getItem('shellData');
    if (shellData) {
      this.isLoggedIn = JSON.parse(shellData).isAuthenticated;
    }

    // Subscribe to cart updates
    this.cartService.cart$.subscribe((items) => {
      this.cartItemCount = items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    });
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(
      (product) => product.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  navigateToReact() {
    this.router.navigate(['/cart']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
