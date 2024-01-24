import { combineReducers } from "redux";
import { ActionTypes } from "./enums";
import { actionType, emailData, addressData, creditCardData } from "./types";

const emailState: emailData = {
  email: "",
  confirmEmail: "",
  password: "",
};
const emailDetail = (state = emailState, action: actionType<emailData>) => {
  state = { ...state };
  switch (action.type) {
    case ActionTypes.ADD_EMAIL:
      // console.log("Ya email data payload ma aya", action.payload);
      state = action.payload;
      return state;

    default:
      return state;
  }
};

const creditCardState: creditCardData = {
  expires: new Date(),
  cardNumber: 0,
  cvc: 0,
};
const creditCardDetail = (
  state = creditCardState,
  action: actionType<creditCardData>
) => {
  switch (action.type) {
    case ActionTypes.ADD_CREDIT_CARD_DETAIL:
      // console.log("Ya card data payload ma aya", action.payload);

      return state;

    default:
      return state;
  }
};

const addressState: addressData = {
  address: "",
  city: "",
  country: "",
  firstName: "",
  lastName: "",
  state: "",
  zip: 0,
};
const adressDetail = (
  state = addressState,
  action: actionType<addressData>
) => {
  switch (action.type) {
    case ActionTypes.ADD_ADDRESS:
      console.log("Ya address data payload ma aya", action.payload);

      return state;

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  emailDetail,
  creditCardDetail,
  adressDetail,
});

export { rootReducer };
