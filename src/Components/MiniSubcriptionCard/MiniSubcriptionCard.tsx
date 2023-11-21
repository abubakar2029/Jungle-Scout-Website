import React from "react";
import { Link } from "react-router-dom";
import { subcriptionPlans } from "../SubscriptionOptionsPanel/SubscriptionOptionsPanel";
function MiniSubcriptionCard(props: any) {
  return (
    <div
      className={`max-md:hidden flex justify-between w-full max-w-[995px] mx-auto`}
    >
      <div className="w-1/4 lg:px-4.5">
        <p className="text-[14px] max-[800px]:pr-4 max-[800px]:bg-red-400 min-[800px]:px-4.5 text-gray-500 text-left">
          *Limits can be raised for customers on Enterprise accounts. Please
          contact us at <br />
          <span className="text-black underline">contact@junglescout.com.</span>
        </p>
      </div>
      {/* right-div */}
      <div className="w-3/4 flex justify-around">
        {subcriptionPlans.map((plan, index) => {
          return (
            <div
              key={index}
              className={`rounded border py-2 px-6 lg:px-10 ${
                plan.popular ? "border-orange-500" : "border-neutral-300 "
              }`}
            >
              {/* name */}
              <h1 className="block text-center text-[16px] font-extrabold">
                {plan.subcriptionType}
              </h1>
              {/* monthly-yearly-price */}
              <div>
                <div className="flex text-center items-center justify-center font-extrabold">
                  <span className="pt-2 pr-1 text-[16px]">{plan.currency}</span>
                  <span className="text-32">{plan.monthlyPrice}</span>
                  <span className="pl-0.5 pt-3 text-[16px]">/mo</span>
                </div>
                <p className=" -mt-[5px] text-[12px] font-normal leading-6">
                  Billed at {plan.currency}
                  {plan.yearlyPrice}/yr
                </p>
              </div>
              {/* </div> */}
              {/* buy-link */}
              <div className="flex justify-center">
                <Link
                  to="/"
                  className={`mb-2 mt-1.5 border py-1.5 font-extrabold px-4 transition-colors duration-300 text-[12px] ${
                    plan.popular
                      ? "hover:bg-orange-200 hover:shadow-xl"
                      : "bg-transparent hover:bg-stone-300"
                  } rounded text-center ${
                    plan.popular
                      ? "text-orange-500 border-orange-500"
                      : "text-black border-black"
                  }`}
                >
                  Buy now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiniSubcriptionCard;
