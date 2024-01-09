import React from "react";
import ProgressSteps from "./ProgressSteps/ProgressSteps";

function Registration() {
  let PlanSummaryFeatures: String[] = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  ];

  return (
    <main className="!font-sans">
      <div className="flex">
        {/* LEFT-STATID-BAR */}
        <div className="max-w-xl py-14 px-6 bg-white">
          {/* TOP_IMAGE */}
          <div className="max-w-xl">
            <img
              src="https://dh2wkbcb9yv3l.cloudfront.net/images/logos/js-logo-text.svg"
              alt=""
              className="!h-10"
            />
          </div>
          <div className="py-6 mt-14 mb-6 border-t border-b border-gray-300">
            <p className="text-slate-600 !font-sans font-medium pb-3 max-w-xs pr-4">
              "The best resource for data-driven product research"
            </p>
            <img
              src="https://dh2wkbcb9yv3l.cloudfront.net/images/forbes-logo-grey.png"
              alt=""
              className="max-h-5"
            />
          </div>
        </div>
        {/* RIGHT-MAIN-SECTION */}
        <section className="bg-neutral-100 p-14">
          <div>
            {/* PLAN_SUMMARY */}
            <div className="w-full rounded border space-y-3 border-gray-300 p-4 bg-white h-40">
              <p className="font-semibold text-[15px] text-black">
                Your Plan Summary
              </p>
              <p className="text-[13px] font-medium">
                Suite <span className="text-orange-500">$589.00/yr</span>
              </p>
              <ul className="list-disc list-inside flex flex-wrap justify-between !text-[12px]">
                {/* yahan map chla ga */}
                {PlanSummaryFeatures.map((feature, index) => (
                  <li key={index} className="">
                    {feature}
                    {/* <p>{feature}</p> */}
                  </li>
                ))}
              </ul>
            </div>
            {/* REGISTRATION_FORM */}
            <div className="shadow-[0_0_0_0.1-rgba(0,4px,10px,0px)] bg-white w-full rounded border border-gray-300 p-4">
              {/* PROGRESS_BAR */}
              <div className="flex justify-center items-center">
              <ProgressSteps/>
                {/* <div className="flex flex-col justify-center max-w-[200px] w-full">
                  <div className="flex justify-center items-center border-orange-400 text-orange-400 border-2 rounded-[50%] w-8 h-8 mx-auto">
                    <p>1</p>
                  </div>
                  <p className="text-[13px] pt-2.5 font-medium text-center">
                    Create Your Account
                  </p>
                </div> */}
                {/* <div className="flex flex-col justify-center max-w-[200px] w-full">
                  <div className="flex justify-center items-center relative w-full">
                    <hr className="absolute !w-[84%] !bg-gray-00 !h-0.5 top-1/2 !right-[58%]" />
                    <div className="flex justify-center items-center border-orange-400 text-orange-400 border-2 rounded-[50%] w-8 h-8">
                      <p>1</p>
                    </div>
                  </div>
                  <p className="text-[13px] pt-2.5 font-medium text-center">
                    Create Your Account
                  </p>
                </div> */}
              </div>
              <form action=""></form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Registration;
