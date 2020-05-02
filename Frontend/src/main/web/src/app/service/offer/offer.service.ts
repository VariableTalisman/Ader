import {Injectable} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {Offer} from "../../model/offer/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  userURL = this.authService.BASE_URL + '/';

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  getOffers() {
    return this.http.get<Offer[]>(this.userURL + 'offer?access_token=' +
      JSON.parse(localStorage.getItem('token')).access_token);
  }
}