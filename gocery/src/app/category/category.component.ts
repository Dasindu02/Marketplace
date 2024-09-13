import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  selectedCategory: string | null = null;
  products = [
    {
      name: 'Coca-Cola',
      description: 'Per 1 unit(s)',
      price: 380,
      image: '/assets/pro1.jpeg',
      quantity: 1 
    },
    {
      name: 'Chilli Powder',
      description: 'Per 100 unit(g)',
      price: 200,
      image: '/assets/pro2.jpg',
      quantity: 1 
    },
    {
      name: 'Masala Noodles',
      description: 'Per 1 unit(s)',
      price: 180,
      image: '/assets/pro3.jpeg',
      quantity: 1 
    },
    {
      name: 'Turmeric powder',
      description: 'Per 100g unit(s)',
      price: 220,
      image: '/assets/pro6.jpeg',
      quantity: 1 
    },
    {
      name: 'Chocolate Biscuit',
      description: 'Per 250g unit(s)',
      price: 209.99,
      image: '/assets/pro5.jpeg',
      quantity: 1 
    },
    {
      name: 'Virgin Olive Oil 2L',
      description: 'Per 2L unit(s)',
      price: 1800,
      image: '/assets/pro4.jpg',
      quantity: 1 
    },
    {
      name: 'Oat Krunch Dark',
      description: 'Per 400g unit(s)',
      price: 340,
      image: '/assets/pro7.jpg',
      quantity: 1 
    },
    {
      name: 'Britannia    Bourbon',
      description: 'Per 200g unit(s)',
      price: 450,
      image: '/assets/pro8.jpg',
      quantity: 1 
    },
    {
      name: 'Ade Berry Lemonade',
      description: 'Per 500ml unit(s)',
      price: 600,
      image: '/assets/pro9.jpeg',
      quantity: 1 
    },
    {
      name: 'Shin Ramuyn',
      description: 'Per 130g unit(s)',
      price: 555,
      image: '/assets/pro10.jpg',
      quantity: 1 
    },
    {
      name: 'Rocky Road',
      description: 'Per 1L unit(s)',
      price: 1150.50,
      image: '/assets/pro11.png',
      quantity: 1 
    },
    {
      name: 'Doritos Crunch',
      description: 'Per 170g unit(s)',
      price: 250,
      image: '/assets/pro12.jpeg',
      quantity: 1 
    },
  ];

  cart: any[] = [];
  wishlist: any[] = [];
  showCart: boolean = false;
  successMessage: string = '';
  filteredProducts: any[] = [];

  constructor(private cartDataService: CartDataService) {}

  ngOnInit(): void {
    this.cart = this.cartDataService.getCartData();
    this.wishlist = this.cartDataService.getWishlistData();
   
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(product: any): void {
    this.cartDataService.addToCart(product);
    this.cart = this.cartDataService.getCartData(); 
    this.successMessage = 'Successfully added to cart';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 2000);

    this.showCart = true; 
  }

  addToWishlist(product: any): void {
    this.cartDataService.addToWishlist(product); 
    this.successMessage = 'Successfully added to wishlist';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 2000);
  }

  increaseQuantity(product: any): void {
    product.quantity++;
  }

  decreaseQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  toggleCart(): void {
    this.showCart = !this.showCart; 
  }

  viewCart(): void {
    console.log('Viewing cart details');
    
  }

  getTotalCost(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  
}