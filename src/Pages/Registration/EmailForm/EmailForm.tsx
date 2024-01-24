import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ProgressSteps from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailDispatch } from "../../../store/signup/actions";
import { emailData } from "../../../store/signup/types";
import PasswordStrengthBar from "react-password-strength-bar";

const EmailForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { confirmEmail, email, password }: emailData = useSelector(
    (store: any) => store.emailDetail
  );
  useEffect(() => {}, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<emailData>();

  const onSubmit: SubmitHandler<emailData> = (data) => {
    navigate("/registration/accountDetails");
    dispatch(emailDispatch(data));
    console.log(data);
  };
  let [data, setData] = useState<emailData>({
    email: "@gmail.com",
    confirmEmail: "",
    password: "",
  });

  console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      {/* Email Address */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            value: data.email,
            pattern: /^\S+@\S+$/i,
          })}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          className="mt-1 p-2 border w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Confirm Email Address */}
      <div className="mb-4">
        <label
          htmlFor="confirmEmail"
          className="block text-sm font-medium text-gray-600"
        >
          Confirm Email Address
        </label>
        <input
          type="email"
          id="confirmEmail"
          {...register("confirmEmail", {
            required: "Confirm Email is required",
            validate: (value) =>
              value === watch("email") || "Emails do not match",
          })}
          onChange={(e) => {
            setData({ ...data, confirmEmail: e.target.value });
          }}
          className="mt-1 p-2 border w-full"
        />
        {errors.confirmEmail && (
          <p className="text-red-500 text-sm">{errors.confirmEmail.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            value: data.password,
          })}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          className="mt-1 p-2 border w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <PasswordStrengthBar
        password={data.password}
        scoreWords={["", "", "", "", ""]}
      />

      {/* Submit Button */}
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-2 px-8 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
