export interface emailData {
  confirmEmail: string;
  email: string;
  password: string;
}

export interface creditCardData {
  cardNumber: Number;
  expires: Date;
  cvc: Number;
}
export interface addressData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zip: number;
}

export interface actionType<T> {
  type: string;
  payload: T;
}
