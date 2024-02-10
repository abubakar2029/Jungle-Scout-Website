import { combineReducers } from "redux";
import { ActionTypes } from "./enums";
import {
  Signup_Form_2,
  actionType,
  emailData,
  addressData,
  creditCardData,
} from "./types";

const signupInitial: Signup_Form_2 = {
  addressData: {
    address: "lorem ipsum dolor sit amet",
    city: "Lorem Ipsum",
    country: "United States",
    firstName: "John",
    lastName: "Smith",
    state: "New York",
    zip: 123,
  },
  creditCardData: {
    cardNumber: 123,
    cvc: 123,
    expires: new Date(),
  },
};

const form2 = (state = signupInitial, action: actionType<Signup_Form_2>) => {
  state = { ...state };
  switch (action.type) {
    case ActionTypes.ADD_FORM2_DATA:
      state = action.payload;
      console.log("Form 2 data updated successfully", state);
      return state;
    default:
      return state;
  }
};

const emailState: emailData = {
  email: "gulabkhan@gmail.com",
  confirmEmail: "gulabkhan@gmail.com",
  password: "gulabkhan@gmail.com",
};
const emailForm = (state = emailState, action: actionType<emailData>) => {
  state = { ...state };
  switch (action.type) {
    case ActionTypes.ADD_EMAIL_FORM:
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
  emailForm,
  creditCardDetail,
  adressDetail,
  form2,
});

export { rootReducer };
