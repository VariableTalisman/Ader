import {Status} from "../status/status.enum";
import {OfferViewModel} from "../offer/offer-view-model";
import {Role} from "../role/role.enum";

export interface User {
  id: number;
  brandName: string;
  brandWebsite: string;
  email: string;
  password?: string;
  roles: Role[];
  createdOffers: OfferViewModel[];
  status: Status;
  token?: string;
  refresh_token?: string;
  token_expiration?: number;
}
