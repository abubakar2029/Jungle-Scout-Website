import "./style.css";

import React from "react";

function BusinessLaunchpad() {
  interface BusinessLaunchpadCard {
    backgroundImage: string;
    backgroundImageMobile: string;
    icon: string;
    title: string;
    text: string;
    heroImg: string;
    listTitle: string;
    listFeatures: string[];
    startupMessage: string;
    referencePerson: string;
    referencePosition: string;
    referenceBlogLink?: string;
  }
  const businessLaunchpadCards: BusinessLaunchpadCard[] = [
    {
      backgroundImage:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-desktop-1.5x.jpg",
      backgroundImageMobile:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-mobile-1.5x.jpg",
      icon: "https://www.junglescout.com/wp-content/uploads/2022/03/Pricing-Icon.svg",
      title: "Start selling",
      text: "Find a winning product and launch your Amazon business.",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-start-business-asset-1x.png",
      listTitle: "New to selling on Amazon? You’re in the right place.",
      listFeatures: [
        "Find and track winning products",
        "Discover high-value keywords",
        "Source suppliers for products",
        "Create and optimize product listings",
      ],
      startupMessage:
        "You need to learn first before you jump into FBA. Jungle Scout offers those tools and education that you need.",
      referencePerson: "Maricia Magaña",
      referencePosition: "Founder and CEO of LITTIL",
      referenceBlogLink:
        "https://www.junglescout.com/blog/amazon-seller-stories-littil/",
    },
    {
      title: "Grow your business",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-start-business-asset-1x.png",
      listTitle: "Sell smarter and uncover opportunities for growth.",
      listFeatures: [
        "Get reviews quickly and easily",
        "Level up your keyword research",
        "Optimize product listings",
        "Manage inventory with ease",
      ],
      referenceBlogLink:
        "https://www.junglescout.com/blog/amazon-seller-stories-click-and-carry/",
      startupMessage:
        "Through Jungle Scout, I went from 355 reviews to 2,116 reviews. That’s pretty incredible.",
      referencePerson: "Kim Meckwood",
      referencePosition: "Inventor of Click & Carry",
      icon: "https://www.junglescout.com/wp-content/uploads/2022/03/existing-seller-icon.svg",
      text: "Take your business to new heights with tools that make it easier to drive sales.",
      backgroundImage:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-tablet-1.5x.jpg",
      backgroundImageMobile:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-mobile-1.5x.jpg",
    },
    {
      backgroundImageMobile:
        "https://www.junglescout.com/wp-content/uploads/2022/08/js_tab-Banner-Background_320px-mobile.jpg",
      backgroundImage:
        "https://www.junglescout.com/wp-content/uploads/2022/08/Banner_Background.jpg",
      text: "Data is at the heart of Jungle Scout. From product research to powerful market intelligence, our tools give you critical insights for ecommerce success.",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2023/05/JSC-thumbnail2.png",
      icon: "https://www.junglescout.com/wp-content/uploads/2022/07/enterprise-icon.svg",
      title: "Accelerate enterprise growth",
      listTitle:
        "Comprehensive Amazon data and powerful advertising tools, in one place.",
      listFeatures: [
        "Identify category trends and discover new keywords to drive conversions",
        "Track market share, consumer demand, and competitor performance",
        "Optimize and automate ad spend to capitalize on market trends and improve sales",
        "Conquest competitors and halt unauthorized third-party resellers",
      ],
      startupMessage:
        "Cobalt provides full visibility of how our business performs on Amazon against our competition, providing the knowledge we need to execute our strategy and meet company KPIs.",
      referencePerson: "Kirk Lutz",
      referencePosition: "Advertising Lead at Code3",
    },
  ];
  return (
    <section>
      <div className="mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full relative">
        {/* TOP_DIV_CONTENT */}
        <div
          className="flex flex-col justify-center items-center pt-36 pb-56 text-center text-white"
          id="Business_Launchpad"
        >
          <h1 className="text-[calc(1.325rem+0.9vw)] font-extrabold mb-4">
            Jungle Scout powers ecommerce
          </h1>
          <p>
            Data is at the heart of Jungle Scout. From product research to
            powerful market intelligence, our tools give you critical insights
            for ecommerce success.
          </p>
        </div>
        {/* CARDS */}
        <section className="-mt-40 flex justify-center">
          {/* yahan map chla ga */}
          {/* CARD */}
          <div className="px-8 pt-10 pb-8 h-full">
            <figure className="mb-6">
              <img src="" alt="" />
            </figure>
            <div>
              <h1 className="mb-2"></h1>
              <p className="mb-6"></p>
            </div>
            {/* ARROW-BUTTON */}
            <div className="mt-auto"></div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default BusinessLaunchpad;
