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

import { CategorieDto } from '../models/categorie-dto';
import { PageCategorieDto } from '../models/page-categorie-dto';

@Injectable({
  providedIn: 'root',
})
export class CategorieControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save4
   */
  static readonly Save4Path = '/facturation/v1/categorie/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: {
    body: CategorieDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategorieDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieControllerService.Save4Path, 'post');
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
        return r as StrictHttpResponse<CategorieDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: {
    body: CategorieDto
  },
  context?: HttpContext

): Observable<CategorieDto> {

    return this.save4$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDto>) => r.body as CategorieDto)
    );
  }

  /**
   * Path part for operation findById4
   */
  static readonly FindById4Path = '/facturation/v1/categorie/id/{idCat}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: {
    idCat: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CategorieDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieControllerService.FindById4Path, 'get');
    if (params) {
      rb.path('idCat', params.idCat, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategorieDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: {
    idCat: number;
  },
  context?: HttpContext

): Observable<CategorieDto> {

    return this.findById4$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDto>) => r.body as CategorieDto)
    );
  }

  /**
   * Path part for operation findAllPaginated2
   */
  static readonly FindAllPaginated2Path = '/facturation/v1/categorie/allpaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPaginated2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPaginated2$Response(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PageCategorieDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieControllerService.FindAllPaginated2Path, 'get');
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
        return r as StrictHttpResponse<PageCategorieDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllPaginated2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPaginated2(params?: {
    page?: number;
    size?: number;
  },
  context?: HttpContext

): Observable<PageCategorieDto> {

    return this.findAllPaginated2$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageCategorieDto>) => r.body as PageCategorieDto)
    );
  }

  /**
   * Path part for operation findAll4
   */
  static readonly FindAll4Path = '/facturation/v1/categorie/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CategorieDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieControllerService.FindAll4Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategorieDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: {
  },
  context?: HttpContext

): Observable<Array<CategorieDto>> {

    return this.findAll4$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategorieDto>>) => r.body as Array<CategorieDto>)
    );
  }

  /**
   * Path part for operation delete2
   */
  static readonly Delete2Path = '/facturation/v1/categorie/delete/{idCat}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: {
    idCat: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategorieControllerService.Delete2Path, 'delete');
    if (params) {
      rb.path('idCat', params.idCat, {});
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
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: {
    idCat: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete2$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
