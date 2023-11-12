import React from "react";
import RegionSelectCard from "../../Components/RegionSelectCard/RegionSelectCard";

function Signup() {
  // let temp: any = [1, 2, 3, 3, 4, 4, 4, 4];
  let tempRegionData = [
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/united-states-of-america.svg",
      regionInfo: "$ USD [English]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/china.svg",
      regionInfo: "$ USD [中文]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/spain.svg",
      regionInfo: "€ [Español]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/germany.svg",
      regionInfo: "€ [Deutsche]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/india.svg",
      regionInfo: "₹ [English]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/italy.svg",
      regionInfo: "€ [Italiano]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/germany.svg",
      regionInfo: "€ [Deutsche]",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/france.svg",
      regionInfo: "€ [Français]",
    },
  ];

  const lgFont = {
    fontSize: "24px",
  };
  return (
    <div className="">
      <section className="sm:mx-auto flex flex-wrap justify-center max-lg:flex-col px-4 border font-mont font-light">
        {/* Left Container */}
        <div className="w-2/6 max-lg:w-full">
          <div className="mt-6 mb-4 pt-6">
            <img
              src="https://www.junglescout.com/wp-content/uploads/2021/05/JS-logo-icon.svg"
              alt="JS"
            />
          </div>
          <div className="sm:pr-12 mt-3 mb-5 not-italic" style={lgFont}>
            To create your <strong className="font-bold">Jungle Scout</strong> account, choose the
            option that best suits your location.
          </div>
          {/* Div to add space */}
          <div className="h-31 hidden lg:block"></div>
          <div className="text-base">
            Have a Jungle Scout account?{" "}
            <span className="text-blue-600 cursor-pointer">Login</span>
          </div>
        </div>
        {/* Right Container */}
        <div className="w-7/12 max-lg:w-full">
          <p className="mt-6 mb-4 pt-6 text-center font-bold">
            Select your region
          </p>
          <div className="flex flex-wrap lg:justify-center mb-14 max-lg:gap-x-8">
            {tempRegionData.map((num: any) => {
              return <RegionSelectCard props={num} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
