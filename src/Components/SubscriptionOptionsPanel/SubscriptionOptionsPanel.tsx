import React, { useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
import { Routes } from "../../entities/Routes";

interface pricingPlan {
  subcriptionType: string;
  popular?: string;
  subcriptionMessage: string;
  discountMessage: string;
  currency: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featureHeading: string;
  features: string[];
}
export const subcriptionPlans: pricingPlan[] = [
  {
    subcriptionType: "Basic",
    subcriptionMessage:
      "Validate product ideas as you browse Amazon with our famous browser extension",
    discountMessage: "Pay now and save $240",
    monthlyPrice: 29,
    yearlyPrice: 349,
    featureHeading: "Plan includes:",
    features: [
      "Full access to the browser extension (Chrome + Firefox)",
      "Single user license",
      "Review Automation core tool",
    ],
    currency: "$",
  },
  {
    subcriptionType: "Suite",
    popular: "most popular",
    subcriptionMessage:
      "Everything you need to find new products & expertly manage your Amazon business",
    discountMessage: "Pay now and save $240",
    monthlyPrice: 49,
    yearlyPrice: 589,
    currency: "$",
    featureHeading: "All Basic features plus:",
    features: [
      "Unlimited product and keyword research searches",
      "Review Automation with Advanced features",
      "Advanced seller features",
      "PPC analysis",
      "AI Assist (BETA) automation and business insights",
    ],
  },
  {
    subcriptionType: "Professional",
    subcriptionMessage:
      "More data, more users, more access — ideal for experienced sellers who need more",
    discountMessage: "Pay now and save $549",
    monthlyPrice: 84,
    currency: "$",
    yearlyPrice: 999,
    featureHeading: "All Suite features plus:",
    features: [
      "Track up to 1000 ASINs",
      "6 users included",
      "6 months of historical data in Product Tracker",
      "2 years of historical keyword data",
    ],
  },
];
function SubscriptionOptionsPanel() {
  let [selectedButton, setSelectedButton] = useState("Pay monthly");
  let [discountMsg, setDiscountMsg] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center ">
      {/* top-buttons */}
      <div className="flex mx-auto py-8 w-full justify-center max-sm:-mb-4 mb-16">
        <button
          onClick={() => {
            setSelectedButton("Pay monthly");
            setDiscountMsg(true);
          }}
          className={`ml-36 focus:ring-8 focus:ring-orange-300 focus:ring-offset-0 hover:text-orange-400 hover:border hover:border-orange-500 hover:bg-orange-100  px-4.5 py-2 text-[12px] font-bold  ${
            selectedButton === "Pay monthly"
              ? "text-white bg-orange-500 border  border-orange-400"
              : "bg-neutral-100  text-gray-400 border border-neutral-300"
          }`}
        >
          Pay monthly
        </button>
        <button
          onClick={() => {
            setSelectedButton("Pay yearly");
            setDiscountMsg(false);
          }}
          className={`focus:ring-8 focus:ring-orange-300 focus:ring-offset-0  px-4.5 py-2 text-[12px] font-bold mr-1 hover:border hover:text-orange-400 hover:border-orange-500 hover:bg-orange-100 ${
            selectedButton === "Pay yearly"
              ? "text-white bg-orange-400 border border-orange-400"
              : "bg-neutral-100  text-gray-400 border border-neutral-300"
          }`}
        >
          Pay yearly
        </button>
        <p
          className={`font-bold transition-opacity duration-75 text-blue-700 text-[14px] leading-6 text-left flex items-center ${
            discountMsg ? "opacity-100" : "opacity-0"
          } `}
        >
          <img
            src="https://www.junglescout.com/wp-content/uploads/2020/07/mdi_arrow_forward@2x.png"
            alt=""
            width={12}
            height={8}
            className="m-2"
          />
          SAVE UP TO 55%
        </p>
      </div>
      {/* pricing-cards-section */}
      <section className="relative max-md:!border-none max-lg:mb-6 flex border border-collapse border-neutral-300  w-full min-h-[640px] max-w-[995px] max-md:flex-col max-md:justify-center items-center mx-auto">
        <div className="py-6 absolute top-0 bottom-0 px-4.5 hidden lg:block w-1/4 border-r border-neutral-300   ">
          <p className="text-[24px] ">
            The only platform you need to build and grow a successful business
            on Amazon.
          </p>
        </div>
        <div className="lg:w-1/4"></div>
        {/* pricing-cards */}
        <div
          className="flex max-md:justify-center flex-col md:flex-row max-md:items-center
        lg:w-3/4"
        >
          {subcriptionPlans.map((plan, index) => {
            return (
              <div
                key={index}
                className={`max-lg:mb-6 h-full lg:w-2/6 px-4.5 py-6 max-w-[50%] ${
                  plan.popular
                    ? "border-collapse border-orange-500 border"
                    : "max-md:!border border-neutral-300"
                } 
              `}
              >
                <div className="text-center px-1">
                  <h3 className="font-bold uppercase text-green-500 text-[12px] text-center">
                    {plan.popular}
                  </h3>
                  <h1
                    className={`mb-2 pt-1 font-extrabold text-center text-[calc(1.275rem + .3vw)]  ${
                      plan.popular ? "mt-1" : "mt-6"
                    }`}
                  >
                    <span className="text-[20px]">{plan.subcriptionType}</span>
                  </h1>
                </div>
                {/* 2nd div */}
                <div className="mb-4 px-1 text-center leading-6 text-[12px]">
                  {plan.subcriptionMessage}
                </div>
                {/* 3rd div */}
                <div className="pb-4 font-bold text-[14px] text-center">
                  <h4
                    className={`font-extrabold ${
                      plan.popular ? "text-orange-500" : ""
                    }`}
                  >
                    {plan.discountMessage}
                  </h4>
                  {/* monthly-yearly-price */}
                  <div className="flex text-center justify-center">
                    <div className="pt-2 pr-1 text-[24px]">{plan.currency}</div>
                    <div className="text-[4rem] ">{plan.monthlyPrice}</div>
                    <div className="pl-1 pb-4 text-[24px] self-end">/mo</div>
                  </div>
                  <p className="mb-2 -mt-[5px] font-normal leading-6">
                    Billed at {plan.currency}
                    {plan.yearlyPrice}/yr
                  </p>
                </div>
                {/* 4th div => button */}
                <div className="flex justify-center">
                  <Link
                    // onClick={On_Click}
                    to={Routes.REGISTRATION_EMAIL}
                    className={`sm:min-w-[200px] min-h-[16px] ${
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-400 hover:shadow-xl"
                        : "bg-transparent border border-black hover:bg-stone-300"
                    } py-4 px-7.5 rounded text-center font-extrabold ${
                      plan.popular ? "text-white" : "text-black"
                    }`}
                  >
                    Buy now
                  </Link>
                </div>

                {/* 5th div => features */}
                <div className="pl-4.5">
                  <h2 className="mt-6 mb-2 sm:whitespace-nowrap text-left leading-6 font-bold text-[16px]">
                    {plan.featureHeading}
                  </h2>
                  <ul className="mb-4">
                    {plan.features.map((feature, index) => {
                      return (
                        <li key={index} className="flex text-[12px]">
                          <span>
                            <CheckIcon />
                          </span>
                          <p className="mb-2 pl-4">{feature}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SubscriptionOptionsPanel;
