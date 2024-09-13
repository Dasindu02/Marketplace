import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-payment',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedPaymentMethod: 'credit-card' | 'paypal' | 'visa' = 'credit-card'; 
  cardHolderName: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  selectedBank: string = '';
  banks: string[] = ['Commercial Bank', 'Hatton National Bank', 'Bank of Ceylon', 'Seylan', 'Sampath Bank'];
  totalAmount: number = 0;
  cardNumberError: boolean = false;
  expiryDateError: boolean = false;
  cvvError: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.totalAmount = +params['amount'] || 0; 
    });
  }

  validateCardNumber(): void {
    this.cardNumberError = this.cardNumber.length !== 16;
  }
  validateExpiryDate(): void {
    const [month, year] = this.expiryDate.split('/').map(part => part.trim());

    if (month && year) {
      const monthNumber = +month;
      const yearNumber = +year;

      const currentYear = new Date().getFullYear() % 100; 
      const isValidMonth = monthNumber >= 1 && monthNumber <= 12;
      const isValidYear = yearNumber >= currentYear;

      this.expiryDateError = !isValidMonth || !isValidYear;
    } else {
      this.expiryDateError = true; 
    }
  }
  validateCVV(): void {
    this.cvvError = this.cvv.length !== 3;
  }


  makePayment() {
    this.validateCardNumber();

    if (this.cardNumberError) {
      console.error('Card number must be exactly 16 digits.');
      return;
    }

    if (this.selectedPaymentMethod === 'paypal') {
      console.log('Redirecting to PayPal...');
    } else if (this.selectedPaymentMethod === 'credit-card' || this.selectedPaymentMethod === 'visa') {
      console.log('Processing card payment...');
      console.log(`Card Holder: ${this.cardHolderName}`);
      console.log(`Card Number: ${this.cardNumber}`);
      console.log(`Expiry Date: ${this.expiryDate}`);
      console.log(`CVV: ${this.cvv}`);
      console.log(`Selected Bank: ${this.selectedBank}`);
      console.log(`Total Amount: ${this.totalAmount}`);
    }
   
      
      console.log(`Navigating to SuccessComponent with totalAmount: ${this.totalAmount}`);
      this.router.navigate(['/success'], { queryParams: { amount: this.totalAmount } });
     
  }
}
