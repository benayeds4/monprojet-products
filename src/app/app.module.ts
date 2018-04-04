import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule ,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [

  { path: 'welcome', component: WelcomeComponent },
  { path: 'list', component: ProductListComponent },
  { path: '', component: WelcomeComponent , pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    FooterComponent,
    NotFoundComponent,
    WelcomeComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ProductService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
