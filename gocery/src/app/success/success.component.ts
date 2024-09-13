import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CartDataService } from '../cart-data.service';




@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
  standalone: true,
  imports: [CurrencyPipe,RouterModule]
})
export class SuccessComponent implements OnInit {
  totalAmount: number = 0; 
  username: string = '';
  email:string='';
  cartItems: any[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cartDataService: CartDataService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.totalAmount = +params['amount'] || 0;
      
    });
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = user.username || 'Guest';  
    this.email = user.email || 'No email provided'; 
    
    this.cartItems = this.cartDataService.getCartItems();  
  }
  

  async downloadBill(): Promise<void> {
    if (typeof window !== 'undefined') {
      const html2pdf = (await import('html2pdf.js')).default;
  
     
      const styles = `
        <style>
          body { font-family: Arial, sans-serif; }
          header { text-align: center; margin-bottom: 20px; }
          header img { width: 150px; height: auto; }
          header h1 { margin: 10px 0; }
          main { margin: 20px; }
          main h2 { color: #333; }
          main p { font-size: 18px; color: #555; }
          .details { margin-top: 20px; }
          .details h3 { color: #333; }
          .details table { width: 100%; border-collapse: collapse; }
          .details table th, .details table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          .details table th { background-color: #f4f4f4; }
          footer { text-align: center; margin-top: 20px; font-size: 14px; color: #777;margin-top:3%; }
        </style>
      `;
  
     
      const cartItemsHtml = this.cartItems.map(item => `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>LKR ${item.price.toFixed(2)}</td>
          <td>LKR ${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
      `).join('');
  
      
      const billContent = `
        <html>
          <head>${styles}</head>
          <body>
            <header>
              <img src="assets/logo01.jpg" alt="Website Logo" />
              <h1>Marketplace Express</h1>
            </header>
            <main>
              <h2>Payment Successful</h2>
              <p>Total Amount: <strong>LKR ${this.totalAmount}.00</strong></p>
              
              <div class="details">
                <h3>Order Details</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${cartItemsHtml}
                  </tbody>
                </table>
              </div>
  
              <div class="details">
                <h3>Customer Information</h3>
                <p>Name: ${this.username}</p>
                <p>Email: ${this.email}</p>
              </div>
              
              <div class="details">
                <h3>Payment Information</h3>
                <p>Payment Method: Credit Card</p>
                <p>Transaction ID: 1234567890</p>
              </div>
            </main>
            <footer>
              <p>Thank you for your purchase!</p>
              <p><a href="mail:MarketplaceExpress@gmail.com">MarketplaceExpress@gmail.com</a> | <a href="tel:+94705243589">+94 705243589</a></p>
            </footer>
          </body>
        </html>
      `;
  
      
      const options = {
        filename: 'Marketplace_Express.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
  
      html2pdf().from(billContent).set(options).save();
    }
  }
}  