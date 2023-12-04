import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

function SellerPackages() {
  interface sellerPakage {
    img: string;
    name: string;
    featureTxt: string;
    exclusiveEducationalFeatures: string[];
    historicalDataFeatures?: string[];
    subcriptionDurationImg: string;
    discount: string;
    subcriptionDurationText: string;
    price: number;
    backgroundBlack?: Boolean;
  }
  const sellerPakages: sellerPakage[] = [
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/12/start-up-package-graphic@2x.png",
      name: "Start-up Suite",
      featureTxt:
        "Ideal for sellers who want to start selling on Amazon as soon as possible and learn as they sell.",
      exclusiveEducationalFeatures: [
        "Academy seller training courses",
        "Weekly live Q&A’s",
        "Priority onboarding",
        "Get started checklist",
      ],
      historicalDataFeatures: [
        "90 days of historical Product Tracking data",
        "1 year of historical Keyword Search data",
      ],
      price: 189,
      subcriptionDurationImg:
        "https://www.junglescout.com/wp-content/uploads/2020/11/start-up-suite-icon@2x.png",
      subcriptionDurationText: "3-month Suite plan",
      discount: "SAVE $15",
    },
    {
      name: "Entrepreneur Suite",
      featureTxt:
        "Ideal for sellers who want to learn the details about selling on Amazon and then launch their product.",
      price: 349,
      subcriptionDurationText: "6-month Suite plan",
      subcriptionDurationImg:
        "https://www.junglescout.com/wp-content/uploads/2020/11/entrepreneur-suite-icon@2x-1.png",
      exclusiveEducationalFeatures: [
        "Academy seller training courses",
        "Weekly live Q&A’s",
        "Priority onboarding",
        "Get started checklist",
      ],
      historicalDataFeatures: [
        "90 days of historical Product Tracking data",
        "1 year of historical Keyword Search data",
      ],
      img: "https://www.junglescout.com/wp-content/uploads/2020/12/partner-suite-package-graphic@2x.png",
      discount: "SAVE $65",
    },
    {
      name: "Freedom Builder Bootcamp",
      featureTxt:
        "Ideal for sellers who want to master the FBA process and build a business to achieve financial freedom.",
      price: 999,
      subcriptionDurationImg:
        "https://www.junglescout.com/wp-content/uploads/2020/11/fbb-icon@2x-1.png",
      subcriptionDurationText: "12-month Professional plan",
      exclusiveEducationalFeatures: [
        "Live coaching in Freedom Builder Bootcamp course sessions",
        "1 year subscription to Jungle Scout Professional",
        "Bonus content, resources & support",
        "The course updates as selling on Amazon evolves",
      ],
      discount: "SAVE $1,500+",
      img: "https://www.junglescout.com/wp-content/uploads/2020/12/fbb-greg-package-graphic@2x.png",
      backgroundBlack: true,
    },
  ];
  return (
    <div>
      {sellerPakages.map((pkg, index) => {
        return (
          <section
            key={index}
            className={`border-2 mb-12 border-zinc-200 xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full rounded mx-auto max-md:flex-col ${
              pkg.backgroundBlack ? "bg-black !text-white" : ""
            }`}
          >
            <div className="md:hidden px-4.5">
              <figure className="w-full mt-1.5 mb-1.5 flex justify-center">
                <img
                  src={pkg.subcriptionDurationImg}
                  alt=""
                  width={40}
                  height={40}
                />
              </figure>
              <h2 className="mb-2 text-center font-extrabold text-[28px]">
                {pkg.name}
              </h2>
              <p className="mb-4 text-center">{pkg.featureTxt}</p>
            </div>
            <div className="w-full justify-stretch flex-col-reverse md:flex-row flex lg:p-10 md:p-8 p-4">
              {/* Image-Div */}
              <div className="pr-12 hidden w-1/4 xl:block">
                {/* by using 3 flex it comes to normal */}
                <img src={pkg.img} alt="" width={240} />
              </div>
              {/* Main-Div */}
              <div className="lg:pr-12 md:pr-6 flex flex-col xl:w-1/2 lg:w-3/5 md:w-8/12 w-full">
                <h2 className="mb-2 font-extrabold text-[28px] hidden md:block">
                  {pkg.name}
                </h2>
                <p className="mb-4 hidden md:block">{pkg.featureTxt}</p>
                <div className="mb-4 flex md:flex-row">
                  {/*  */}
                  <div
                    className={`p-4 border-2 w-full rounded-sm  ${
                      pkg.historicalDataFeatures ? "md:w-1/2" : ""
                    } ${
                      pkg.backgroundBlack
                        ? "border-amber-100 "
                        : "border-orange-500"
                    }`}
                  >
                    <h6 className="pb-4 text-[12px] font-extrabold">
                      Exclusive Educational Features:
                    </h6>
                    <ul className="max-lg:text-[12px] max-md:text-[16px]">
                      {pkg.exclusiveEducationalFeatures.map(
                        (feature, index) => {
                          return (
                            <div className="flex gap-x-5" key={index}>
                              <span>
                                <CheckIcon />
                              </span>
                              <li className="mb-2 mt-[1px]">{feature}</li>
                            </div>
                          );
                        }
                      )}
                    </ul>
                  </div>
                  {/*  */}
                  <div
                    className={`hidden leading-6 w-1/2  flex-col p-4 items-center justify-around ${
                      pkg.historicalDataFeatures ? "md:flex" : ""
                    }`}
                  >
                    <div className="w-full">
                      <h6 className="pb-4 text-[12px] whitespace-nowrap font-extrabold">
                        Historical data{" "}
                        <span className="text-orange-500">EXCLUSIVE!</span>
                      </h6>
                      <ul className="max-lg:text-[12px]">
                        {pkg.historicalDataFeatures?.map((feature) => {
                          return (
                            <div className="flex gap-x-5" key={index}>
                              <span>
                                <CheckIcon />
                              </span>
                              <li className="mb-2 mt-[1px]">{feature}</li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <Link
                  to="/"
                  className={`max-md:text-[12px] max-md:text-center underline leading-6 cursor-pointer ${
                    pkg.backgroundBlack
                      ? "text-[CCB79F] hover:text-amber-500"
                      : "text-blue-700"
                  }`}
                >
                  See everything included in {pkg.name}
                </Link>
              </div>

              {/* checkout */}
              <div
                className="border-neutral-100 md:border-l-2 max-md:mb-12
                  md:pl-6 xl:w-1/4 lg:w-2/5 md:w-2/6 w-full gap-y-1 flex flex-col items-center lg:pl-12"
              >
                <h6
                  className={`text-center w-full mb-5 text-[12px] font-bold ${
                    pkg.backgroundBlack ? "text-[#ffe5c7]" : "text-green-600"
                  }`}
                >
                  {pkg.discount}
                </h6>
                <div className="flex">
                  <span className="pr-1 pt-1 text-[24px] font-extrabold">
                    $
                  </span>
                  <h1 className="text-[64px] leading-4 font-extrabold">
                    {pkg.price}
                  </h1>
                  <p className="text-[12px] pl-1 pb-1 ">USD</p>
                </div>
                <p className="text-center mb-1">
                  {pkg.subcriptionDurationText}
                </p>
                <p className="font-normal text-[12px] text-center w-full mb-4">
                  1 user seat
                </p>
                <Link
                  to=""
                  className={` rounded block py-4 px-7.5 font-extrabold w-full text-center leading-4 ${
                    pkg.backgroundBlack
                      ? "bg-[#ffe5c7] hover:bg-[#CCB79F] text-black"
                      : "bg-blue-800 text-white"
                  }`}
                >
                  Buy now
                </Link>
              </div>
            </div>
            {/* </div> */}
          </section>
        );
      })}
    </div>
  );
}

export default SellerPackages;
