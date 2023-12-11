import React from "react";

function Registration() {
  return (
    <main className="!font-sans">
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
      <section className="bg-neutral-100">
        <div>
          {/* PLAN_SUMMARY */}
          <div className="w-full rounded border space-y-3 border-gray-300 p-4 bg-white">
            <p className="font-semibold text-[15px] text-black">
              Your Plan Summary
            </p>
            <p className="text-[13px] font-medium">
              Suite <span className="text-orange-500">$589.00/yr</span>
            </p>
            <ul>
              {/* yahan map chla ga */}
              <li>
                <span className="pr-4">
                  <i className=""></i>
                </span>
                <p></p>
              </li>
            </ul>
          </div>
          {/* REGISTRATION_FORM */}
          <div className="shadow-[0_0_0_0.1-rgba(0,4px,10px,0px)] bg-white w-full rounded border border-gray-300 p-4"></div>
        </div>
      </section>
    </main>
  );
}

export default Registration;
