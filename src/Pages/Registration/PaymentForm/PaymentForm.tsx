import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addressData,
  creditCardData,
  emailData,
} from "../../../store/signup/types";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import {
  addressDispatch,
  creditCardDispatch,
} from "../../../store/signup/actions";
import { useMutation, gql } from "@apollo/client";
import { Routes } from "../../../entities/Routes";
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
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  let [country, setCountry] = useState<string>("");
  const [signup] = useMutation(SIGNUP_MUTATION);

  const { email, password }: emailData = useSelector(
    (store: any) => store.emailForm
  );

  let [countryErr, setCountryErr] = useState(false);
  let [state, setState] = useState("");
  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (country.length === 0) {
      setCountryErr(true);
    } else {
    }
    console.log("On submit chla", data);
    const { address, city, firstName, lastName, state, zip }: addressData =
      data;

    const { cardNumber, cvc, expires }: creditCardData = data;
    try {
      // const { data } = await executeMutation({
      //   variables: {
      //     msg: "test",
      //     num: 1,
      //   },
      // });
      // console.log("test Muatation", data);

      const result = await signup({
        variables: {
          email: "dummy@example.com",
          password: "dummyPassword",
          // cardNumber: "12345673456",
          expires: "2023-12-31", // Assuming "expires" is a date in YYYY-MM-DD format
          cvc: 123,
          firstName: "John",
          lastName: "Doe",
          address: "123 Main St",
          city: "Cityville",
          state: "Stateville",
          zip: 54321,
          country: "Dummyland",
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
    dispatch(
      addressDispatch({
        address,
        city,
        country,
        firstName,
        lastName,
        state,
        zip,
      })
    );
    dispatch(
      creditCardDispatch({
        cardNumber,
        cvc,
        expires,
      })
    );
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
              value: 5545454545454544,
              pattern: /^\d{16}$/i, // Add your validation pattern
            })}
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
              value: new Date(),
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
              value: 123,
              pattern: /^\d{3}$/i, // Add your validation pattern
            })}
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
              value: "Abu",
            })}
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
              value: "Bakar",
            })}
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
              value: "Taj Colony",
            })}
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
              value: "FSD",
            })}
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
              value: 37000,
            })}
            className="mt-1 p-2 border w-full"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip.message}</p>
          )}
        </div>

        {/* Country */}
        {/* <div className="col-span-1">
          <>
            <label htmlFor="country" className="block mb-2 text-sm font-medium">
              Select your country
            </label>
            <select
            id="country"
            {...register("country", {
              required: "Country is required",
                value: "Pak",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </>

          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div> */}
        <CountryDropdown
          classes="h-9 w-full my-3 !focus:outline-none border border-gray-200"
          value={country}
          onChange={(val) => setCountry(val)}
        />
        {countryErr && (
          <p className="text-red-500 text-sm">Country is required.</p>
        )}

        {/* State */}
        <RegionDropdown
          classes="h-9 w-full my-3 !focus:outline-none  border border-gray-200"
          country={country}
          value={state}
          onChange={(val) => setState(val)}
        />
      </div>

      <div className="grid grid-cols-subgrid grid-cols-2 col-span-2 gap-x-3">
        {/* Go Back*/}
        <Link
          to={Routes.REGISTRATION_EMAIL}
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
