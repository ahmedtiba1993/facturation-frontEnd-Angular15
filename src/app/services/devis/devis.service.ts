import { Injectable } from '@angular/core';
import { FactureControllerService } from '../../api/services/facture-controller.service';
import { DevisControllerService } from '../../api/services/devis-controller.service';
import { Observable } from 'rxjs';
import { PageFactureDto } from '../../api/models/page-facture-dto';
import { FactureDto } from '../../api/models/facture-dto';
import { Statistique } from '../../api/models/statistique';
import { PageRecapClient } from '../../api/models/page-recap-client';
import { DevisDto } from '../../api/models/devis-dto';
import { PageClientRecapProjection } from '../../api/models/page-client-recap-projection';

@Injectable({
  providedIn: 'root',
})
export class DevisService {
  constructor(private devisService: DevisControllerService) {}

  getAll(
    page: number,
    size: number,
    refDevis: string,
    minMontatnTTC: number,
    maxMontatnTTC: number,
    paymentStatus: boolean,
    idClient: number,
    dateDebut: string,
    dateFin?: string
  ): Observable<PageFactureDto> {
    return this.devisService.findAll2({
      page,
      size,
      refDevis,
      minMontatnTTC,
      maxMontatnTTC,
      paymentStatus,
      idClient,
      dateDebut,
      dateFin,
    });
  }

  findById(idDevis: number): Observable<FactureDto> {
    return this.devisService.findById2({ idDevis });
  }

  ajouter(devis: DevisDto): Observable<FactureDto> {
    return this.devisService.save2({ body: devis });
  }

  generatePdf(ids: Array<number>): Observable<Blob> {
    return this.devisService.generatePdf1({ ids });
  }

  payé(idDevis: number): Observable<void> {
    return this.devisService.updateStatut1({ idDevis });
  }

  findAllIds(
    refDevis: string,
    minMontatnTTC: number,
    maxMontatnTTC: number,
    paymentStatus: boolean,
    idClient: number,
    dateDebut: string,
    dateFin?: string
  ): Observable<Array<number>> {
    return this.devisService.findAllIds1({
      refDevis,
      minMontatnTTC,
      maxMontatnTTC,
      paymentStatus,
      idClient,
      dateDebut,
      dateFin,
    });
  }
  delete(idDevis: number): Observable<void> {
    return this.devisService.deleteDevis({ idDevis });
  }

  recapClient(
    page: number,
    size: number
  ): Observable<PageClientRecapProjection> {
    return this.devisService.getRecapClient1({ page, size });
  }

  creationFacture(idDevis: number): Observable<void> {
    return this.devisService.convertDevisToFacture({ idDevis });
  }

  deleteFromDevis(idDevis: number, idLigneDevis: number): Observable<void> {
    return this.devisService.deleteLignedevis({
      idDevis,
      idLigneDevis,
    });
  }

  ajouterProduit(
    idDevis: number,
    idProduit: number,
    prix: number,
    quantite: number,
    remise: number
  ): Observable<void> {
    return this.devisService.ajouterLigneDevis({
      idDevis,
      idProduit,
      prix,
      quantite,
      remise,
    });
  }
}
