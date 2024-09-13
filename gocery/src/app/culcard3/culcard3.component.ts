import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-culcard1',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './culcard3.component.html',
  styleUrl: './culcard3.component.css'
})
export class Culcard3Component {
  
  cul3list=[
    {
      name: 'Egg',
      description: 'Per 1 unit(s)',
      price: 50,
      quantity: 4,
      image: 'assets/cul15.jpeg', 
      inWishlist: false
    },
    {
      name: 'PepperCorn',
      description: 'Per 50g unit(s)',
      price: 130,
      quantity: 1,
      image: 'assets/cul16.jpeg', 
      inWishlist: false
    },
    {
      name: 'Cherry Tomato',
      description: 'Per 100g unit(s)',
      price: 150,
      quantity: 1,
      image: 'assets/cul17.jpg', 
      inWishlist: false
    },
    {
      name: 'Bread',
      description: 'Per 1 unit(s)',
      price: 270,
      quantity: 1,
      image: 'assets/cul18.jpg', 
      inWishlist: false
    },
  ];
  cart: any[] = [];
wishlist: any[] = [];
showCart: boolean = false;
successMessage: string = '';


constructor(
  @Inject(PLATFORM_ID) private platformId: Object,
  private cartDataService: CartDataService,
  private location: Location,
) {}


ngOnInit(): void {
  this.cart = this.cartDataService.getCartData();
  this.wishlist = this.cartDataService.getWishlistData();
}

addToCart(cul1: any): void {
  this.cartDataService.addToCart(cul1);
  this.cart = this.cartDataService.getCartData(); 
  this.successMessage = 'Successfully added to cart';
  setTimeout(() => {
    this.successMessage = ''; 
  }, 2000);

  this.showCart = true; 
}

addToWishlist(cul1: any): void {
  if (!cul1.inWishlist) {
    this.cartDataService.addToWishlist(cul1);
    cul1.inWishlist = true;
    alert(`${cul1.name} added to wishlist!`);
  } else {
    alert(`${cul1.name} is already in your wishlist!`);
  }
}
increaseQuantity(cul1: any): void {
  cul1.quantity++;
}

decreaseQuantity(cul1: any): void {
  if (cul1.quantity > 1) {
    cul1.quantity--;
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
