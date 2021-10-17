import * as yup from "yup";

export const guestSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  address: yup.object().shape({
    address1: yup.string().required(),
    address2: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().required(),
  }),
  dateOfBirth: yup.date().required(),
  passportPhoto: yup.string().url(),
  passportNumber: yup.string().required(),
  shirtSize: yup.string().oneOf(["S", "M", "L", "XL", "XXL", "XXXL"]),
  hatSize: yup.string().required(),
  shoeSize: yup.string().required(),
  favoriteSportsTeam: yup.string().required(),
});

export const customFieldSchema = yup.object().shape({
  fieldName: yup.string().required(),
  fieldValue: yup.string().required(),
});

export const productSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  tos: yup.string().required(),
  availableDates: yup.object().shape({
    from: yup.date(),
    to: yup.date(),
  }),
  checkInDate: yup.date().required(),
  checkOutDate: yup.date().required(),
  extraNights: yup.array(yup.date()),
  airlineName: yup.string().required(),
  flightNumber: yup.string().required(),
  arrivalDate: yup.date().required(),
  departureDate: yup.date().required(),
  roomType: yup.string().required(),
  numberOfGuests: yup.number().oneOf([1, 2, 3]).required(),
  upgradeRequested: yup.boolean(),
  upgradeType: yup.string(),
  guestList: yup.array(guestSchema).min(yup.ref("numberOfGuests")),
  customFields: yup.array(customFieldSchema),
});
