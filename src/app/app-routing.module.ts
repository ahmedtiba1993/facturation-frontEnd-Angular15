import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { GuardService } from './services/guard/guard.service';
import { IndexComponent } from './pages/index/index.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { AjouterCategorieComponent } from './pages/categorie/ajouter-categorie/ajouter-categorie.component';
import { AjouterProduitComponent } from './pages/produit/ajouter-produit/ajouter-produit.component';
import { ClientComponent } from './pages/client/client.component';
import { AjouterClientComponent } from './pages/client/ajouter-client/ajouter-client.component';
import { FactureComponent } from './pages/facture/facture.component';
import { DetailsFactureComponent } from './pages/facture/details-facture/details-facture.component';
import { AjouterFactureComponent } from './pages/facture/ajouter-facture/ajouter-facture.component';
import { ProduitModifierComponent } from './pages/produit/produit-modifier/produit-modifier.component';
import { ModifierClientComponent } from './pages/client/modifier-client/modifier-client.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { RecapClientComponent } from './pages/recap-client/recap-client.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';
import { SettingComponent } from './pages/setting/setting.component';
import { DevisComponent } from './pages/devis/devis.component';
import { DetailsDevisComponent } from './pages/devis/details-devis/details-devis.component';
import { AjouterDevisComponent } from './pages/devis/ajouter-devis/ajouter-devis.component';
import { RecapDevisComponent } from './pages/recapDevis/recap-devis/recap-devis.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: IndexComponent,
    canActivate: [GuardService],
    children: [
      {
        path: '',
        component: StatistiqueComponent,
      },
      {
        path: 'profil',
        component: UserProfilComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'produit',
        component: ProduitComponent,
      },
      {
        path: 'categorie',
        component: CategorieComponent,
      },
      {
        path: 'ajouterCategorie',
        component: AjouterCategorieComponent,
      },
      {
        path: 'ajouterProduit',
        component: AjouterProduitComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'ajouterClient',
        component: AjouterClientComponent,
      },
      {
        path: 'facture',
        component: FactureComponent,
      },
      {
        path: 'detailsfacture/:id',
        component: DetailsFactureComponent,
      },
      {
        path: 'ajouterFacture',
        component: AjouterFactureComponent,
      },
      {
        path: 'produit/:id',
        component: ProduitModifierComponent,
      },
      {
        path: 'client/:id',
        component: ModifierClientComponent,
      },
      {
        path: 'recapClient',
        component: RecapClientComponent,
      },
      {
        path: 'devis',
        component: DevisComponent,
      },
      {
        path: 'detailsdevis/:id',
        component: DetailsDevisComponent,
      },
      {
        path: 'ajouterDevis',
        component: AjouterDevisComponent,
      },
      {
        path: 'recapDevis',
        component: RecapDevisComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
