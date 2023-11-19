import React from "react";
import { Link } from "react-router-dom";

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
      subcriptionDurationText: "3-month Suite plan help ",
      discount: "SAVE $15",
    },
    {
      name: "Entrepreneur Suite",
      featureTxt:
        "Ideal for sellers who want to learn the details about selling on Amazon and then launch their product.",
      price: 349,
      subcriptionDurationText: "6-month Suite plan help",
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
      img: "",
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
    },
  ];
  return (
    <div>
      <section className="border border-zinc-200 xl:max-w-[1200px] lg:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full rounded mx-auto px-4.5 max-md:flex-col">
        <div className="w-full lg:p-10 md:p-8 p-4">
          {/* Image-Div */}
          <div className="pr-12 hidden min-[1180px]:block"></div>
          {/* Main-Div */}
          <div className="lg:pr-12 md:pr-6 w-[calc(357px+1.5rem)]">
            <h2 className="mb-2"></h2>
            <p className="mb-4"></p>
            <div className="mb-4">
              <div className="p-4 border-2 border-orange-500">
                <h6 className="pb-4 text-[12px]"></h6>
                <ul>
                  <li className="mb-2"></li>
                </ul>
              </div>
              <div></div>
            </div>
            <Link to="/"></Link>
          </div>
          {/* checkout */}
          <div className="lg:pr-12 md:pr-6 w-auto flex items-center"></div>
        </div>
      </section>
    </div>
  );
}

export default SellerPackages;
