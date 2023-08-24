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

import { Devis } from '../models/devis';
import { DevisDto } from '../models/devis-dto';
import { PageClientRecapProjection } from '../models/page-client-recap-projection';
import { PageDevisDto } from '../models/page-devis-dto';

@Injectable({
  providedIn: 'root',
})
export class DevisControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateStatut1
   */
  static readonly UpdateStatut1Path = '/facturation/v1/devis/statutupdate/{idDevis}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateStatut1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatut1$Response(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.UpdateStatut1Path, 'post');
    if (params) {
      rb.path('idDevis', params.idDevis, {});
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
   * To access the full response (for headers, for example), `updateStatut1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatut1(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateStatut1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation save2
   */
  static readonly Save2Path = '/facturation/v1/devis/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: {
    body: Devis
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DevisDto>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.Save2Path, 'post');
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
        return r as StrictHttpResponse<DevisDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: {
    body: Devis
  },
  context?: HttpContext

): Observable<DevisDto> {

    return this.save2$Response(params,context).pipe(
      map((r: StrictHttpResponse<DevisDto>) => r.body as DevisDto)
    );
  }

  /**
   * Path part for operation convertDevisToFacture
   */
  static readonly ConvertDevisToFacturePath = '/facturation/v1/devis/convertDevisToFacture/{idDevis}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `convertDevisToFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  convertDevisToFacture$Response(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.ConvertDevisToFacturePath, 'post');
    if (params) {
      rb.path('idDevis', params.idDevis, {});
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
   * To access the full response (for headers, for example), `convertDevisToFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  convertDevisToFacture(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.convertDevisToFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findById2
   */
  static readonly FindById2Path = '/facturation/v1/devis/{idDevis}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DevisDto>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.FindById2Path, 'get');
    if (params) {
      rb.path('idDevis', params.idDevis, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DevisDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<DevisDto> {

    return this.findById2$Response(params,context).pipe(
      map((r: StrictHttpResponse<DevisDto>) => r.body as DevisDto)
    );
  }

  /**
   * Path part for operation getRecapClient1
   */
  static readonly GetRecapClient1Path = '/facturation/v1/devis/recapClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecapClient1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecapClient1$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageClientRecapProjection>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.GetRecapClient1Path, 'get');
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
        return r as StrictHttpResponse<PageClientRecapProjection>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecapClient1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecapClient1(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<PageClientRecapProjection> {

    return this.getRecapClient1$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageClientRecapProjection>) => r.body as PageClientRecapProjection)
    );
  }

  /**
   * Path part for operation generatePdf1
   */
  static readonly GeneratePdf1Path = '/facturation/v1/devis/generate-pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generatePdf1()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf1$Response(params: {
    ids: Array<number>;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.GeneratePdf1Path, 'get');
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
   * To access the full response (for headers, for example), `generatePdf1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generatePdf1(params: {
    ids: Array<number>;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.generatePdf1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation findAll2
   */
  static readonly FindAll2Path = '/facturation/v1/devis/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: {
    page?: number;
    size?: number;
    refDevis?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageDevisDto>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.FindAll2Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('refDevis', params.refDevis, {});
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
        return r as StrictHttpResponse<PageDevisDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: {
    page?: number;
    size?: number;
    refDevis?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<PageDevisDto> {

    return this.findAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageDevisDto>) => r.body as PageDevisDto)
    );
  }

  /**
   * Path part for operation findAllIds1
   */
  static readonly FindAllIds1Path = '/facturation/v1/devis/allIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllIds1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllIds1$Response(params?: {
    refDevis?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<number>>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.FindAllIds1Path, 'get');
    if (params) {
      rb.query('refDevis', params.refDevis, {});
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
   * To access the full response (for headers, for example), `findAllIds1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllIds1(params?: {
    refDevis?: string;
    minMontatnTTC?: number;
    maxMontatnTTC?: number;
    paymentStatus?: boolean;
    idClient?: number;
    dateDebut?: string;
    dateFin?: string;
  },
  context?: HttpContext

): Observable<Array<number>> {

    return this.findAllIds1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<number>>) => r.body as Array<number>)
    );
  }

  /**
   * Path part for operation deleteDevis
   */
  static readonly DeleteDevisPath = '/facturation/v1/devis/deleteDevis/{idDevis}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDevis()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevis$Response(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DevisControllerService.DeleteDevisPath, 'delete');
    if (params) {
      rb.path('idDevis', params.idDevis, {});
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
   * To access the full response (for headers, for example), `deleteDevis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDevis(params: {
    idDevis: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteDevis$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
