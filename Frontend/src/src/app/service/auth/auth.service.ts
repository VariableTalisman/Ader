import {Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserSharedDataService} from "../user/user-shared-data.service";
import {Observable} from "rxjs";
import {User} from "../../model/user/user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://' + environment.backendHost + ':8080/rest';
  TOKEN_URL = 'http://' + environment.backendHost + ':8080/oauth/token';
  CLIENT_NAME = 'ader_api';
  CLIENT_SECRET = 'licenta2020';

  constructor(
      public http: HttpClient,
      public userSharedDataService: UserSharedDataService,
      public jwtHelper: JwtHelperService
  ) {
  }

  public isAuthenticated(): boolean {
    const rawToken = localStorage.getItem('token');
    let token: string;

    if (rawToken) {
      token = JSON.parse(rawToken).access_token;

      // Check whether the token is expired and return
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  login(loginPayload: HttpParams) {
    const headers = {
      Authorization: 'Basic ' + btoa(this.CLIENT_NAME + ':' + this.CLIENT_SECRET),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post<any>(this.TOKEN_URL, loginPayload.toString(), {headers});
  }

  register(user: User, role: string): Observable<User> {
    return this.http.post<User>(this.BASE_URL + '/auth/register?role=' + role, user);
  }

  logout() {
    localStorage.removeItem('current_user');
    localStorage.removeItem('token');
    this.userSharedDataService.userData.next(null);
  }
}
