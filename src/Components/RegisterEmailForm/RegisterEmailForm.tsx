import "./style.css";

import { Link } from "react-router-dom";
import React from "react";

function RegisterEmailForm() {
  return (
    <section id="Registration_Section">
      <div className="mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
        <div className="w-full px-4 py-12">
          <div className="mb-10 text-center">
            <h1 className="mb-4 font-extrabold">
              Never miss an update from Jungle Scout
            </h1>
            <p></p>
          </div>
          <form action="" className="flex justify-center flex-col">
            <div className="mb-4 flex justify-center">
              <input type="text" name="" id="" className="focus:outline-none text-left pl-1 pr-12 py-2" placeholder="Please Enter Your Email"/>
            </div>
            {/* RADIO-BUTTON */}
            <div className="mb-4 flex flex-col space-y-2">
              <p className="text-center">
                Are you currently selling on Amazon?{" "}
                <span className="text-red-500">*</span>
              </p>
              <div className="flex justify-center space-x-4">
                <span>
                  <input type="radio" />
                  <label htmlFor="">Yes</label>
                </span>
                <span>
                  <input type="radio" />
                  <label htmlFor="">No</label>
                </span>
              </div>
            </div>
            {/* CHECKBOX */}
            <div className="flex justify-center space-x-2.5 mb-4">
              <input type="checkbox" />
              <p className="!text-[14px]">
                <span className="text-red-500">*</span>I consent to receiving
                communication from Jungle Scout.
              </p>
            </div>
            {/* BUTTON */}
            <div className="flex justify-center">
              <Link
                to=""
                className="text-white font-extrabold py-4 px-12 flex justify-center items-center bg-gradient-to-r from-orange-500 to-orange-300 focus:outline focus:outline-2 outline-orange-400 hover:shadow-[0_0_5px_3px-rgba(0,0,0,0.1)]"
              >
                Join the list
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterEmailForm;
