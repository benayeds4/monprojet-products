
import { NgModule } from '@angular/core';


import {RouterModule , Routes} from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';


import { ProductListComponent } from '../components/product-list/product-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';



const appRoutes: Routes = [

  { path: 'welcome', component: WelcomeComponent },
  { path: 'list', component: ProductListComponent },
  { path: '', component: WelcomeComponent , pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [  ],
  bootstrap: []
})
export class RoutingModule { }
