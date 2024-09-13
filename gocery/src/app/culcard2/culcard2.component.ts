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
  templateUrl: './culcard2.component.html',
  styleUrl: './culcard2.component.css'
})
export class Culcard2Component {
  
  cul2list=[
    {
      name: 'Chicken ',
      description: 'Per 1Kg unit(s)',
      price: 1200,
      quantity: 1,
      image: 'assets/cul7.jpg', 
      inWishlist: false
    },
    {
      name: 'Yoghurt',
      description: 'Per 1 unit(s)',
      price: 80,
      quantity: 2,
      image: 'assets/cul8.jpg', 
      inWishlist: false
    },
    {
      name: 'Garlic Clove',
      description: 'Per 100g unit(s)',
      price: 180,
      quantity: 1,
      image: 'assets/cul9.jpeg', 
      inWishlist: false
    },
    {
      name: 'Butter',
      description: 'Per 100g unit(s)',
      price: 250,
      quantity: 1,
      image: 'assets/cul10.jpeg', 
      inWishlist: false
    },
    {
      name: 'Tomato Puree',
      description: 'Per 400g unit(s)',
      price: 380,
      quantity: 1,
      image: 'assets/cul11.jpeg', 
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
