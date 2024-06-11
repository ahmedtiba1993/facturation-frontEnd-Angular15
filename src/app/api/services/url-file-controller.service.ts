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

import { UrlFileDto } from '../models/url-file-dto';

@Injectable({
  providedIn: 'root',
})
export class UrlFileControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/facturation/v1/urlfile/create/{type}/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method doesn't expect any request body.
   */
  create$Response(params: {
    type: string;
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UrlFileDto>> {

    const rb = new RequestBuilder(this.rootUrl, UrlFileControllerService.CreatePath, 'post');
    if (params) {
      rb.query('type', params.type, {});
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UrlFileDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  create(params: {
    type: string;
    id: number;
  },
  context?: HttpContext

): Observable<UrlFileDto> {

    return this.create$Response(params,context).pipe(
      map((r: StrictHttpResponse<UrlFileDto>) => r.body as UrlFileDto)
    );
  }

  /**
   * Path part for operation getUrlFile
   */
  static readonly GetUrlFilePath = '/facturation/v1/urlfile/pdf/{uuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUrlFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlFile$Response(params: {
    uuid: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UrlFileDto>> {

    const rb = new RequestBuilder(this.rootUrl, UrlFileControllerService.GetUrlFilePath, 'get');
    if (params) {
      rb.path('uuid', params.uuid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UrlFileDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUrlFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUrlFile(params: {
    uuid: string;
  },
  context?: HttpContext

): Observable<UrlFileDto> {

    return this.getUrlFile$Response(params,context).pipe(
      map((r: StrictHttpResponse<UrlFileDto>) => r.body as UrlFileDto)
    );
  }

  /**
   * Path part for operation getFacturePdf
   */
  static readonly GetFacturePdfPath = '/facturation/v1/urlfile/pdf/{id}/{type}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFacturePdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFacturePdf$Response(params: {
    id: number;
    type: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, UrlFileControllerService.GetFacturePdfPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('type', params.type, {});
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
   * To access the full response (for headers, for example), `getFacturePdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFacturePdf(params: {
    id: number;
    type: string;
  },
  context?: HttpContext

): Observable<Blob> {

    return this.getFacturePdf$Response(params,context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
