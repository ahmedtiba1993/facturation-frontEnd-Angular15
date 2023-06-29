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

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation changePassword
   */
  static readonly ChangePasswordPath = '/facturation/v1/user/changePassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  changePassword$Response(
    params: {
      id: number;
      newPassword: string;
    },
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      [key: string]: {};
    }>
  > {
    const rb = new RequestBuilder(
      this.rootUrl,
      UserControllerService.ChangePasswordPath,
      'post'
    );
    if (params) {
      rb.query('id', params.id, {});
      rb.query('newPassword', params.newPassword, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<{
            [key: string]: {};
          }>;
        })
      );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changePassword(
    params: {
      id: number;
      newPassword: string;
    },
    context?: HttpContext
  ): Observable<{
    [key: string]: {};
  }> {
    return this.changePassword$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
            [key: string]: {};
          }>
        ) =>
          r.body as {
            [key: string]: {};
          }
      )
    );
  }

  /**
   * Path part for operation getUserByEmail
   */
  static readonly GetUserByEmailPath = '/facturation/v1/user/userConnected';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Response(
    params: {
      email: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<User>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      UserControllerService.GetUserByEmailPath,
      'get'
    );
    if (params) {
      rb.query('email', params.email, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<User>;
        })
      );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail(
    params: {
      email: string;
    },
    context?: HttpContext
  ): Observable<User> {
    return this.getUserByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  editPassword() {}
}
