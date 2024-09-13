import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { DrinksComponent } from './drinks/drinks.component';
import { BakeryComponent } from './bakery/bakery.component';
import { ChilledComponent } from './chilled/chilled.component';
import { VegitableComponent } from './vegitable/vegitable.component';
import { FruitComponent } from './fruit/fruit.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { CurrencyPipe } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CulinaryComponent } from './culinary/culinary.component';
import { Culcard1Component } from './culcard1/culcard1.component';
import { Culcard2Component } from './culcard2/culcard2.component';
import { Culcard3Component } from './culcard3/culcard3.component';
import { Culcard4Component } from './culcard4/culcard4.component';


@NgModule({
    declarations: [
        NewarrivalsComponent,
        Card1Component,
        Card2Component,
        Card3Component,
        Card4Component,
        Card5Component,
        Card6Component,
        Card7Component,
      ProfileComponent,
      DrinksComponent,
      BakeryComponent,
      ChilledComponent,
      VegitableComponent,
      FruitComponent,
      BillComponent,
      PaymentComponent,
      SuccessComponent,
      SearchResultsComponent,
      CulinaryComponent,
      Culcard1Component,
      Culcard2Component,
      Culcard3Component,
      Culcard4Component
      

      
   








    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule




    ],
    providers: [ 
      provideHttpClient(withFetch()),
      CurrencyPipe
    ],
    bootstrap: []
  })
  export class AppModule { }
  