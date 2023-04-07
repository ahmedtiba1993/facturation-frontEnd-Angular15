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

import { ClientDto } from '../models/client-dto';
import { PageClientDto } from '../models/page-client-dto';

@Injectable({
  providedIn: 'root',
})
export class ClientControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save2
   */
  static readonly Save2Path = '/facturation/v1/client/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: {
    body: ClientDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.Save2Path, 'post');
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
        return r as StrictHttpResponse<ClientDto>;
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
    body: ClientDto
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.save2$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/facturation/v1/client/id/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    idClient: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.FindById1Path, 'get');
    if (params) {
      rb.path('idClient', params.idClient, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClientDto>;
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
    idClient: number;
  },
  context?: HttpContext

): Observable<ClientDto> {

    return this.findById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientDto>) => r.body as ClientDto)
    );
  }

  /**
   * Path part for operation findAll2
   */
  static readonly FindAll2Path = '/facturation/v1/client/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageClientDto>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.FindAll2Path, 'get');
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
        return r as StrictHttpResponse<PageClientDto>;
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
  },
  context?: HttpContext

): Observable<PageClientDto> {

    return this.findAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageClientDto>) => r.body as PageClientDto)
    );
  }

  /**
   * Path part for operation delete1
   */
  static readonly Delete1Path = '/facturation/v1/client/delete/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: {
    idClient: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientControllerService.Delete1Path, 'delete');
    if (params) {
      rb.path('idClient', params.idClient, {});
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
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: {
    idClient: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
