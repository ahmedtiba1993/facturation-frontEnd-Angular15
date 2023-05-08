import { Injectable } from '@angular/core';
import { AuthenticationControllerService } from '../../api/services/authentication-controller.service';
import { AuthenticationRequest } from '../../api/models/authentication-request';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../api/models/authentication-response';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  helper = new JwtHelperService();

  constructor(private authenticationService: AuthenticationControllerService) {}

  login(
    authenticationRequest: AuthenticationRequest
  ): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate({
      body: authenticationRequest,
    });
  }

  setAccessToken(authenticatcationResponse: AuthenticationResponse): void {
    localStorage.setItem(
      'accessToken',
      JSON.stringify(authenticatcationResponse)
    );
  }

  validateJwtToken(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return false;
    }

    let decodeToken = this.helper.decodeToken(token!);
    if (this.helper.isTokenExpired(token!)) {
      return false;
    }

    return true;
  }
}
