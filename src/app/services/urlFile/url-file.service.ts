import { Injectable } from '@angular/core';
import { UrlFileControllerService } from '../../api/services/url-file-controller.service';
import { Observable } from 'rxjs';
import { FactureDto } from '../../api/models/facture-dto';
import { UrlFileDto } from '../../api/models/url-file-dto';

@Injectable({
  providedIn: 'root'
})
export class UrlFileService {

  constructor(
    public urlFileService: UrlFileControllerService
  ) { }

  createUrlFile(id : number, type : string): Observable<UrlFileDto>{
    return this.urlFileService.create({id, type})
  }

  getFacture(uuid: string): Observable<UrlFileDto> {
    return this.urlFileService.getUrlFile({ uuid });
  }

  generatePdf(id: number, type : string): Observable<Blob> {
    return this.urlFileService.getFacturePdf({ id, type });
  }
}
