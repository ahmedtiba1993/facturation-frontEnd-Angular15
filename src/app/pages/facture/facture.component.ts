import { Component } from '@angular/core';
import {FactureService} from "../../services/facture/facture.service";
import {FactureDto} from "../../api/models/facture-dto";
import {PageFactureDto} from "../../api/models/page-facture-dto";
import { NgxSpinnerService } from 'ngx-spinner';
import {ClientService} from "../../services/client/client.service";
import {ClientDto} from "../../api/models/client-dto";
import {formatDate} from "@angular/common";

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
  showDivFiltre = false;
  listClient : Array<ClientDto> = []
  ids : Array<number> = []

  //filtre
  refFacture?: string;
  minMontatnTTC?: number;
  maxMontatnTTC?: number;
  paymentStatus? = null;
  client: ClientDto = {};
  dateDebut?: Date;
  dateFin?: Date;

  constructor(
    private factureService : FactureService,
    private clientService : ClientService
  ) {
  }

  ngOnInit(){
  this.findAllPaginated()
  this.findAllClient()
  }

  findAllClient(){
    this.clientService.findAll().subscribe(data=>{
      this.listClient = data
    })
  }

  findAllPaginated(){
    if(this.paymentStatus! == "null") {
      this.paymentStatus = null
    }
    let dateStringDebut = "";
    let dateStringFin = "";
    if (this.dateDebut != null) {
      dateStringDebut = formatDate(this.dateDebut!, 'yyyy-MM-dd', 'en-US')
    }
    if (this.dateFin != null) {
      dateStringFin = formatDate(this.dateFin!, 'yyyy-MM-dd', 'en-US')
    }
    this.isLoading = true
    this.factureService.getAll(this.currentPage, this.pageSize,this.refFacture!,this.minMontatnTTC!,this.maxMontatnTTC!,this.paymentStatus!,this.client.id!,dateStringDebut,dateStringFin).subscribe(page => {
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
  toggleDivFiltre() {
    this.showDivFiltre = !this.showDivFiltre;
  }

  ajouterListIdFacture(id:number) {
    if(this.ids.indexOf(id) == -1){
      this.ids.push(id)
    }else{
      const newIds = this.ids.filter(item => item !== id);
      this.ids = newIds
    }
    console.log(this.ids)
  }

  pdf() {
    this.factureService.generatePdf(this.ids).subscribe(data=>{
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })
  }

  findWidthFiltre() {
    this.findAllPaginated()
    this.ids = []
  }
}
