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

import { FactureDto } from '../models/facture-dto';
import { PageFactureDto } from '../models/page-facture-dto';
import { PageRecapClient } from '../models/page-recap-client';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class FactureControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateStatut
   */
  static readonly UpdateStatutPath = '/facturation/v1/facture/statutupdate/{idFacture}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateStatut()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatut$Response(params: {
    idFacture: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.UpdateStatutPath, 'post');
    if (params) {
      rb.path('idFacture', params.idFacture, {});
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
   * To access the full response (for headers, for example), `updateStatut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatut(params: {
    idFacture: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateStatut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation save1
   */
  static readonly Save1Path = '/facturation/v1/facture/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: {
    body: FactureDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FactureDto>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.Save1Path, 'post');
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
        return r as StrictHttpResponse<FactureDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: {
    body: FactureDto
  },
  context?: HttpContext

): Observable<FactureDto> {

    return this.save1$Response(params,context).pipe(
      map((r: StrictHttpResponse<FactureDto>) => r.body as FactureDto)
    );
  }

  /**
   * Path part for operation ajouterLigneFacture
   */
  static readonly AjouterLigneFacturePath = '/facturation/v1/facture/ajouterLigneFacture/{factureId}/{idProduit}/{prix}/{quantite}/{remise}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterLigneFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterLigneFacture$Response(params: {
    factureId: number;
    idProduit: number;
    prix: number;
    quantite: number;
    remise: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.AjouterLigneFacturePath, 'post');
    if (params) {
      rb.path('factureId', params.factureId, {});
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
   * To access the full response (for headers, for example), `ajouterLigneFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterLigneFacture(params: {
    factureId: number;
    idProduit: number;
    prix: number;
    quantite: number;
    remise: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.ajouterLigneFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getStatistique
   */
  static readonly GetStatistiquePath = '/facturation/v1/statistique/statique';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStatistique()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatistique$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Statistique>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.GetStatistiquePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Statistique>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStatistique$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatistique(params?: {
  },
  context?: HttpContext

): Observable<Statistique> {

    return this.getStatistique$Response(params,context).pipe(
      map((r: StrictHttpResponse<Statistique>) => r.body as Statistique)
    );
  }

  /**
   * Path part for operation getRecapClient
   */
  static readonly GetRecapClientPath = '/facturation/v1/statistique/recapClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecapClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecapClient$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageRecapClient>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.GetRecapClientPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PageRecapClient>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecapClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecapClient(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<PageRecapClient> {

    return this.getRecapClient$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageRecapClient>) => r.body as PageRecapClient)
    );
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/facturation/v1/facture/{idFacture}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    idFacture: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FactureDto>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.FindById1Path, 'get');
    if (params) {
      rb.path('idFacture', params.idFacture, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FactureDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: {
    idFacture: number;
  },
  context?: HttpContext

): Observable<FactureDto> {

    return this.findById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<FactureDto>) => r.body as FactureDto)
    );
  }

  /**
   * Path part for operation generatePdf
   */
  static readonly GeneratePdfPath = '/facturation/v1/facture/generate-pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generatePdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf$Response(params: {
    ids: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.GeneratePdfPath, 'get');
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
   * To access the full response (for headers, for example), `generatePdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf(params: {
    ids: Array<number>;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.generatePdf$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation findAll1
   */
  static readonly FindAll1Path = '/facturation/v1/facture/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: {
    page?: number;
    size?: number;
    refFacture?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageFactureDto>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.FindAll1Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('refFacture', params.refFacture, {});
      rb.query('minMontatnTTC', params.minMontatnTTC, {});
      rb.query('maxMontatnTTC', params.maxMontatnTTC, {});
      rb.query('paymentStatus', params.paymentStatus, {});
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
        return r as StrictHttpResponse<PageFactureDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: {
    page?: number;
    size?: number;
    refFacture?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<PageFactureDto> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageFactureDto>) => r.body as PageFactureDto)
    );
  }

  /**
   * Path part for operation findAllIds
   */
  static readonly FindAllIdsPath = '/facturation/v1/facture/allIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllIds()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllIds$Response(params?: {
    refFacture?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<number>>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.FindAllIdsPath, 'get');
    if (params) {
      rb.query('refFacture', params.refFacture, {});
      rb.query('minMontatnTTC', params.minMontatnTTC, {});
      rb.query('maxMontatnTTC', params.maxMontatnTTC, {});
      rb.query('paymentStatus', params.paymentStatus, {});
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
   * To access the full response (for headers, for example), `findAllIds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllIds(params?: {
    refFacture?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<Array<number>> {

    return this.findAllIds$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<number>>) => r.body as Array<number>)
    );
  }

  /**
   * Path part for operation deleteLigneFacture
   */
  static readonly DeleteLigneFacturePath = '/facturation/v1/facture/deleteLigneFacture/{idFacture}/{idLigneFacture}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLigneFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneFacture$Response(params: {
    idFacture: number;
    idLigneFacture: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.DeleteLigneFacturePath, 'delete');
    if (params) {
      rb.path('idFacture', params.idFacture, {});
      rb.path('idLigneFacture', params.idLigneFacture, {});
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
   * To access the full response (for headers, for example), `deleteLigneFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLigneFacture(params: {
    idFacture: number;
    idLigneFacture: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteLigneFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteFacture
   */
  static readonly DeleteFacturePath = '/facturation/v1/facture/deleteFacture/{idFacture}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFacture$Response(params: {
    idFacture: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.DeleteFacturePath, 'delete');
    if (params) {
      rb.path('idFacture', params.idFacture, {});
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
   * To access the full response (for headers, for example), `deleteFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFacture(params: {
    idFacture: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
