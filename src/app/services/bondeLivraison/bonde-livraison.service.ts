import { Injectable } from '@angular/core';
import { DevisControllerService } from '../../api/services/devis-controller.service';
import { BondeLivraisonControllerService } from '../../api/services/bonde-livraison-controller.service';
import { Observable, tap } from 'rxjs';
import { PageFactureDto } from '../../api/models/page-facture-dto';
import { FactureDto } from '../../api/models/facture-dto';
import { DevisDto } from '../../api/models/devis-dto';
import { PageClientRecapProjection } from '../../api/models/page-client-recap-projection';
import { BondeLivraisonDto } from '../../api/models/bonde-livraison-dto';
import { PageBondeLivraisonDto } from '../../api/models/page-bonde-livraison-dto';

@Injectable({
  providedIn: 'root'
})
export class BondeLivraisonService {

  constructor(private bondeService: BondeLivraisonControllerService) { }

  getAll(
    page: number,
    size: number,
    refBondeLivraison: string,
    minMontatnTTC: number,
    maxMontatnTTC: number,
    idClient: number,
    dateDebut: string,
    dateFin?: string
  ): Observable<PageBondeLivraisonDto> {
    return this.bondeService.findAll5({
      page,
      size,
      refBondeLivraison,
      minMontatnTTC,
      maxMontatnTTC,
      idClient,
      dateDebut,
      dateFin,
    });
  }

  findById(idBondeLivraison: number): Observable<BondeLivraisonDto> {
    return this.bondeService.findById5({ idBondeLivraison });
  }

  ajouter(bonde: BondeLivraisonDto): Observable<BondeLivraisonDto> {
    console.log(bonde)
    return this.bondeService.save5({ body: bonde });
  }

  generatePdf(ids: Array<number>): Observable<Blob> {
    return this.bondeService.generatePdf2({ ids });
  }

  findAllIds(
    refBondeLivraison: string,
    minMontatnTTC: number,
    maxMontatnTTC: number,
    idClient: number,
    dateDebut: string,
    dateFin?: string
  ): Observable<Array<number>> {
    return this.bondeService.findAllIds2({
      refBondeLivraison,
      minMontatnTTC,
      maxMontatnTTC,
      idClient,
      dateDebut,
      dateFin,
    });
  }

  deleteFromBonde(idBonde: number, idLigneBonde: number): Observable<void> {
    return this.bondeService.deleteLigneBonde({
      idBonde,
      idLigneBonde,
    });
  }

  ajouterProduit(
    idBonde: number,
    idProduit: number,
    prix: number,
    quantite: number,
    remise: number
  ): Observable<void> {
    return this.bondeService.ajouterLigneBonde({
      idBonde,
      idProduit,
      prix,
      quantite,
      remise,
    });
  }

  convertToDevis(id: number): Observable<number> {
    return this.bondeService.convertToDevis({id});
  }

  convertToFacture(id: number): Observable<number> {
    return this.bondeService.convertToFacture({id})
  }
}
