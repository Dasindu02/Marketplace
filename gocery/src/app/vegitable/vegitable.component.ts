import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vegitable',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './vegitable.component.html',
  styleUrl: './vegitable.component.css'
})
export class VegitableComponent implements OnInit {
  username: string = '';
 vegitableList = [
    {
      name: 'Carrots',
      description: 'Per 100g unit(s)',
      price: 250,
      quantity: 1,
      image: 'assets/vegi1.jpeg', 
      inWishlist: false
    },
    {
      name: 'Pumking',
      description: 'Per 100g unit(s)',
      price: 200,
      quantity: 1,
      image: 'assets/vegi2.jpeg', 
      inWishlist: false
    },
    {
      name: 'Onion',
      description: 'Per 500g unit(s)',
      price: 400,
      quantity: 1,
      image: 'assets/vegi3.jpeg', 
      inWishlist: false
    },
    {
      name: 'Cabbage',
      description: 'Per 250g unit(s)',
      price: 300,
      quantity: 1,
      image: 'assets/vegi4.jpeg', 
      inWishlist: false
    },
    {
      name: 'Broccoli',
      description: 'Per 200g unit(s)',
      price: 400,
      quantity: 1,
      image: 'assets/vegi5.jpeg', 
      inWishlist: false
    },
    {
      name: 'Capsicum',
      description: 'Per 100g unit(s)',
      price: 200,
      quantity: 1,
      image: 'assets/vegi6.jpeg', 
      inWishlist: false
    },
    {
      name: 'BeetRoot',
      description: 'Per 250g unit(s)',
      price: 250,
      quantity: 1,
      image: 'assets/vegi7.jpeg', 
      inWishlist: false
    },
    {
      name: 'Potato',
      description: 'Per 500g unit(s)',
      price: 300,
      quantity: 1,
      image: 'assets/vegi8.jpeg', 
      inWishlist: false
    },
    {
      name: 'Beans',
      description: 'Per 100g unit(s)',
      price: 200,
      quantity: 1,
      image: 'assets/vegi9.jpeg', 
      inWishlist: false
    },
    {
      name: 'Lettuce',
      description: 'Per 100g unit(s)',
      price: 150,
      quantity: 1,
      image: 'assets/vegi10.jpeg', 
      inWishlist: false
    },
    {
      name: 'Tomato',
      description: 'Per 250g unit(s)',
      price: 200,
      quantity: 1,
      image: 'assets/vegi11.jpeg', 
      inWishlist: false
    },
    {
      name: 'Banana Flower',
      description: 'Per 100g unit(s)',
      price: 150,
      quantity: 1,
      image: 'assets/vegi12.jpeg', 
      inWishlist: false
    },
    {
      name: 'Kale',
      description: 'Per 100g unit(s)',
      price: 450,
      quantity: 1,
      image: 'assets/vegi13.jpeg', 
      inWishlist: false
    },
    {
      name: 'MushRoom',
      description: 'Per 100g unit(s)',
      price: 300,
      quantity: 1,
      image: 'assets/vegi14.jpeg', 
      inWishlist: false
    },
    {
      name: 'Cucumber',
      description: 'Per 100g unit(s)',
      price: 230,
      quantity: 1,
      image: 'assets/vegi15.jpg', 
      inWishlist: false
    },
    {
      name: 'Celery',
      description: 'Per 200g unit(s)',
      price: 170,
      quantity: 1,
      image: 'assets/vegi16.jpeg', 
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

  addToCart(drink: any): void {
    this.cartDataService.addToCart(drink);
    this.cart = this.cartDataService.getCartData(); 
    this.successMessage = 'Successfully added to cart';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 2000);

    this.showCart = true;
  }

  addToWishlist(vegitable: any): void {
    if (!vegitable.inWishlist) {
      this.cartDataService.addToWishlist(vegitable);
      vegitable.inWishlist = true;
      alert(`${vegitable.name} added to wishlist!`);
    } else {
      alert(`${vegitable.name} is already in your wishlist!`);
    }
  }

  increaseQuantity(vegitable: any): void {
    vegitable.quantity++;
  }

  decreaseQuantity(vegitable: any): void {
    if (vegitable.quantity > 1) {
      vegitable.quantity--;
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




