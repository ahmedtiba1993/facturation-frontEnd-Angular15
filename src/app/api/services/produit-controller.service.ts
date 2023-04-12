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

import { PageProduitDto } from '../models/page-produit-dto';
import { ProduitDto } from '../models/produit-dto';

@Injectable({
  providedIn: 'root',
})
export class ProduitControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save
   */
  static readonly SavePath = '/facturation/v1/prodtuit/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: {
    body: ProduitDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProduitDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProduitControllerService.SavePath, 'post');
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
        return r as StrictHttpResponse<ProduitDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: {
    body: ProduitDto
  },
  context?: HttpContext

): Observable<ProduitDto> {

    return this.save$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProduitDto>) => r.body as ProduitDto)
    );
  }

  /**
   * Path part for operation findById
   */
  static readonly FindByIdPath = '/facturation/v1/prodtuitid/{idProdtuit}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    idProdtuit: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProduitDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProduitControllerService.FindByIdPath, 'get');
    if (params) {
      rb.path('idProdtuit', params.idProdtuit, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProduitDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    idProdtuit: number;
  },
  context?: HttpContext

): Observable<ProduitDto> {

    return this.findById$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProduitDto>) => r.body as ProduitDto)
    );
  }

  /**
   * Path part for operation findAllPaginated
   */
  static readonly FindAllPaginatedPath = '/facturation/v1/prodtuit/allpaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPaginated()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPaginated$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageProduitDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProduitControllerService.FindAllPaginatedPath, 'get');
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
        return r as StrictHttpResponse<PageProduitDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllPaginated$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPaginated(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<PageProduitDto> {

    return this.findAllPaginated$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageProduitDto>) => r.body as PageProduitDto)
    );
  }

  /**
   * Path part for operation findAll
   */
  static readonly FindAllPath = '/facturation/v1/prodtuit/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProduitDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ProduitControllerService.FindAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProduitDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: {
  },
  context?: HttpContext

): Observable<Array<ProduitDto>> {

    return this.findAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProduitDto>>) => r.body as Array<ProduitDto>)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/facturation/v1/prodtuit/delete/{idProdtuit}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    idProdtuit: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProduitControllerService.DeletePath, 'delete');
    if (params) {
      rb.path('idProdtuit', params.idProdtuit, {});
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
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    idProdtuit: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
