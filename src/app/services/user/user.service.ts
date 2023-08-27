import { Injectable } from '@angular/core';
import { AuthenticationControllerService } from '../../api/services/authentication-controller.service';
import { AuthenticationRequest } from '../../api/models/authentication-request';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../api/models/authentication-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserControllerService } from '../../api/services/user-controller.service';
import { User } from '../../api/models/user';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { UserDto } from '../../api/models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  helper = new JwtHelperService();

  constructor(
    private authenticationService: AuthenticationControllerService,
    private userService: UserControllerService
  ) {}

  login(
    authenticationRequest: AuthenticationRequest
  ): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate({
      body: authenticationRequest,
    });
  }

  getUserConnected(): Observable<User> {
    const token = localStorage.getItem('accessToken');
    let decodedToken = this.helper.decodeToken(token!);
    const email = this.readElementFromToken(
      localStorage.getItem('accessToken') as string,
      'userName'
    );
    return this.userService.getUserByEmail({ email });
  }

  setAccessToken(authenticatcationResponse: AuthenticationResponse): void {
    localStorage.setItem(
      'accessToken',
      JSON.stringify(authenticatcationResponse)
    );
  }
  readElementFromToken(token: string, elementName: string): any {
    const decodedToken = this.helper.decodeToken(token);
    if (decodedToken && decodedToken[elementName]) {
      return decodedToken[elementName];
    }
    return null;
  }
  setUSer(user: User) {
    let userToCookies: User = {};
    userToCookies.firstname = user.firstname;
    userToCookies.lastname = user.lastname;
    userToCookies.id = user.id;

    localStorage.setItem('user', JSON.stringify(userToCookies));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user') as string);
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

  editPassword(
    id: number,
    newPassword: string
  ): Observable<{ [p: string]: {} }> {
    return this.userService.changePassword({ id, newPassword });
  }

  getEmail() {
    const token = localStorage.getItem('accessToken');
    let decodedToken = this.helper.decodeToken(token!);
    const email = this.readElementFromToken(
      localStorage.getItem('accessToken') as string,
      'userName'
    );
    return email;
  }
  getUserIfo(): Observable<UserDto> {
    const email = this.getEmail();
    return this.userService.getUserDtailsDto({ email });
  }

  modifierUserInfo(
    firstName: string,
    lastName: string,
    email: string,
    tel: number,
    fax: number,
    mobile: number
  ) {
    return this.userService.modifierUserInfo$Response({
      firstName,
      lastName,
      email,
      tel,
      fax,
      mobile,
    });
  }
}
