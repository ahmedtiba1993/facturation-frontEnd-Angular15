import { Component } from '@angular/core';
import {CategorieService} from "../../../services/categorie/categorie.service";
import {CategorieDto} from "../../../api/models/categorie-dto";
import {ProduitService} from "../../../services/produit/produit.service";
import {ProduitDto} from "../../../api/models/produit-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {

  listeCategorie : Array<CategorieDto> = []
  produit : ProduitDto = {}
  categorie : CategorieDto = {}
  errorMessage : Array<string> = []
  remise: any;

  constructor(
    private categorieService :CategorieService,
    private produitService : ProduitService,
    private router : Router
  ) {
  }

  ngOnInit(){
    this.findAllCategorie()
  }

  findAllCategorie(){
    this.categorieService.findAll().subscribe(data=>{
      this.listeCategorie = data
    })
  }

  ajouterProduit(){
    if(this.categorie.id != null){
      //this.produit.category = this.categorie
    }
  if(this.remise == "oui"){
    this.produit.etatRemise = true
  }else{
    this.produit.etatRemise = false
  }

    this.produitService.add(this.produit).subscribe(data=>{
      this.router.navigate(["produit"])
    },error=>{
      this.errorMessage = error.error.errors
    })
  }
}
