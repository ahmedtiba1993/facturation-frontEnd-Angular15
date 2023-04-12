import { Component } from '@angular/core';
import {ProduitDto} from "../../../api/models/produit-dto";
import {ProduitService} from "../../../services/produit/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieDto} from "../../../api/models/categorie-dto";
import {CategorieService} from "../../../services/categorie/categorie.service";

@Component({
  selector: 'app-produit-modifier',
  templateUrl: './produit-modifier.component.html',
  styleUrls: ['./produit-modifier.component.css']
})
export class ProduitModifierComponent {

  produit : ProduitDto = {}
  idProduit : number = 0
  success : boolean = false
  errorMessage: Array<String> = [];
  listeCategorie : Array<CategorieDto> = []
  categorie : CategorieDto = {}
  remise: string = "oui";


  constructor(
    private produitService : ProduitService,
    private avtiveRoute : ActivatedRoute,
    private route : Router,
    private categorieService :CategorieService,
  ) {
  }

  ngOnInit() {
    this.idProduit = parseInt(<string>this.avtiveRoute.snapshot.paramMap.get('id'));
    this.findProduit()
    this.findAllCategorie()
  }
  findProduit(){
    this.produitService.findById(this.idProduit).subscribe(data=>{
      this.produit = data
      if(this.produit.etatRemise == false){
        this.remise = "non"
      }
    })
  }
  findAllCategorie(){
    this.categorieService.findAll().subscribe(data=>{
      this.listeCategorie = data
    })
  }
  modifier() {
    if(this.remise == "oui"){
      this.produit.etatRemise = true
    }else{
      this.produit.etatRemise = false
    }
    this.produitService.add(this.produit).subscribe(data=>{
      this.success = true
      this.findProduit()
    },error=>{
      this.success = false
      this.errorMessage = error.error.errors
    })
  }
}
