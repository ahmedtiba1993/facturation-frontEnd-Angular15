import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageFactureDto } from '../../api/models/page-facture-dto';
import { FactureControllerService } from '../../api/services/facture-controller.service';
import { FactureDto } from '../../api/models/facture-dto';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  constructor(private factureService: FactureControllerService) {}

  getAll(page: number, size: number): Observable<PageFactureDto> {
    return this.factureService.findAll1({ page, size });
  }

  findById(idFacture: number): Observable<FactureDto> {
    return this.factureService.findById1({ idFacture });
  }

  ajouter(facture: FactureDto): Observable<FactureDto> {
    return this.factureService.save1({ body: facture });
  }
}
