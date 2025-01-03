import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addressData,
  creditCardData,
  emailData,
  Signup_Form_2,
} from "../../../store/signup/types";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { ActionTypes } from "../../../store/signup/enums";
import { useMutation, gql } from "@apollo/client";
import { WebRoutes } from "../../../entities/Routes";
type FormData = addressData & creditCardData;
const SIGNUP_MUTATION = gql`
  mutation (
    $email: String
    $password: String
    $cvc: Int!
    $expires: Date
    $firstName: String!
    $lastName: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: Int
    $country: String!
  ) {
    signup(
      data: {
        emailData: { email: $email, password: $password }
        creditCardData: { cvc: $cvc, expires: $expires }
        addressData: {
          firstName: $firstName
          lastName: $lastName
          address: $address
          city: $city
          state: $state
          zip: $zip
          country: $country
        }
      }
    ) {
      token
      user {
        emailData {
          email
        }
        creditCardData {
          cvc
        }
        addressData {
          lastName
          address
          city
          state
          zip
          country
        }
      }
    }
  }
`;

const EmailForm: React.FC = () => {
  const emailData: emailData = useSelector((store: any) => store.emailForm);
  const { addressData, creditCardData }: Signup_Form_2 = useSelector(
    (store: any) => store.form2
  );
  let [formData, setFormData] = useState<Signup_Form_2>({
    addressData,
    creditCardData,
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  let [country, setCountry] = useState<string>("");
  const [signup] = useMutation(SIGNUP_MUTATION);

  let [countryErr, setCountryErr] = useState(false);
  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (country.length === 0) {
      setCountryErr(true);
    } else {
    }
    console.log("On submit chla", formData);
    try {
      const result = await signup({
        variables: {
          email: emailData.email,
          password: emailData.password,
          // cardNumber: "12345673456",
          expires: formData.creditCardData.expires, // Assuming "expires" is a date in YYYY-MM-DD format
          cvc: formData.creditCardData.cvc,
          firstName: formData.addressData.firstName,
          lastName: formData.addressData.lastName,
          address: formData.addressData.address,
          city: formData.addressData.city,
          state: formData.addressData.state,
          zip: formData.addressData.zip,
          country: formData.addressData.country,
        },
      });

      console.log("Signup Result", result);
      console.log("token", result.data.signup.token);
      localStorage.setItem("token", result.data.signup.token);
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      console.log("================================================");

      console.error("Signup Error aya:", err instanceof Error);
    }
    dispatch({
      type: ActionTypes.ADD_FORM2_DATA,
      payload: formData,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-2 ">
      {/* Credit Card Info */}
      <div className="grid grid-cols-subgrid grid-cols-2 col-span-2 px-3 gap-x-3">
        <h2>Credit Card Information</h2>
        {/* Card Number */}
        <div className="mb-4 col-span-2">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Card Number
          </label>
          <input
            type="number"
            id="cardNumber"
            {...register("cardNumber", {
              required: "Card Number is required",
              value: formData.creditCardData.cardNumber,
              pattern: /^\d{16}$/i, // Add your validation pattern
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: {
                  ...prevData.addressData,
                  cardNumber: e.target.value,
                },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
        </div>

        {/* Card Expiry Detail */}
        <div className="mb-4 col-span-1">
          <label
            htmlFor="expires"
            className="block text-sm font-medium text-gray-600"
          >
            Expires
          </label>
          <input
            type="date"
            id="expires"
            {...register("expires", {
              valueAsDate: true,
              required: true,
              value: formData.creditCardData.expires,
            })}
            className="mt-1 p-2 border w-full"
          />
          {errors.expires && (
            <p className="text-red-500 text-sm">Expire Date is required</p>
          )}
        </div>

        {/* CVC */}
        <div className="mb-4 col-span-1">
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-gray-600"
          >
            CVC
          </label>
          <input
            type="number"
            placeholder="123"
            id="cvc"
            {...register("cvc", {
              required: "CVC is required",
              value: formData.creditCardData.cvc,
              pattern: /^\d{3}$/i, // Add your validation pattern
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: {
                  ...prevData.addressData,
                  cvc: e.target.value,
                },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.cvc && (
            <p className="text-red-500 text-sm">{errors.cvc.message}</p>
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-subgrid grid-cols-2 col-span-2 gap-x-3 mb-4">
        <h2 className="col-span-2 font-medium">Billing Address</h2>
        {/* First Name */}
        <div className="col-span-1">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "First Name is required",
              value: formData.addressData.firstName,
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: {
                  ...prevData.addressData,
                  firstName: e.target.value,
                },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="col-span-1">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "Last Name is required",
              value: formData.addressData.lastName,
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: {
                  ...prevData.addressData,
                  lastName: e.target.value,
                },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address", {
              required: "Address is required",
              value: formData.addressData.address,
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: {
                  ...prevData.addressData,
                  address: e.target.value,
                },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* City */}
        <div className="col-span-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city", {
              required: "City is required",
              value: formData.addressData.city,
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: { ...prevData.addressData, city: e.target.value },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* Zip */}
        <div className="col-span-1">
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-600"
          >
            Zip
          </label>
          <input
            type="number"
            id="zip"
            {...register("zip", {
              required: "Zip is required",
              value: formData.addressData.zip,
            })}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                addressData: {
                  ...prevData.addressData,
                  zip: Number(e.target.value),
                },
              }))
            }
            className="mt-1 p-2 border w-full"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip.message}</p>
          )}
        </div>
        <CountryDropdown
          classes="h-9 w-full my-3 !focus:outline-none border border-gray-200"
          value={formData.addressData.country}
          onChange={(val) => {
            setFormData((prevData) => ({
              ...prevData,
              addressData: {
                ...prevData.addressData,
                country: val,
              },
            }));
            setCountry(val);
          }}
        />
        {countryErr && (
          <p className="text-red-500 text-sm">Country is required.</p>
        )}

        {/* State */}
        <RegionDropdown
          classes="h-9 w-full my-3 !focus:outline-none  border border-gray-200"
          country={formData.addressData.country}
          value={formData.addressData.state}
          onChange={(val) => {
            setFormData((prevData) => ({
              ...prevData,
              addressData: {
                ...prevData.addressData,
                state: val,
              },
            }));
            setCountry(val);
          }}
        />
      </div>

      <div className="grid grid-cols-subgrid grid-cols-2 col-span-2 gap-x-3">
        {/* Go Back*/}
        <Link
          to={WebRoutes.REGISTRATION_EMAIL}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Go Back
        </Link>
        {/* Create Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Your Account
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
