import { Component } from '@angular/core';
import {FactureService} from "../../services/facture/facture.service";
import {FactureDto} from "../../api/models/facture-dto";
import {PageFactureDto} from "../../api/models/page-facture-dto";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

  listeFacture : Array<FactureDto> = []
  page: PageFactureDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading = false;
  idFact : number =0;

  constructor(
    private factureService : FactureService,
  ) {

  }

  ngOnInit(){
  this.findAllPaginated()
  }
  findAllPaginated(){
    this.isLoading = true
    this.factureService.getAll(this.currentPage, this.pageSize).subscribe(page => {
      this.page = page
      this.listeFacture = page.content!
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

  updatePaymentStatus() {
    this.factureService.payé(this.idFact).subscribe(data=>{
      this.findAllPaginated()
    });
  }

  setId(id: number | undefined) {
    this.idFact = id!;
  }

}
