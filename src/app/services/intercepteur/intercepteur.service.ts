import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../api/models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class IntercepteurService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationResponse : AuthenticationResponse={};

    if(localStorage.getItem('accessToken')){
      authenticationResponse.token = JSON.parse( localStorage.getItem("accessToken") as string
      );

      const authRep = req.clone({
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          Authorization : 'Bearer '+authenticationResponse.token
        })      });
      return next.handle(authRep);
    }
    return next.handle(req);
  }
}
