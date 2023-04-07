import { Component } from '@angular/core';
import {CategorieDto} from "../../../api/models/categorie-dto";
import {ProduitDto} from "../../../api/models/produit-dto";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {ProduitService} from "../../../services/produit/produit.service";
import {Router} from "@angular/router";
import {ClientDto} from "../../../api/models/client-dto";
import {ClientService} from "../../../services/client/client.service";

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent {

  client : ClientDto = {}
  errorMessage : Array<string> = []

  constructor(
    private clientService :ClientService,
    private router : Router
  ) {
  }

  ajouterClient(){
    this.clientService.add(this.client).subscribe(data=>{
      this.router.navigate(["client"])
    },error=>{
      this.errorMessage = error.error.errors
    })
  }
}
