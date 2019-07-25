import {NgModule} from '@angular/core';


import {RouterModule,Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductResolver} from './produit/produit.resolver';

export const appRoutes: Routes = [
    {path: 'produit', component: ProduitComponent,resolve : {
      produits: ProductResolver
    }},
    {path: 'dashboard', component: DashboardComponent},
    {path: '',redirectTo: '/dashboard',pathMatch: 'full'}
];
@NgModule({
  imports:[
     RouterModule.forRoot(
       appRoutes,
       {enableTracing: false}
     )
  ] ,
  exports: [RouterModule],
  providers: [ProductResolver]
})

export class AppRoutingModule{

}