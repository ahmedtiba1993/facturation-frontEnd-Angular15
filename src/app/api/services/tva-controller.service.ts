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

import { Tva } from '../models/tva';

@Injectable({
  providedIn: 'root',
})
export class TvaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateTva
   */
  static readonly UpdateTvaPath = '/facturation/v1/tva/updateTva';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTva()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTva$Response(params: {
    tva: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, TvaControllerService.UpdateTvaPath, 'post');
    if (params) {
      rb.query('tva', params.tva, {});
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
   * To access the full response (for headers, for example), `updateTva$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTva(params: {
    tva: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.updateTva$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: {
};
}>) => r.body as {
[key: string]: {
};
})
    );
  }

  /**
   * Path part for operation getTva
   */
  static readonly GetTvaPath = '/facturation/v1/tva/getTva';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTva()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTva$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Tva>> {

    const rb = new RequestBuilder(this.rootUrl, TvaControllerService.GetTvaPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tva>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTva$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTva(params?: {
  },
  context?: HttpContext

): Observable<Tva> {

    return this.getTva$Response(params,context).pipe(
      map((r: StrictHttpResponse<Tva>) => r.body as Tva)
    );
  }

}
