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

import { NumFacture } from '../models/num-facture';

@Injectable({
  providedIn: 'root',
})
export class NumFactureControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getNumFacture
   */
  static readonly GetNumFacturePath = '/facturation/v1/numFacture/getNumFacture';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNumFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNumFacture$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<NumFacture>> {

    const rb = new RequestBuilder(this.rootUrl, NumFactureControllerService.GetNumFacturePath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NumFacture>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNumFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNumFacture(params?: {
  },
  context?: HttpContext

): Observable<NumFacture> {

    return this.getNumFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<NumFacture>) => r.body as NumFacture)
    );
  }

  /**
   * Path part for operation updateNumFacture
   */
  static readonly UpdateNumFacturePath = '/facturation/v1/numFacture/updateNumFacture';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateNumFacture()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateNumFacture$Response(params: {
    numFacture: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, NumFactureControllerService.UpdateNumFacturePath, 'get');
    if (params) {
      rb.query('numFacture', params.numFacture, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: {
        };
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateNumFacture$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateNumFacture(params: {
    numFacture: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.updateNumFacture$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
};
}>) => r.body as {
[key: string]: {
};
})
    );
  }

}
