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
import { UrlFileService } from '../../services/urlFile/url-file.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
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

  isButtonLoading = false;
  isCopyButtonLoading = false;
  frontUrl = environment.frontUrl;
  selectedDocument: string = 'facture';

  constructor(
    private devisService: DevisService,
    private clientService: ClientService,
    private router: Router,
    private urlFileService: UrlFileService
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
        this.isButtonLoading = false;
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

  createUrlPdfFile(id: number | undefined) {
    this.isCopyButtonLoading = true;
    if (id !== undefined) {
      this.urlFileService.createUrlFile(id, 'devis').subscribe((data) => {
        navigator.clipboard.writeText(this.frontUrl + '/pdf/' + data.uuid!);
        this.isCopyButtonLoading = false;
      });
    }
  }

  confirmationMessage = '';
  showNotification: boolean = false;
  typeNotif = '';

  sendMail(id: number | undefined) {
    this.devisService.sendEmail(id!).subscribe(
      (data) => {
        console.log('test');
        this.confirmationMessage = 'E-mail envoyé avec succès.';
        this.showNotification = true;
        this.typeNotif = 'success';
        setTimeout(() => {
          this.showNotification = false;
        }, 5000);
      },
      (error) => {
        this.confirmationMessage = 'Erreur: Adresse e-mail vide.';
        this.showNotification = true;
        this.typeNotif = 'error';
        setTimeout(() => {
          this.showNotification = true;
        }, 5000);
      }
    );
  }

  converterTo() {
    if (this.selectedDocument === 'facture') {
      this.devisService.creationFacture(this.idDev).subscribe(data => {
        this.confirmationMessage = 'Création de facture avec succès';
        this.showNotification = true;
        this.typeNotif= "success"
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      });
    } else if (this.selectedDocument === 'bonDeLivraison') {
      this.devisService.creationBonLivraison(this.idDev).subscribe(data => {
        this.confirmationMessage = 'Création de bon de livraison avec succès';
        this.showNotification = true;
        this.typeNotif= "success"
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      });
    }
  }
}
