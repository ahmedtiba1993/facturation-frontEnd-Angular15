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
