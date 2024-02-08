import { addressData, creditCardData, emailData } from "./types";
import { ActionTypes } from "./enums";

interface ActionReturn<T> {
  type: string;
  payload: T;
}

// const emailDispatch = (payload: emailData): ActionReturn<emailData> => {
//   return {
//     type: ActionTypes.ADD_EMAIL,
//     payload,
//   };
// };

const addressDispatch = (payload: addressData): ActionReturn<addressData> => {
  return {
    type: ActionTypes.ADD_ADDRESS,
    payload,
  };
};
const creditCardDispatch = (
  payload: creditCardData
): ActionReturn<creditCardData> => {
  return {
    type: ActionTypes.ADD_CREDIT_CARD_DETAIL,
    payload,
  };
};

export {  creditCardDispatch, addressDispatch };
