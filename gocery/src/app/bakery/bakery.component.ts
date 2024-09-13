import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';


@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit {
  username: string = '';
bakerylist=[
  {
    name: 'Bread',
    description: 'Per 450g unit(s)',
    price: 200,
    quantity: 1,
    image: 'assets/bakery1.jpeg', 
    inWishlist: false
  },
  {
    name: 'Fruit Cake',
    description: 'Per 500g unit(s)',
    price: 450,
    quantity: 1,
    image: 'assets/bakery2.jpg', 
    inWishlist: false
  },
  {
    name: 'Fish Bun',
    description: 'Per 1 unit(s)',
    price:70,
    quantity: 1,
    image: 'assets/bakery3.jpg', 
    inWishlist: false
  },
  {
    name: 'chicken roll',
    description: 'Per 1 unit(s)',
    price: 100,
    quantity: 1,
    image: 'assets/bakery4.jpeg', 
    inWishlist: false
  },
  {
    name: 'sausage bun',
    description: 'Per 1 unit(s)',
    price: 80,
    quantity: 1,
    image: 'assets/bakery5.jpeg', 
    inWishlist: false
  },
  {
    name: 'submarine bun',
    description: 'Per 1 unit(s)',
    price: 350,
    quantity: 1,
    image: 'assets/bakery6.jpeg', 
    inWishlist: false
  },
  {
    name: 'Egg Bun',
    description: 'Per 1 unit(s)',
    price: 100,
    quantity: 1,
    image: 'assets/bakery7.jpeg', 
    inWishlist: false
  },
  {
    name: 'Chicken Puff',
    description: 'Per 1 unit(s)',
    price: 100,
    quantity: 1,
    image: 'assets/bakery8.jpeg', 
    inWishlist: false
  },
  {
    name: 'Samosa',
    description: 'Per 1 unit(s)',
    price: 100,
    quantity: 1,
    image: 'assets/bakery9.jpeg', 
    inWishlist: false
  }

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
  if (isPlatformBrowser(this.platformId)) {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.username = user?.username || 'Guest'; 
    } else {
      this.username = 'Guest'; 
    }
  }

  this.cart = this.cartDataService.getCartData();
  this.wishlist = this.cartDataService.getWishlistData();
}

addToCart(bakery: any): void {
  this.cartDataService.addToCart(bakery);
  this.cart = this.cartDataService.getCartData(); 
  this.successMessage = 'Successfully added to cart';
  setTimeout(() => {
    this.successMessage = ''; 
  }, 2000);

  this.showCart = true; 
}
addToWishlist(bakery: any): void {
  if (!bakery.inWishlist) {
    this.cartDataService.addToWishlist(bakery);
    bakery.inWishlist = true;
    alert(`${bakery.name} added to wishlist!`);
  } else {
    alert(`${bakery.name} is already in your wishlist!`);
  }
}
increaseQuantity(bakery: any): void {
  bakery.quantity++;
}

decreaseQuantity(bakery: any): void {
  if (bakery.quantity > 1) {
    bakery.quantity--;
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

goBack(): void {
  this.location.back(); 
}


}