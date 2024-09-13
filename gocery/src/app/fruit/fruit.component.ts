import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
  username: string = '';

  fruitList=[
    {
      name: 'Avocados',
      description: 'Per 1 unit(s)',
      price: 100,
      quantity: 1,
      image: 'assets/fru1.jpeg', 
      inWishlist: false
    },
    {
      name: 'Apple',
      description: 'Per 1 unit(s)',
      price: 80,
      quantity: 1,
      image: 'assets/fru2.jpeg', 
      inWishlist: false
    },
    {
      name: 'Cranberry',
      description: 'Per 100g unit(s)',
      price:250,
      quantity: 1,
      image: 'assets/fru3.jpeg', 
      inWishlist: false
    },
    {
      name: 'Dragonfruit',
      description: 'Per 1 unit(s)',
      price: 500,
      quantity: 1,
      image: 'assets/fru4.jpeg', 
      inWishlist: false
    },
    {
      name: 'Hazelnut',
      description: 'Per 100g unit(s)',
      price: 260,
      quantity: 1,
      image: 'assets/fru5.jpeg', 
      inWishlist: false
    },
    {
      name: 'Kiwi',
      description: 'Per 100g unit(s)',
      price: 300,
      quantity: 1,
      image: 'assets/fru6.jpeg', 
      inWishlist: false
    },
    {
      name: 'Lime',
      description: 'Per 100g unit(s)',
      price: 250,
      quantity: 1,
      image: 'assets/fru7.jpg', 
      inWishlist: false
    },
    {
      name: 'Mango',
      description: 'Per 1 unit(s)',
      price: 170,
      quantity: 1,
      image: 'assets/fru8.jpeg', 
      inWishlist: false
    },
    {
      name: 'Muskmelon',
      description: 'Per 250g unit(s)',
      price: 350,
      quantity: 1,
      image: 'assets/fru9.jpeg', 
      inWishlist: false
    },
    {
      name: 'Olive',
      description: 'Per 100g unit(s)',
      price: 500,
      quantity: 1,
      image: 'assets/fru10.jpeg', 
      inWishlist: false
    },
    {
      name: 'Papaya',
      description: 'Per 500g unit(s)',
      price: 400,
      quantity: 1,
      image: 'assets/fru11.jpeg', 
      inWishlist: false
    },
    {
      name: 'Rambutan',
      description: 'Per 200g unit(s)',
      price: 200,
      quantity: 1,
      image: 'assets/fru12.jpeg', 
      inWishlist: false
    },
    {
      name: '	Oranges',
      description: 'Per 1 unit(s)',
      price: 100,
      quantity: 1,
      image: 'assets/fru13.jpeg', 
      inWishlist: false
    },
    {
      name: 'Pineapple',
      description: 'Per 1 unit(s)',
      price: 400,
      quantity: 1,
      image: 'assets/fru14.jpeg', 
      inWishlist: false
    },
    {
      name: 'Strawberries',
      description: 'Per 150g unit(s)',
      price: 800,
      quantity: 1,
      image: 'assets/fru15.jpeg', 
      inWishlist: false
    },
    {
      name: 'Durian',
      description: 'Per 150g unit(s)',
      price: 700,
      quantity: 1,
      image: 'assets/fru16.jpeg', 
      inWishlist: false
    },
    {
      name: 'Guava',
      description: 'Per 500g unit(s)',
      price: 800,
      quantity: 1,
      image: 'assets/fru17.jpeg', 
      inWishlist: false
    },
    {
      name: '	Pear',
      description: 'Per 1 unit(s)',
      price: 350,
      quantity: 1,
      image: 'assets/fru18.jpeg', 
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

  addToCart(fruit: any): void {
    this.cartDataService.addToCart(fruit);
    this.cart = this.cartDataService.getCartData(); 
    this.successMessage = 'Successfully added to cart';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 2000);

    this.showCart = true; 
  }

  addToWishlist(fruit: any): void {
    if (!fruit.inWishlist) {
      this.cartDataService.addToWishlist(fruit);
    fruit.inWishlist = true;
      alert(`${fruit.name} added to wishlist!`);
    } else {
      alert(`${fruit.name} is already in your wishlist!`);
    }
  }
  increaseQuantity(fruit: any): void {
   fruit.quantity++;
  }

  decreaseQuantity(fruit: any): void {
    if (fruit.quantity > 1) {
     fruit.quantity--;
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