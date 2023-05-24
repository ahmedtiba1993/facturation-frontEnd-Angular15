import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PageFactureDto} from "../../api/models/page-facture-dto";
import {FactureControllerService} from "../../api/services/facture-controller.service";
import {FactureDto} from "../../api/models/facture-dto";
import {StrictHttpResponse} from "../../api/strict-http-response";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(
    private factureService : FactureControllerService
  ) { }

  getAll(page: number, size: number ,
         refFacture: string,
          minMontatnTTC: number,
          maxMontatnTTC: number,
          paymentStatus: boolean,
          idClient: number,
          dateDebut: string,
          dateFin?: string):Observable<PageFactureDto>{
    return this.factureService.findAll1({page,size,refFacture,minMontatnTTC,maxMontatnTTC,paymentStatus,idClient,dateDebut,dateFin})
  }

  findById(idFacture : number):Observable<FactureDto>{
    return this.factureService.findById1({idFacture})
  }

  ajouter(facture : FactureDto):Observable<FactureDto>{
    return this.factureService.save1({body : facture})
  }

  generatePdf(idFacture : number):Observable<Blob>{
    return this.factureService.generatePdf({idFacture});
  }

  payé(idFacture : number):Observable<void>{
    return this.factureService.updateStatut( {idFacture});
  }
}
