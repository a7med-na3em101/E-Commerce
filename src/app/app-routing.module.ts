import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { CardsComponent } from './cards/cards.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Home', component: HomepageComponent },
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'Contact-Us', component: ContactComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Sign-Up', component: SignUpComponent },
  { path: 'Category', component: CategoryComponent },
  {
    path: 'cards/:productid',
    component: CardsComponent,
  },
  {
    path: 'checkout/:id',
    component: CheckoutComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
//Home
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  Snapshot: any;
}
