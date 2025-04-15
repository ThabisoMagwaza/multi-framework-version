import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactWrapperComponent } from './components/react-wrapper.component';
import { SharedDataService } from './services/shared-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ReactWrapperComponent,
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
