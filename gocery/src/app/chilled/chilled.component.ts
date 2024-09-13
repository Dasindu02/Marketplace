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
  templateUrl: './chilled.component.html',
  styleUrls: ['./chilled.component.css']
})
export class ChilledComponent {
  username: string = '';
  chilledList=[
    {
      name: 'Arla Cheese',
      description: 'Per 150g unit(s)',
      price: 700,
      quantity: 1,
      image: 'assets/chill1.jpeg', 
      inWishlist: false
    },
    {
      name: 'Ambewela Gouda',
      description: 'Per 250g unit(s)',
      price: 1300,
      quantity: 1,
      image: 'assets/chill2.jpeg', 
      inWishlist: false
    },
    {
      name: 'Happy Cow',
      description: 'Per 300g unit(s)',
      price: 1000,
      quantity: 1,
      image: 'assets/chill3.jpeg', 
      inWishlist: false
    },
    {
      name: 'Kotmale Cheese',
      description: 'Per 250g unit(s)',
      price: 1500,
      quantity: 1,
      image: 'assets/chill4.jpeg', 
      inWishlist: false
    },
    {
      name: 'Kotmale Swiss',
      description: 'Per 100g unit(s)',
      price: 600,
      quantity: 1,
      image: 'assets/chill5.jpg', 
      inWishlist: false
    },
    {
      name: 'Pelwatta Butter',
      description: 'Per 200g unit(s)',
      price: 900,
      quantity: 1,
      image: 'assets/chill6.jpg', 
      inWishlist: false
    },
    {
      name: 'Highland Butter',
      description: 'Per 200g unit(s)',
      price: 500,
      quantity: 1,
      image: 'assets/chill7.jpeg', 
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

  addToCart(chilled: any): void {
    this.cartDataService.addToCart(chilled);
    this.cart = this.cartDataService.getCartData(); 
    this.successMessage = 'Successfully added to cart';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 2000);

    this.showCart = true; 
  }

  addToWishlist(chilled: any): void {
    if (!chilled.inWishlist) {
      this.cartDataService.addToWishlist(chilled);
     chilled.inWishlist = true;
      alert(`${chilled.name} added to wishlist!`);
    } else {
      alert(`${chilled.name} is already in your wishlist!`);
    }
  }
  increaseQuantity(chilled: any): void {
    chilled.quantity++;
  }

  decreaseQuantity(chilled: any): void {
    if (chilled.quantity > 1) {
      chilled.quantity--;
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
