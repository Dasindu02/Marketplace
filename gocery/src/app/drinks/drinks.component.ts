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
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  username: string = '';
  
  drinksList = [
    {
      name: 'Orange Juice',
      description: 'Per 1000ml unit(s)',
      price: 1099,
      quantity: 1,
      image: 'assets/drink1.jpg', 
      inWishlist: false
    },
    {
      name: 'Sprite',
      description: 'Per 1L unit(s)',
      price: 370,
      quantity: 1,
      image: 'assets/drink2.jpg',
      inWishlist: false
    },
      {
        name: 'Pepsi',
        description: 'Per 1L unit(s)',
        price: 260,
        quantity: 1,
        image: 'assets/drink3.jpeg', 
        inWishlist: false
      },
      {
        name:  'Gatorate',
        description: 'Per 600ml unit(s)',
        price: 400,
        quantity: 1,
        image: 'assets/drink4.jpeg', 
        inWishlist: false
      },
      {
        name: 'Lemon Soda',
        description: 'Per 450ml unit(s)',
        price: 360,
        quantity: 1,
        image: 'assets/drink5.jpeg', 
        inWishlist: false
      },
      {
        name: 'Maza Mango',
        description: 'Per 500ml unit(s)',
        price: 400,
        quantity: 1,
        image: 'assets/drink6.jpg', 
        inWishlist: false
      },
      {
        name: 'Water',
        description: 'Per 1L unit(s)',
        price:150,
        quantity: 1,
        image: 'assets/drink7.jpg', 
        inWishlist: false
      },
      {
        name: 'Mountain Dew',
        description: 'Per 250ml unit(s)',
        price: 280,
        quantity: 1,
        image: 'assets/drink8.jpeg', 
        inWishlist: false
      },
      {
        name: 'Milo',
        description: 'Per 100ml unit(s)',
        price: 160,
        quantity: 1,
        image: 'assets/drink9.png', 
        inWishlist: false
      },
      {
        name: 'Chox',
        description: 'Per 100ml unit(s)',
        price: 140,
        quantity: 1,
        image: 'assets/drink10.jpg', 
        inWishlist: false
      },
      {
        name: ' Sparkling Lemon',
        description: 'Per 250ml unit(s)',
        price: 240,
        quantity: 1,
        image: 'assets/drink11.jpg', 
        inWishlist: false
      },
      {
        name: 'Vanila Shake',
        description: 'Per 250ml unit(s)',
        price:240,
        quantity: 1,
        image: 'assets/drink12.jpg', 
        inWishlist: false
      },
      {
        name: 'Apple Juice',
        description: 'Per 500ml unit(s)',
        price: 350,
        quantity: 1,
        image: 'assets/drink13.jpg', 
        inWishlist: false
      },
      {
        name: 'Mixfruit',
        description: 'Per 100ml unit(s)',
        price: 150,
        quantity: 1,
        image: 'assets/drink14.jpg', 
        inWishlist: false
      },
      {
        name: 'Celsius ',
        description: 'Per 250ml unit(s)',
        price: 420,
        quantity: 1,
        image: 'assets/drink15.jpeg', 
        inWishlist: false
      },
      {
        name: 'Monster Zero',
        description: 'Per 200ml unit(s)',
        price: 350,
        quantity: 1,
        image: 'assets/drink16.jpeg', 
        inWishlist: false
      },
      {
        name: 'Ultra Gold',
        description: 'Per 473ml unit(s)',
        price:550,
        quantity: 1,
        image: 'assets/drink17.jpeg', 
        inWishlist: false
      },
      {
        name: 'AHa',
        description: 'Per 300ml unit(s)',
        price: 350,
        quantity: 1,
        image: 'assets/drink18.jpeg',
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

   addToCart(drink: any): void {
    this.cartDataService.addToCart(drink);
    this.cart = this.cartDataService.getCartData(); 
    this.successMessage = 'Successfully added to cart';
    setTimeout(() => {
      this.successMessage = ''; 
    }, 2000);

    this.showCart = true; 
  }

  addToWishlist(drink: any): void {
    if (!drink.inWishlist) {
      this.cartDataService.addToWishlist(drink);
      drink.inWishlist = true;
      alert(`${drink.name} added to wishlist!`);
    } else {
      alert(`${drink.name} is already in your wishlist!`);
    }
  }

  increaseQuantity(drink: any): void {
    drink.quantity++;
  }

  decreaseQuantity(drink: any): void {
    if (drink.quantity > 1) {
      drink.quantity--;
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

