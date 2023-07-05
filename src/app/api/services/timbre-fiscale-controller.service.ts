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

import { TimbreFiscalDto } from '../models/timbre-fiscal-dto';

@Injectable({
  providedIn: 'root',
})
export class TimbreFiscaleControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateTimbre
   */
  static readonly UpdateTimbrePath = '/facturation/v1/timbre/updateTimbre';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTimbre()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTimbre$Response(params: {
    montant: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: {
};
}>> {

    const rb = new RequestBuilder(this.rootUrl, TimbreFiscaleControllerService.UpdateTimbrePath, 'post');
    if (params) {
      rb.query('montant', params.montant, {});
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
   * To access the full response (for headers, for example), `updateTimbre$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTimbre(params: {
    montant: number;
  },
  context?: HttpContext

): Observable<{
[key: string]: {
};
}> {

    return this.updateTimbre$Response(params,context).pipe(
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
   * Path part for operation getTimbre
   */
  static readonly GetTimbrePath = '/facturation/v1/timbre/getTimbre';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimbre()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimbre$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TimbreFiscalDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimbreFiscaleControllerService.GetTimbrePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TimbreFiscalDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTimbre$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimbre(params?: {
  },
  context?: HttpContext

): Observable<TimbreFiscalDto> {

    return this.getTimbre$Response(params,context).pipe(
      map((r: StrictHttpResponse<TimbreFiscalDto>) => r.body as TimbreFiscalDto)
    );
  }

}
