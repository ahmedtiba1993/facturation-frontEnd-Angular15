/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BondeLivraison } from '../models/bonde-livraison';
import { BondeLivraisonDto } from '../models/bonde-livraison-dto';
import { PageBondeLivraisonDto } from '../models/page-bonde-livraison-dto';

@Injectable({
  providedIn: 'root',
})
export class BondeLivraisonControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save5
   */
  static readonly Save5Path = '/facturation/v1/bondelivraison/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: {
    body: BondeLivraison
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BondeLivraisonDto>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.Save5Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BondeLivraisonDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: {
    body: BondeLivraison
  },
  context?: HttpContext

): Observable<BondeLivraisonDto> {

    return this.save5$Response(params,context).pipe(
      map((r: StrictHttpResponse<BondeLivraisonDto>) => r.body as BondeLivraisonDto)
    );
  }

  /**
   * Path part for operation convertToFacture
   */
  static readonly ConvertToFacturePath = '/facturation/v1/bondelivraison/convert-to-facture/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `convertToFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  convertToFacture$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.ConvertToFacturePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `convertToFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  convertToFacture(params: {
    id: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.convertToFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation convertToDevis
   */
  static readonly ConvertToDevisPath = '/facturation/v1/bondelivraison/convert-to-devis/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `convertToDevis()` instead.
   *
   * This method doesn't expect any request body.
   */
  convertToDevis$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.ConvertToDevisPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `convertToDevis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  convertToDevis(params: {
    id: number;
  },
  context?: HttpContext

): Observable<number> {

    return this.convertToDevis$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation ajouterLigneBonde
   */
  static readonly AjouterLigneBondePath = '/facturation/v1/bondelivraison/ajouterLigneBonde/{idBonde}/{idProduit}/{prix}/{quantite}/{remise}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterLigneBonde()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterLigneBonde$Response(params: {
    idBonde: number;
    idProduit: number;
    prix: number;
    quantite: number;
    remise: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.AjouterLigneBondePath, 'post');
    if (params) {
      rb.path('idBonde', params.idBonde, {});
      rb.path('idProduit', params.idProduit, {});
      rb.path('prix', params.prix, {});
      rb.path('quantite', params.quantite, {});
      rb.path('remise', params.remise, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterLigneBonde$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterLigneBonde(params: {
    idBonde: number;
    idProduit: number;
    prix: number;
    quantite: number;
    remise: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.ajouterLigneBonde$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findById5
   */
  static readonly FindById5Path = '/facturation/v1/bondelivraison/{idBondeLivraison}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params: {
    idBondeLivraison: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BondeLivraisonDto>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.FindById5Path, 'get');
    if (params) {
      rb.path('idBondeLivraison', params.idBondeLivraison, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BondeLivraisonDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params: {
    idBondeLivraison: number;
  },
  context?: HttpContext

): Observable<BondeLivraisonDto> {

    return this.findById5$Response(params,context).pipe(
      map((r: StrictHttpResponse<BondeLivraisonDto>) => r.body as BondeLivraisonDto)
    );
  }

  /**
   * Path part for operation generatePdf2
   */
  static readonly GeneratePdf2Path = '/facturation/v1/bondelivraison/generate-pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generatePdf2()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf2$Response(params: {
    ids: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.GeneratePdf2Path, 'get');
    if (params) {
      rb.query('ids', params.ids, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generatePdf2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf2(params: {
    ids: Array<number>;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.generatePdf2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation findAll5
   */
  static readonly FindAll5Path = '/facturation/v1/bondelivraison/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5$Response(params?: {
    page?: number;
    size?: number;
    refBondeLivraison?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageBondeLivraisonDto>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.FindAll5Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('refBondeLivraison', params.refBondeLivraison, {});
      rb.query('minMontatnTTC', params.minMontatnTTC, {});
      rb.query('maxMontatnTTC', params.maxMontatnTTC, {});
      rb.query('idClient', params.idClient, {});
      rb.query('dateDebut', params.dateDebut, {});
      rb.query('dateFin', params.dateFin, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageBondeLivraisonDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5(params?: {
    page?: number;
    size?: number;
    refBondeLivraison?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<PageBondeLivraisonDto> {

    return this.findAll5$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageBondeLivraisonDto>) => r.body as PageBondeLivraisonDto)
    );
  }

  /**
   * Path part for operation findAllIds2
   */
  static readonly FindAllIds2Path = '/facturation/v1/bondelivraison/allIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllIds2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllIds2$Response(params?: {
    refBondeLivraison?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<number>>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.FindAllIds2Path, 'get');
    if (params) {
      rb.query('refBondeLivraison', params.refBondeLivraison, {});
      rb.query('minMontatnTTC', params.minMontatnTTC, {});
      rb.query('maxMontatnTTC', params.maxMontatnTTC, {});
      rb.query('idClient', params.idClient, {});
      rb.query('dateDebut', params.dateDebut, {});
      rb.query('dateFin', params.dateFin, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<number>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllIds2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllIds2(params?: {
    refBondeLivraison?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<Array<number>> {

    return this.findAllIds2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<number>>) => r.body as Array<number>)
    );
  }

  /**
   * Path part for operation deleteLigneBonde
   */
  static readonly DeleteLigneBondePath = '/facturation/v1/bondelivraison/deleteLigneBonde/{idBonde}/{idLigneBonde}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLigneBonde()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneBonde$Response(params: {
    idBonde: number;
    idLigneBonde: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BondeLivraisonControllerService.DeleteLigneBondePath, 'delete');
    if (params) {
      rb.path('idBonde', params.idBonde, {});
      rb.path('idLigneBonde', params.idLigneBonde, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLigneBonde$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneBonde(params: {
    idBonde: number;
    idLigneBonde: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteLigneBonde$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
