import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuards } from './auth-guards/login-auth-guard';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';

const appRoutes: Routes = [
  { 
    path: '', 
    children: [
      { path: '', component: HomeComponentComponent,canActivate: [LoginAuthGuards]  },
     ]
  },      
  { path: 'login', component: LoginComponentComponent },
  { path: 'signup', component:SignUpComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

