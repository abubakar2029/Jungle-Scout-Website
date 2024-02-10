import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { WebRoutes } from "../../entities/Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormData {
  email: string;
  password: string;
}

const LOGIN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      status
      user {
        addressData {
          firstName
        }
        emailData {
          email
        }
      }
    }
  }
`;
function Login() {
  let [data, setData] = useState<FormData>({
    email: "gulabkhan@gmail.com",
    password: "gulabkhan@gmail.com",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [login] = useMutation(LOGIN_MUTATION);

  const userLogin = async () => {
    console.log("on submit chla");

    const response = await login({
      variables: { email: data.email, password: data.password },
    });
    if (response.data.login.status === 200) {
      toast("Login successful");
      console.log("Login response", response.data.login);
    } else {
      console.log("Login response", response.data.login);
      toast("Login failed");
    }
  };
  return (
    <div className="bg-zinc-50 py-3 h-screen overflow-y-scroll">
      <div className="mb-8 mx-auto w-full max-w-xs">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 887.81 130.08">
          <path d="M0,91.43,11.81,79.18c6,7.73,12,12.11,20.56,12.11,9.63,0,16.19-6.42,16.19-20.13V4.38H67.08V71.75c0,12.1-3.64,21.14-9.62,27.12s-14.59,9-24.79,9C16.92,107.91,6.71,100.62,0,91.43Z"></path>
          <path d="M86.81,78.46v-49h17.65V73.21c0,12,6,18.66,16.48,18.66,10.2,0,17.35-7,17.35-19V29.46h17.79v77H138.29v-12c-5,7.29-12.1,13.56-24.06,13.56C96.87,108.06,86.81,96.39,86.81,78.46Z"></path>
          <path d="M176.1,29.46h17.65V41.27c5-7.15,12.1-13.42,24.06-13.42,17.35,0,27.42,11.67,27.42,29.46v49.14H227.58V62.71c0-12-6-18.82-16.48-18.82-10.21,0-17.35,7.15-17.35,19.11v43.45H176.1Z"></path>
          <path d="M264.37,120.89l6.57-13.27c8.31,5.11,16.91,8.17,27.41,8.17,15.75,0,24.35-8.17,24.35-23.63v-6c-6.41,8.32-14.43,14.15-27.12,14.15-18.08,0-35-13.42-35-36V64c0-22.75,17.06-36.17,35-36.17,13,0,21,6,27,13.13V29.46H340.2V90.71c0,13-3.35,22.6-9.77,29-7,7-17.79,10.35-31.64,10.35A66.35,66.35,0,0,1,264.37,120.89Zm58.48-56.73v-.29c0-12.54-10.35-21.14-22.6-21.14s-21.88,8.46-21.88,21.14v.29c0,12.55,9.77,21.15,21.88,21.15S322.85,76.71,322.85,64.16Z"></path>
          <path d="M361.39,0H379V106.45H361.39Z"></path>
          <path d="M396.85,68.25V68c0-22,15.6-40.11,37.62-40.11,24.5,0,36.9,19.25,36.9,41.42,0,1.6-.15,3.21-.29,5H414.5c1.89,12.54,10.79,19.54,22.16,19.54,8.61,0,14.73-3.21,20.86-9.19l10.35,9.19c-7.29,8.75-17.35,14.43-31.5,14.43C414.06,108.2,396.85,92,396.85,68.25Zm57-5.69C452.7,51.19,446,42.29,434.33,42.29c-10.79,0-18.38,8.31-20,20.27Z"></path>
          <path
            fill="#f57704"
            d="M496.35,91.58l10.79-12.83C516.91,87.21,526.83,92,539.37,92c11.08,0,18.08-5.25,18.08-12.84v-.29c0-7.29-4.08-11.23-23-15.6-21.73-5.25-34-11.67-34-30.48v-.29c0-17.5,14.59-29.6,34.86-29.6,14.87,0,26.68,4.52,37,12.83L562.7,29.31c-9.19-6.85-18.37-10.5-27.71-10.5-10.5,0-16.62,5.4-16.62,12.11v.29c0,7.87,4.67,11.37,24.35,16,21.59,5.25,32.67,13,32.67,29.89v.29c0,19.11-15,30.48-36.46,30.48A62.87,62.87,0,0,1,496.35,91.58Z"
          ></path>
          <path
            fill="#f57704"
            d="M584.27,68.39V68.1c0-21.87,16.91-40.25,40.1-40.25,14.44,0,23.48,5.4,30.77,13.27L644.06,52.94c-5.4-5.69-11.09-9.63-19.84-9.63-12.83,0-22.31,11.08-22.31,24.5v.29c0,13.71,9.48,24.65,23,24.65,8.31,0,14.44-3.79,20-9.48l10.65,10.5c-7.59,8.46-16.48,14.43-31.5,14.43C601.18,108.2,584.27,90.27,584.27,68.39Z"
          ></path>
          <path
            fill="#f57704"
            d="M756.52,78.46v-49h17.64V73.21c0,12,6,18.66,16.48,18.66,10.21,0,17.35-7,17.35-19V29.46h17.79v77H808v-12c-5,7.29-12.1,13.56-24.06,13.56C766.58,108.06,756.52,96.39,756.52,78.46Z"
          ></path>
          <path
            fill="#f57704"
            d="M849.45,85.16V44.62h-9.77V29.46h9.77V8.31H867.1V29.46h20.71V44.62H867.1V82.39c0,6.86,3.5,9.63,9.48,9.63a23.72,23.72,0,0,0,10.93-2.63v14.44a30.46,30.46,0,0,1-15.89,3.94C858.64,107.77,849.45,102.08,849.45,85.16Z"
          ></path>
          <path
            fill="#f57704"
            d="M662.35,68.39V68.1c0-22,17.5-40.25,41.12-40.25s41,17.94,41,40v.29c0,21.88-17.5,40.1-41.27,40.1C679.7,108.2,662.35,90.27,662.35,68.39Zm64.46,0V68.1c0-13.56-9.77-24.79-23.63-24.79C689,43.31,680,54.39,680,67.81v.29c0,13.42,9.78,24.65,23.48,24.65C717.76,92.75,726.81,81.66,726.81,68.39Z"
          ></path>
          <path
            fill="#f57704"
            d="M703.4,49.47c6.79,1.74,12.26,9.71,12.26,18.66,0,8.08-4.39,15.58-10.07,18.45a18.68,18.68,0,0,0-2.19-37.11Z"
          ></path>
        </svg>
      </div>
      {/* LOGIN_FORM */}
      <section className="flex flex-col border border-gray-200 w-full max-w-lg pt-11 px-14 bg-white rounded mx-auto">
        <form
          action=""
          method="post"
          onSubmit={handleSubmit(userLogin)}
          className="h-full min-h-[401px]"
        >
          <h1 className="mt-6 mb-3 text-[28px] font-semibold">Log in</h1>
          <label htmlFor="email" className="font-medium pt-4 text-14">
            Email
          </label>
          <input
            type="text"
            {...register("email", {
              value: data.email,
            })}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mt-1 p-2 border w-full focus:outline focus:outline-1 focus:outline-orange-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <br />
          <label htmlFor="password" className="font-medium pt-4 text-14">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              value: data.email,
            })}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="mt-1 p-2 border w-full focus:outline focus:outline-1 focus:outline-orange-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="font-semibold text-white bg-orange-400 opacity-50 rounded min-w-full py-2 px-3 mb-4 mt-10 border-b-4 border-b-orange-500 outline-none"
          >
            Log in
          </button>
        </form>
        <div className="border-t border-gray-200 text-14 font-semibold text-center -mx-14 py-6">
          Dont't have an account?
          <Link
            to={WebRoutes.PRICING}
            className="text-orange-500 cursor-pointer pl-2"
          >
            Sign Up
          </Link>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Login;
