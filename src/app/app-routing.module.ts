import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {GuardService} from "./services/guard/guard.service";
import {IndexComponent} from "./pages/index/index.component";
import {ProduitComponent} from "./pages/produit/produit.component";
import {CategorieComponent} from "./pages/categorie/categorie.component";
import {AjouterCategorieComponent} from "./pages/categorie/ajouter-categorie/ajouter-categorie.component";
import {AjouterProduitComponent} from "./pages/produit/ajouter-produit/ajouter-produit.component";
import {ClientComponent} from "./pages/client/client.component";
import {AjouterClientComponent} from "./pages/client/ajouter-client/ajouter-client.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: IndexComponent, canActivate: [GuardService],
    children: [
      {
        path: 'produit', component: ProduitComponent,
      },
      {
        path: 'categorie', component : CategorieComponent,
      },
      {
        path: 'ajouterCategorie', component : AjouterCategorieComponent,
      },
      {
        path: 'ajouterProduit', component : AjouterProduitComponent,
      },
      {
        path: 'client', component : ClientComponent,
      },
      {
        path: 'ajouterClient', component : AjouterClientComponent,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
