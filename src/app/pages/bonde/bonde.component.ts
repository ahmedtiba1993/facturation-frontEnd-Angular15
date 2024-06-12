import { Component } from '@angular/core';
import { ClientDto } from '../../api/models/client-dto';
import { ClientService } from '../../services/client/client.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { BondeLivraisonDto } from '../../api/models/bonde-livraison-dto';
import { PageBondeLivraisonDto } from '../../api/models/page-bonde-livraison-dto';
import { BondeLivraisonService } from '../../services/bondeLivraison/bonde-livraison.service';

@Component({
  selector: 'app-bonde',
  templateUrl: './bonde.component.html',
  styleUrls: ['./bonde.component.css']
})
export class BondeComponent {
  listeBonde: Array<BondeLivraisonDto> = [];
  page: PageBondeLivraisonDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading = false;
  idDev: number = 0;
  showDivFiltre = false;
  listClient: Array<ClientDto> = [];
  ids: Array<number> = [];

  //filtre
  refBonde?: string;
  minMontatnTTC?: number;
  maxMontatnTTC?: number;
  client: ClientDto = {};
  dateDebut?: Date;
  dateFin?: Date;

  isButtonLoading = false;
  idBon : number | undefined = 0;
  selectedDocument: string = 'devis';

  constructor(
    private bondeService: BondeLivraisonService,
    private clientService: ClientService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.findAllPaginated();
    this.findAllClient();
  }

  findAllClient() {
    this.clientService.findAll().subscribe((data) => {
      this.listClient = data;
    });
  }

  findAllPaginated() {
    this.isButtonLoading = true;

    this.isLoading = true;

    let dateStringDebut = '';
    let dateStringFin = '';
    if (this.dateDebut != null && this.dateDebut!.toString().length > 0) {
      dateStringDebut = formatDate(this.dateDebut!, 'yyyy-MM-dd', 'en-US');
    } else {
      dateStringDebut = '';
    }
    if (this.dateFin != null && this.dateFin!.toString().length > 0) {
      dateStringFin = formatDate(this.dateFin!, 'yyyy-MM-dd', 'en-US');
    } else {
      dateStringFin = '';
    }
    this.isLoading = true;
    this.bondeService
      .getAll(
        this.currentPage,
        this.pageSize,
        this.refBonde!,
        this.minMontatnTTC!,
        this.maxMontatnTTC!,
        this.client.id!,
        dateStringDebut,
        dateStringFin
      )
      .subscribe((page) => {
        this.isButtonLoading = false;
        this.page = page;
        this.listeBonde = page.content!;
        this.isLoading = false;
      });
  }

  onPageChange(event: any) {
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

  setId(id: number | undefined) {
    this.idDev = id!;
  }

  toggleDivFiltre() {
    this.showDivFiltre = !this.showDivFiltre;
  }

  ajouterListIdFacture(id: number) {
    if (this.ids.indexOf(id) == -1) {
      this.ids.push(id);
    } else {
      const newIds = this.ids.filter((item) => item !== id);
      this.ids = newIds;
    }
  }

  pdf() {
    this.bondeService.generatePdf(this.ids).subscribe((data) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  findWidthFiltre() {
    this.findAllPaginated();
    this.ids = [];
  }

  findAllIds() {
    if (this.ids.length > 0) {
      this.ids = [];
      return;
    }
    let dateStringDebut = '';
    let dateStringFin = '';
    if (this.dateDebut != null && this.dateDebut!.toString().length > 0) {
      dateStringDebut = formatDate(this.dateDebut!, 'yyyy-MM-dd', 'en-US');
    } else {
      dateStringDebut = '';
    }
    if (this.dateFin != null && this.dateFin!.toString().length > 0) {
      dateStringFin = formatDate(this.dateFin!, 'yyyy-MM-dd', 'en-US');
    } else {
      dateStringFin = '';
    }
    this.bondeService
      .findAllIds(
        this.refBonde!,
        this.minMontatnTTC!,
        this.maxMontatnTTC!,
        this.client.id!,
        dateStringDebut,
        dateStringFin
      )
      .subscribe((data) => {
        this.ids = data;
      });
  }

  setIdBon(id: number | undefined) {
    this.idBon = id;
  }

  confirmationMessage = '';
  showNotification: boolean = false;
  typeNotif = '';

  converterTo() {
    if (this.selectedDocument === 'devis') {
      this.bondeService.convertToDevis(this.idBon!).subscribe(data => {
        this.confirmationMessage = 'Création de devis avec succès';
        this.showNotification = true;
        this.typeNotif= "success"
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      });
    } else if (this.selectedDocument === 'facture') {
      this.bondeService.convertToFacture(this.idBon!).subscribe(data => {
        this.confirmationMessage = 'Création de facture avec succès';
        this.showNotification = true;
        this.typeNotif= "success"
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      });
    }
  }
}
