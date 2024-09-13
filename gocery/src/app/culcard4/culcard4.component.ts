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
  templateUrl: './culcard4.component.html',
  styleUrl: './culcard4.component.css'
})
export class Culcard4Component {
  
  cul4list=[
    {
      name: 'Basmati',
      description: 'Per 1Kg unit(s)',
      price: 1200,
      quantity: 1,
      image: 'assets/cul20.png', 
      inWishlist: false
    },
    {
      name: 'Chicken',
      description: 'Per 1Kg unit(s)',
      price: 1000,
      quantity: 1,
      image: 'assets/cul7.jpg', 
      inWishlist: false
    },
    {
      name: 'Curd',
      description: 'Per 500g unit(s)',
      price: 400,
      quantity: 1,
      image: 'assets/cul21.jpeg', 
      inWishlist: false
    },
    {
      name: 'Saffron',
      description: 'Per 100g unit(s)',
      price: 150,
      quantity: 1,
      image: 'assets/cul22.jpg', 
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
