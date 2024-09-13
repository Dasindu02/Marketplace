import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  private cartKey = 'cart'; 
  private wishlistKey = 'wishlist'; 

  constructor() {}

  
  getCartData(): any[] {
    const cartData = localStorage.getItem(this.cartKey);
    return cartData ? JSON.parse(cartData) : [];
  }

  
  saveCartData(cart: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

 
  updateCartData(cart: any[]): void {
    this.saveCartData(cart);
  }

  

  
  addToCart(product: any): void {
    let cart = this.getCartData();
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
      
      cart[existingProductIndex].quantity += product.quantity;
    } else {
      
      cart.push({ ...product });
    }

    this.updateCartData(cart);
  }

  
  getWishlistData(): any[] {
    const wishlistData = localStorage.getItem(this.wishlistKey);
    return wishlistData ? JSON.parse(wishlistData) : [];
  }

 
  saveWishlistData(wishlist: any[]): void {
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

  
  updateWishlistData(wishlist: any[]): void {
    this.saveWishlistData(wishlist);
  }

  
  addToWishlist(product: any): void {
    let wishlist = this.getWishlistData();
    const existingProductIndex = wishlist.findIndex(item => item.name === product.name);

    if (existingProductIndex === -1) {
     
      wishlist.push({ ...product });
      this.updateWishlistData(wishlist);
    }
  }
  clearCart(): void {
    console.log('Clearing cart data from localStorage');
    localStorage.removeItem(this.cartKey); 
  }
  
  clearWishlist(): void {
    console.log('Clearing wishlist data from localStorage');
    localStorage.removeItem(this.wishlistKey);  
  }
  
  getCartItems(): any[] {
    const cartData = localStorage.getItem(this.cartKey);
    return cartData ? JSON.parse(cartData) : [];
  }
}
