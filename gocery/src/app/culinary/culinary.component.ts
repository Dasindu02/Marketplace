import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-culinary',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './culinary.component.html',
  styleUrl: './culinary.component.css'
})
export class CulinaryComponent implements OnInit {
  username: string = '';


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

  }
}
