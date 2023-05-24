import { Component } from '@angular/core';
import {ProduitService} from "../../services/produit/produit.service";
import {ProduitDto} from "../../api/models/produit-dto";
import {PageProduitDto} from "../../api/models/page-produit-dto";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  listePrduits : Array<ProduitDto> = []
  page: PageProduitDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading = false;
  showDivFiltre = false;

  //filtre
  nom?: string;
  code?: string;
  prixMin?: number;
  prixMax?: number;
  etatRemise  = null;

  constructor(
    private produitService:ProduitService
  ) {
  }

  ngOnInit(){
    this.filtre()
  }

  findAllPaginated(){
    //this.isLoading = true
    this.produitService.findAllPagnated(this.currentPage, this.pageSize).subscribe(page => {
      this.page = page
      this.listePrduits = page.content!
      //this.isLoading = false
    });
  }

  filtre(){
    this.isLoading = true
    if(this.etatRemise == "null"){
      this.etatRemise = null
    }
    this.produitService.filtre(this.currentPage, this.pageSize , this.nom! , this.code! , this.prixMin! , this.prixMax! , this.etatRemise!).subscribe(page => {
      this.page = page
      this.listePrduits = page.content!
      this.isLoading = false
    });
  }

  onPageChange(event : any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.filtre();
  }

  pageNumbers(): number[] {
    if (!this.page) {
      return [];
    }

    const pageNumbers = [];
    for (let i = 0; i < this.page.totalPages!; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  protected readonly Math = Math;

  toggleDivFiltre() {
    this.showDivFiltre = !this.showDivFiltre;
  }
}
