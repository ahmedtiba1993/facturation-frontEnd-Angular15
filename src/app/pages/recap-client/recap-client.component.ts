import { Component } from '@angular/core';
import {FactureService} from "../../services/facture/facture.service";
import {PageProduitDto} from "../../api/models/page-produit-dto";
import {PageRecapClient} from "../../api/models/page-recap-client";
import {ProduitDto} from "../../api/models/produit-dto";
import {RecapClient} from "../../api/models/recap-client";

@Component({
  selector: 'app-recap-client',
  templateUrl: './recap-client.component.html',
  styleUrls: ['./recap-client.component.css']
})
export class RecapClientComponent {

  page: PageRecapClient = {};
  currentPage: number = 0;
  pageSize: number = 10;
  listRecap : Array<RecapClient> = []

  isLoading = false;

  constructor(
    private factureService:FactureService
  ) {
  }

  ngOnInit(){
    this.findAllPaginated()
  }
  findAllPaginated(){
    this.isLoading = true
    //this.isLoading = true
    this.factureService.recapClient(this.currentPage, this.pageSize).subscribe(page => {
      this.page = page
      this.listRecap = page.content!
      this.isLoading = false
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
