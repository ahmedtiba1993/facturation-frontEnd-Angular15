import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { IndexComponent } from './pages/index/index.component';
import { ProduitComponent } from './pages/produit/produit.component';
import {IntercepteurService} from "./services/intercepteur/intercepteur.service";
import { CategorieComponent } from './pages/categorie/categorie.component';
import { AjouterCategorieComponent } from './pages/categorie/ajouter-categorie/ajouter-categorie.component';
import { AjouterProduitComponent } from './pages/produit/ajouter-produit/ajouter-produit.component';
import { ClientComponent } from './pages/client/client.component';
import { AjouterClientComponent } from './pages/client/ajouter-client/ajouter-client.component';

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
    AjouterClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: IntercepteurService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
