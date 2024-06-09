import { Component } from '@angular/core';
import { FactureService } from '../../services/facture/facture.service';
import { FactureDto } from '../../api/models/facture-dto';
import { PageFactureDto } from '../../api/models/page-facture-dto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClientService } from '../../services/client/client.service';
import { ClientDto } from '../../api/models/client-dto';
import { formatDate } from '@angular/common';
import { ProduitService } from '../../services/produit/produit.service';
import { UrlFileService } from '../../services/urlFile/url-file.service';
import { UrlFileDto } from '../../api/models/url-file-dto';
import { ApiConfiguration } from '../../api/api-configuration';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  listeFacture: Array<FactureDto> = [];
  page: PageFactureDto = {};
  currentPage: number = 0;
  pageSize: number = 10;
  isLoading = false;
  idFact: number = 0;
  showDivFiltre = false;
  listClient: Array<ClientDto> = [];
  ids: Array<number> = [];
  isButtonLoading = false;
  //filtre
  refFacture?: string;
  minMontatnTTC?: number;
  maxMontatnTTC?: number;
  paymentStatus? = null;
  client: ClientDto = {};
  dateDebut?: Date;
  dateFin?: Date;

  isCopyButtonLoading = false;

  frontUrl = environment.frontUrl;

  constructor(
    private factureService: FactureService,
    private clientService: ClientService,
    private urlFileService: UrlFileService,
    private apiConfig: ApiConfiguration
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
    if (this.paymentStatus! == 'null') {
      this.paymentStatus = null;
    }
    let dateStringDebut: string = '';
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
    this.factureService
      .getAll(
        this.currentPage,
        this.pageSize,
        this.refFacture!,
        this.minMontatnTTC!,
        this.maxMontatnTTC!,
        this.paymentStatus!,
        this.client.id!,
        dateStringDebut,
        dateStringFin
      )
      .subscribe((page) => {
        this.page = page;
        this.listeFacture = page.content!;
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
    this.factureService.payé(this.idFact).subscribe((data) => {
      this.findAllPaginated();
    });
  }

  delete() {
    this.isLoading = true;
    this.factureService.delete(this.idFact).subscribe((data) => {
      this.findAllPaginated();
    });
  }

  setId(id: number | undefined) {
    this.idFact = id!;
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
    this.isButtonLoading = true;
    this.factureService.generatePdf(this.ids).subscribe((data) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      this.isButtonLoading = false;
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
    console.log('date' + dateStringFin);
    this.factureService
      .findAllIds(
        this.refFacture!,
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

  createUrlPdfFile(id: number | undefined) {
    this.isCopyButtonLoading = true;
    if (id !== undefined) {
      this.urlFileService.createUrlFile(id, 'facture').subscribe((data) => {
        navigator.clipboard.writeText(this.frontUrl + '/pdf/' + data.uuid!);
        this.isCopyButtonLoading = false;
      });
    }
  }

  confirmationMessage = '';
  showNotification: boolean = false;
  typeNotif = '';

  sendMail(id: number | undefined) {
    this.factureService.sendEmailFacture(id!).subscribe(
      (data) => {
        this.confirmationMessage = 'E-mail envoyé avec succès.';
        this.showNotification = true;
        setTimeout(() => {
          this.typeNotif = 'success';
          this.showNotification = false;
        }, 5000);
      },
      (error) => {
        this.confirmationMessage = 'Erreur: Adresse e-mail vide.';
        this.showNotification = true;
        setTimeout(() => {
          this.typeNotif = 'error';
          this.showNotification = true;
        }, 5000);
      }
    );
  }

}
