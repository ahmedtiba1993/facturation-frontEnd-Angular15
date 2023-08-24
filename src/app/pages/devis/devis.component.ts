import { Component } from '@angular/core';
import { FactureDto } from '../../api/models/facture-dto';
import { PageFactureDto } from '../../api/models/page-facture-dto';
import { ClientDto } from '../../api/models/client-dto';
import { FactureService } from '../../services/facture/facture.service';
import { ClientService } from '../../services/client/client.service';
import { DevisService } from '../../services/devis/devis.service';
import { formatDate } from '@angular/common';
import { DevisDto } from '../../api/models/devis-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'],
})
export class DevisComponent {
  listDevis: Array<DevisDto> = [];
  page: PageFactureDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading = false;
  idDev: number = 0;
  showDivFiltre = false;
  listClient: Array<ClientDto> = [];
  ids: Array<number> = [];

  //filtre
  refDevis?: string;
  minMontatnTTC?: number;
  maxMontatnTTC?: number;
  paymentStatus? = null;
  client: ClientDto = {};
  dateDebut?: Date;
  dateFin?: Date;

  constructor(
    private devisService: DevisService,
    private clientService: ClientService,
    private router: Router
  ) {}

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
    if (this.paymentStatus! == 'null') {
      this.paymentStatus = null;
    }
    let dateStringDebut = '';
    let dateStringFin = '';
    if (this.dateDebut != null) {
      dateStringDebut = formatDate(this.dateDebut!, 'yyyy-MM-dd', 'en-US');
    }
    if (this.dateFin != null) {
      dateStringFin = formatDate(this.dateFin!, 'yyyy-MM-dd', 'en-US');
    }
    this.isLoading = true;
    this.devisService
      .getAll(
        this.currentPage,
        this.pageSize,
        this.refDevis!,
        this.minMontatnTTC!,
        this.maxMontatnTTC!,
        this.paymentStatus!,
        this.client.id!,
        dateStringDebut,
        dateStringFin
      )
      .subscribe((page) => {
        this.page = page;
        this.listDevis = page.content!;
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

  updatePaymentStatus() {
    this.devisService.payé(this.idDev).subscribe((data) => {
      this.findAllPaginated();
    });
  }

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
    this.devisService.generatePdf(this.ids).subscribe((data) => {
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
    if (this.paymentStatus! == 'null') {
      this.paymentStatus = null;
    }
    let dateStringDebut = '';
    let dateStringFin = '';
    if (this.dateDebut != null) {
      dateStringDebut = formatDate(this.dateDebut!, 'yyyy-MM-dd', 'en-US');
    }
    if (this.dateFin != null) {
      dateStringFin = formatDate(this.dateFin!, 'yyyy-MM-dd', 'en-US');
    }
    this.devisService
      .findAllIds(
        this.refDevis!,
        this.minMontatnTTC!,
        this.maxMontatnTTC!,
        this.paymentStatus!,
        this.client.id!,
        dateStringDebut,
        dateStringFin
      )
      .subscribe((data) => {
        this.ids = data;
      });
  }

  delete() {
    this.isLoading = true;
    this.devisService.delete(this.idDev).subscribe((data) => {
      this.findAllPaginated();
    });
  }

  creadtionFacture() {
    this.isLoading = true;
    this.devisService.creationFacture(this.idDev).subscribe((data) => {
      this.router.navigate(['facture']);
    });
  }
}
