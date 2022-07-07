import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthGuardService } from './_services/auth-guard.service';

export const AppRoutingModule: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
