import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './pages/index/index.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { IntercepteurService } from './services/intercepteur/intercepteur.service';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { AjouterCategorieComponent } from './pages/categorie/ajouter-categorie/ajouter-categorie.component';
import { AjouterProduitComponent } from './pages/produit/ajouter-produit/ajouter-produit.component';
import { ClientComponent } from './pages/client/client.component';
import { AjouterClientComponent } from './pages/client/ajouter-client/ajouter-client.component';
import { FactureComponent } from './pages/facture/facture.component';
import { DetailsFactureComponent } from './pages/facture/details-facture/details-facture.component';
import { AjouterFactureComponent } from './pages/facture/ajouter-facture/ajouter-facture.component';
import { ProduitModifierComponent } from './pages/produit/produit-modifier/produit-modifier.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './composants/loader/loader.component';
import { Loader2Component } from './composants/loader2/loader2.component';
import { ModifierClientComponent } from './pages/client/modifier-client/modifier-client.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { RecapClientComponent } from './pages/recap-client/recap-client.component';
import { SpinnerComponent } from './composants/spinner/spinner.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';
import { SettingComponent } from './pages/setting/setting.component';
import { DevisComponent } from './pages/devis/devis.component';
import { DetailsDevisComponent } from './pages/devis/details-devis/details-devis.component';
import { AjouterDevisComponent } from './pages/devis/ajouter-devis/ajouter-devis.component';
import { RecapDevisComponent } from './pages/recapDevis/recap-devis/recap-devis.component';
import { ModifierFactureComponent } from './pages/facture/modifierFacture/modifier-facture/modifier-facture.component';
import { ModifierDevisComponent } from './pages/devis/modifier-devis/modifier-devis.component';
import { IndexMobileComponent } from './pages/index-mobile/index-mobile.component';
import { BondeComponent } from './pages/bonde/bonde.component';
import { AjouterBonDeLivraisonComponent } from './pages/bonde/ajouter-bon-de-livraison/ajouter-bon-de-livraison.component';
import { DetailsBonDeLivraisonComponent } from './pages/bonde/details-bon-de-livraison/details-bon-de-livraison.component';
import { ModifierBonDeLivraisonComponent } from './pages/bonde/modifier-bon-de-livraison/modifier-bon-de-livraison.component';
import { UrlFileComponent } from './pages/url-file/url-file.component';
import { AlertModelComponent } from './composants/alert-model/alert-model.component';
import { DevisUiComponent } from './pages/url-file/devis-ui/devis-ui.component';
import { FactureUiComponent } from './pages/url-file/facture-ui/facture-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    ProduitComponent,
    CategorieComponent,
    AjouterCategorieComponent,
    AjouterProduitComponent,
    ClientComponent,
    AjouterClientComponent,
    FactureComponent,
    DetailsFactureComponent,
    AjouterFactureComponent,
    ProduitModifierComponent,
    LoaderComponent,
    Loader2Component,
    ModifierClientComponent,
    StatistiqueComponent,
    RecapClientComponent,
    SpinnerComponent,
    UserProfilComponent,
    SettingComponent,
    DevisComponent,
    DetailsDevisComponent,
    AjouterDevisComponent,
    RecapDevisComponent,
    ModifierFactureComponent,
    ModifierDevisComponent,
    IndexMobileComponent,
    BondeComponent,
    AjouterBonDeLivraisonComponent,
    DetailsBonDeLivraisonComponent,
    ModifierBonDeLivraisonComponent,
    UrlFileComponent,
    AlertModelComponent,
    DevisUiComponent,
    FactureUiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepteurService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
