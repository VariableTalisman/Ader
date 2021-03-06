import {PersonaViewModel} from "../persona/persona-view-model";
import {BidStatus} from "../bidstatus/bid-status";

export interface Bid {
  id?: number;
  offerId: number;
  userEmail: string;
  persona: PersonaViewModel;
  freeProductSample: boolean;
  acceptInitialRequirements: boolean;
  compensation?: string;
  bidStatus: BidStatus;
}
