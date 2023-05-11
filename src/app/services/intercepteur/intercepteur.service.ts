import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthenticationResponse} from "../../api/models/authentication-response";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class IntercepteurService implements HttpInterceptor{

  constructor(private router: Router) { }

  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
  }*/
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authenticationResponse : AuthenticationResponse={};
    if(localStorage.getItem('accessToken')) {
      authenticationResponse.token = JSON.parse(localStorage.getItem("accessToken") as string
      );
    }
      if (authenticationResponse.token) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + authenticationResponse.token
          }
        });
      }

      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            console.log("aaaa")
            localStorage.removeItem("accessToken")
            this.router.navigateByUrl("login");
          }
          return throwError(error);
        })
      );

  }
}
