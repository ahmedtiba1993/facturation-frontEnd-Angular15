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
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageFactureDto>> {

    const rb = new RequestBuilder(this.rootUrl, FactureControllerService.FindAll1Path, 'get');
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
  },
  context?: HttpContext

): Observable<PageFactureDto> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageFactureDto>) => r.body as PageFactureDto)
    );
  }

}
