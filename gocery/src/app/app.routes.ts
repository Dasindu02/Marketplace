import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NewarrivalsComponent } from "./newarrivals/newarrivals.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { Card1Component } from "./card1/card1.component";
import { Card2Component } from "./card2/card2.component";
import { Card3Component } from "./card3/card3.component";
import { Card4Component } from "./card4/card4.component";
import { Card5Component } from "./card5/card5.component";
import { Card6Component } from "./card6/card6.component";
import { Card7Component } from "./card7/card7.component";
import { CategoryComponent } from "./category/category.component";
import { ProfileComponent } from "./profile/profile.component";
import { DrinksComponent } from "./drinks/drinks.component";
import { BakeryComponent } from "./bakery/bakery.component";
import { ChilledComponent } from "./chilled/chilled.component";
import { VegitableComponent } from "./vegitable/vegitable.component";
import { FruitComponent } from "./fruit/fruit.component";
import { BillComponent } from "./bill/bill.component";
import { PaymentComponent } from "./payment/payment.component";
import { SuccessComponent } from "./success/success.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { CulinaryComponent } from "./culinary/culinary.component";
import { Culcard1Component } from "./culcard1/culcard1.component";
import { Culcard2Component } from "./culcard2/culcard2.component";
import { Culcard3Component } from "./culcard3/culcard3.component";
import { Culcard4Component } from "./culcard4/culcard4.component";

export const routes: Routes = [
    { path: '', component:HomeComponent  },
    {path:'newarrivals' , component:NewarrivalsComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'card1', component:Card1Component},
    {path:'card2', component:Card2Component},
    {path:'card3', component:Card3Component},
    {path:'card4',component:Card4Component},
    {path:'card5',component:Card5Component},
    {path:'card6',component:Card6Component},
    {path:'card7',component:Card7Component},
    {path:'category',component:CategoryComponent},
    {path:'profile',component:ProfileComponent},
    {path:'drinks',component:DrinksComponent},
    {path:'bakery',component:BakeryComponent},
    {path:'chilled',component:ChilledComponent},
    {path:'vegitable',component:VegitableComponent},
    {path:'fruit',component:FruitComponent},
    {path:'bill',component:BillComponent},
    {path:'payment',component:PaymentComponent},
    {path:'success', component:SuccessComponent},
    {path:'search',component:SearchResultsComponent},
    {path:'culinary',component:CulinaryComponent},
    {path:'culcard1',component:Culcard1Component},
    {path:'culcard2',component:Culcard2Component},
    {path:'culcard3',component:Culcard3Component},
    {path:'culcard4',component:Culcard4Component}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
