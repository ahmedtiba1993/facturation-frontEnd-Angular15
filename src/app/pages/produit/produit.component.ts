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
  constructor(
    private produitService:ProduitService
  ) {
  }

  ngOnInit(){
    this.findAllPaginated()
  }

  findAllPaginated(){
    this.produitService.findAllPagnated(this.currentPage, this.pageSize).subscribe(page => {
      this.page = page
      this.listePrduits = page.content!
    });
  }

  onPageChange(event : any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.findAllPaginated();
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
}
