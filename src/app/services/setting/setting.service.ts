import { Injectable } from '@angular/core';
import { TvaControllerService } from '../../api/services/tva-controller.service';
import { NumFactureControllerService } from '../../api/services/num-facture-controller.service';
import { TimbreFiscaleControllerService } from '../../api/services/timbre-fiscale-controller.service';
import { Observable } from 'rxjs';
import { Tva } from '../../api/models/tva';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { NumFacture } from '../../api/models/num-facture';
import { TimbreFiscalDto } from '../../api/models/timbre-fiscal-dto';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  constructor(
    private tvService: TvaControllerService,
    private numFactureService: NumFactureControllerService,
    private timbreService: TimbreFiscaleControllerService
  ) {}

  getTva(): Observable<Tva> {
    return this.tvService.getTva();
  }

  updateTva(tva: number): Observable<{ [p: string]: {} }> {
    return this.tvService.updateTva({ tva });
  }

  getNumFacture(): Observable<NumFacture> {
    return this.numFactureService.getNumFacture();
  }

  updateNumFacture(numFacture: number): Observable<{ [p: string]: {} }> {
    return this.numFactureService.updateNumFacture({ numFacture });
  }

  getTimbre(): Observable<TimbreFiscalDto> {
    return this.timbreService.getTimbre();
  }

  updateTimbre(montant: number): Observable<{ [p: string]: {} }> {
    return this.timbreService.updateTimbre({ montant });
  }
}
