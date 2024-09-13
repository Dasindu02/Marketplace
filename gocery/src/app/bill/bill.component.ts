import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  cartItems: any[] = [];
  taxRate: number = 0.10;

  constructor(private cartDataService: CartDataService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartDataService.getCartItems(); 
  }

 
  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }


 
  getTaxAmount(): number {
    const totalCost = this.getTotalCost();
    return totalCost * this.taxRate; 
  }
  getTotalCostWithTax(): number {
    const totalCost = this.getTotalCost();
    const taxAmount = this.getTaxAmount();
    return totalCost + taxAmount; 
  }
  goBack(): void {
    this.location.back(); 
  }
  confirmPurchase(): void {
    const totalAmount = this.getTotalCostWithTax();
    console.log(`Navigating to SuccessComponent with totalAmount: ${totalAmount}`);
    
    
    this.router.navigate(['/payment'], { queryParams: { amount: totalAmount } });
  
    
  }
  
}
