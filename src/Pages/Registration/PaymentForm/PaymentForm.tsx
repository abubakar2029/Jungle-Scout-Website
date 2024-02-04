import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addressData, creditCardData } from "../../../store/signup/types";
import {
  addressDispatch,
  creditCardDispatch,
} from "../../../store/signup/actions";
import { useMutation, gql } from "@apollo/client";
import { Routes } from "../../../entities/Routes";
type FormData = addressData & creditCardData;
const TEST_MUTATION = gql`
  mutation TestMutation($msg: String, $num: Int) {
    testMutation(data: { msg: $msg, num: $num })
  }
`;
const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
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
  const [signup] = useMutation(SIGNUP_MUTATION);
  // const [executeMutation] = useMutation(TEST_MUTATION);

  const { email, password } = useSelector((store: any) => store.emailDetail);
  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("On submit chla");
    const {
      address,
      city,
      country,
      firstName,
      lastName,
      state,
      zip,
    }: addressData = data;

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
      localStorage.setItem("token", result.data.signup.token)
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
        <div className="col-span-1">
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
              <option value="AF">Afghanistan</option>
              <option value="AX">Åland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia, Plurinational State of</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela, Bolivarian Republic of</option>
              <option value="VN">Viet Nam</option>
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
        </div>

        {/* State */}
        <div className="col-span-1">
          <>
            <label htmlFor="state" className="block mb-2 text-sm font-medium">
              Select your state
            </label>
            <select
              id="state"
              {...register("state", {
                required: "State is required",
                value: "Punjab",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              {/* Add other states */}
            </select>
          </>

          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>
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
          Create Your Acoount
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
