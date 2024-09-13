import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';
import { CartDataService } from '../cart-data.service';
import { RouterModule} from '@angular/router'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  cart: any[] = [];
  wishlist: any[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private location: Location,
    private cartDataService: CartDataService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      } else {
        this.user = null;
      }
     
    }

    this.cart = this.cartDataService.getCartData();
    this.wishlist = this.cartDataService.getWishlistData();
  }

  goBack(): void {
    this.location.back(); 
  }

  getTotalCost(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItem(index: number): void {
    this.cart.splice(index, 1);
    this.cartDataService.updateCartData(this.cart); 
  }

  removeFromWishlist(index: number): void {
    this.wishlist.splice(index, 1);
    this.cartDataService.updateWishlistData(this.wishlist); 
  }

  addToCart(item: any): void {
    
    if (!item.quantity) {
      item.quantity = 1;
    }
  
    
    const existingCartItem = this.cart.find(cartItem => cartItem.name === item.name);
  
    if (existingCartItem) {
      
      existingCartItem.quantity += item.quantity;
    } else {
      
      this.cart.push(item);
    }
  
    
    this.cartDataService.updateCartData(this.cart);
  
    
    this.removeFromWishlist(this.wishlist.findIndex(wishlistItem => wishlistItem.name === item.name));
  }
  
  

  addToWishlist(item: any): void {
    
    const itemExists = this.wishlist.some(wishlistItem => wishlistItem.id === item.id);

    if (!itemExists) {
      this.wishlist.push(item);
      this.cartDataService.updateWishlistData(this.wishlist); 
    } else {
      alert('Item is already in your wishlist.');
    }
  }
  logout(): void {
    console.log('Logging out...');
    
   
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    localStorage.removeItem('wishlist');
    console.log('LocalStorage cleared for user, cart, and wishlist');
    
    
    this.cart = [];
    this.wishlist = [];
    console.log('Cart and wishlist arrays in component are now empty');
    
   
    this.cartDataService.clearCart();
    this.cartDataService.clearWishlist();
    
    
  }
  
  
  
  
}
