import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SupportComponent } from './support/support.component';
import { ClientComponent } from './client/client.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { InsiderNewsComponent } from './newsfeed/insider-news/insider-news.component';
import { RequirmentNewsComponent } from './newsfeed/requirment-news/requirment-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    SupportComponent,
    ClientComponent,
    ConsultantComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    NewsfeedComponent,
    InsiderNewsComponent,
    RequirmentNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
