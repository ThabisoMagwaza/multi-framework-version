import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactWrapperComponent } from './components/react-wrapper.component';
import { LoginComponent } from './login/login.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ReactWrapperComponent,
    LoginComponent,
    CartComponent,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
