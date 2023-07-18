import { InsiderNewsComponent } from './newsfeed/insider-news/insider-news.component';
import { RequirmentNewsComponent } from './newsfeed/requirment-news/requirment-news.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ClientComponent } from './client/client.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { SupportComponent } from './support/support.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'Consultant',
    component: ConsultantComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'productview',
    component: ProductDetailsComponent,
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent,
  },
  {
    path: 'insider',
    component: InsiderNewsComponent,
  },
  {
    path: 'requirment',
    component: RequirmentNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
