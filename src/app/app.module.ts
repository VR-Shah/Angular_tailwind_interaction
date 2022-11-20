import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LoginAuthGuards } from './auth-guards/login-auth-guard';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    CardComponentComponent,
    FooterComponentComponent,
    SignUpComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginAuthGuards,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
