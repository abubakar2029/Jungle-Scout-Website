import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ProgressSteps from "../ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  confirmEmail: string;
  password: string;
}

const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

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
            pattern: /^\S+@\S+$/i,
          })}
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
          {...register("password", { required: "Password is required" })}
          className="mt-1 p-2 border w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      {/* <ProgressSteps
        Data={{ background: "", height: 3, icons: false, percent: 0 }}
      /> */}

      {/* Submit Button */}
      <Link
        to="/registration/accountDetails"
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Next
      </Link>
    </form>
  );
};

export default EmailForm;
