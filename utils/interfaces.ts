import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Moment } from "moment";

export interface SubrouteProp {
  name: string;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export interface RouteProp extends SubrouteProp {
  subroutes?: SubrouteProp[];
}

export interface ProductProp {
  name: string;
  description: string;
  tos: string;
  availableDates: {
    from: Moment;
    to: Moment;
  };
  checkInDate: Moment;
  checkOutDate: Moment;
  extraNights: Moment[];
  airlineName: string;
  flightNumber: string;
  arrivalDate: Moment;
  departureDate: Moment;
  roomType: string;
  numberOfGuests: number;
  upgradeRequested: boolean;
  upgradeType: "King Bed" | "Two Queen Beds" | "";
  guestList: GuestProp[];
  customFields: CustomFieldProp[];
}

export interface CustomFieldProp {
  fieldName: string;
  fieldValue: string;
}

export interface GuestProp {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
  };
  dateOfBirth: Moment;
  passportPhoto: string;
  passportNumber: string;
  shirtSize: "S" | "M" | "L" | "XL" | "XXL" | "XXXL" | "";
  hatSize: string;
  shoeSize: string;
  favoriteSportsTeam: string;
}
