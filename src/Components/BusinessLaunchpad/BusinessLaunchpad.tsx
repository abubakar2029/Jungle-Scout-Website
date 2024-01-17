import SelectedCard from "./SelectedCard";
import "./style.css";

import React, { useEffect, useState } from "react";
import * as entities from "../../entities/BusinessLaunchpad";

function BusinessLaunchpad(props: any) {
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
    cardType: string;
  }
  const enum Cards {
    START_SELLING = "StartSelling",
    GROW_BUSINESS = "GrowBusiness",
    ACCELERATE_ENTERPRISE = "AccelerateEnterprise",
  }

  const businessLaunchpadCards: entities.Card[] = [
    {
      cardType: Cards.START_SELLING,
      backgroundImage:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-desktop-1.5x.jpg",
      backgroundImageMobile:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-mobile-1.5x.jpg",
      title: "Start selling",
      text: "Find a winning product and launch your Amazon business.",
      CardContent: {
        icon: "https://www.junglescout.com/wp-content/uploads/2022/03/Pricing-Icon.svg",
        image:
          "https://www.junglescout.com/wp-content/uploads/2022/03/hp-start-business-asset-1x.png",
        imageName: "...",
        resources: [{ heading: "...", content: "..." }],
        iconName: "...",
        heading: "New to selling on Amazon? You’re in the right place.",
        featuresList: [
          "Find and track winning products",
          "Discover high-value keywords",
          "Source suppliers for products",
          "Create and optimize product listings",
        ],
      },
      startupMessage:
        "You need to learn first before you jump into FBA. Jungle Scout offers those tools and education that you need.",
      referencePerson: "Maricia Magaña",
      referencePosition: "Founder and CEO of LITTIL",
      referenceBlogLink:
        "https://www.junglescout.com/blog/amazon-seller-stories-littil/",
    },
    {
      cardType: Cards.GROW_BUSINESS,
      title: "Grow your business",
      referenceBlogLink:
        "https://www.junglescout.com/blog/amazon-seller-stories-click-and-carry/",
      startupMessage:
        "Through Jungle Scout, I went from 355 reviews to 2,116 reviews. That’s pretty incredible.",
      referencePerson: "Kim Meckwood",
      referencePosition: "Inventor of Click & Carry",
      text: "Take your business to new heights with tools that make it easier to drive sales.",
      backgroundImage:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-tablet-1.5x.jpg",
      backgroundImageMobile:
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-mobile-1.5x.jpg",
      CardContent: {
        icon: "https://www.junglescout.com/wp-content/uploads/2022/03/existing-seller-icon.svg",
        image:
          "https://www.junglescout.com/wp-content/uploads/2022/03/hp-start-business-asset-1x.png",
        imageName: "...",
        resources: [{ heading: "...", content: "..." }],
        iconName: "...",
        heading: "Sell smarter and uncover opportunities for growth.",
        featuresList: [
          "Get reviews quickly and easily",
          "Level up your keyword research",
          "Optimize product listings",
          "Manage inventory with ease",
        ],
      },
    },
    {
      cardType: Cards.ACCELERATE_ENTERPRISE,
      backgroundImageMobile:
        "https://www.junglescout.com/wp-content/uploads/2022/08/js_tab-Banner-Background_320px-mobile.jpg",
      backgroundImage:
        "https://www.junglescout.com/wp-content/uploads/2022/08/Banner_Background.jpg",
      text: "Data is at the heart of Jungle Scout. From product research to powerful market intelligence, our tools give you critical insights for ecommerce success.",

      title: "Accelerate enterprise growth",
      startupMessage:
        "Cobalt provides full visibility of how our business performs on Amazon against our competition, providing the knowledge we need to execute our strategy and meet company KPIs.",
      referencePerson: "Kirk Lutz",
      referencePosition: "Advertising Lead at Code3",
      CardContent: {
        icon: "https://www.junglescout.com/wp-content/uploads/2022/07/enterprise-icon.svg",
        image:
          "https://www.junglescout.com/wp-content/uploads/2023/05/JSC-thumbnail2.png",
        imageName: "...",
        resources: [{ heading: "...", content: "..." }],
        iconName: "...",
        heading:
          "Comprehensive Amazon data and powerful advertising tools, in one place.",
        featuresList: [
          "Identify category trends and discover new keywords to drive conversions",
          "Track market share, consumer demand, and competitor performance",
          "Optimize and automate ad spend to capitalize on market trends and improve sales",
          "Conquest competitors and halt unauthorized third-party resellers",
        ],
      },
    },
  ];

  let [activeCard, setActiveCard] = useState<string>(Cards.START_SELLING);
  console.log("Active ", activeCard);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      setBackgroundImage("mobile-image-url");
    } else if (screenWidth < 1024) {
      setBackgroundImage("tablet-image-url");
    } else {
      setBackgroundImage(
        "https://www.junglescout.com/wp-content/uploads/2022/03/hp-insights-d-orange-desktop-1.5x.jpg"
      );
    }
  };

  useEffect(() => {
    handleResize();
  }, []);
  return (
    <section
      id="Business_Launchpad"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className="mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full relative">
        {/* TOP_DIV_CONTENT */}
        <div className="flex flex-col justify-center items-center pt-36 pb-56 text-center text-white">
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
        <section className="-mt-40 grid grid-cols-3">
          {/* yahan map chla ga */}
          {businessLaunchpadCards.map((cardData, index) => (
            <div
              className={`px-8 pt-10 pb-8 h-full cursor-pointer  hover:bg-gray-50 ${
                activeCard === cardData.cardType ? "bg-white" : "bg-gray-100"
              }`}
              key={index}
              onClick={() => setActiveCard(cardData.cardType)}
            >
              {/* CARD */}
              <figure className="mb-6">
                <img src={cardData.CardContent.icon} alt="" />
              </figure>
              <div>
                <h1 className="mb-2">{cardData.title}</h1>
                <p className="mb-6">{cardData.text}</p>
              </div>
              {/* ARROW-BUTTON */}
              <div
                className={`mt-auto w-10 h-10 transition-all bg-neutral-100 p-1 rounded-[50%] flex justify-center items-center duration-150 ${
                  activeCard === cardData.cardType ? "rotate-90" : "rotate-0"
                }`}
              >
                <i className="material-icons">arrow_forward</i>
              </div>
            </div>
          ))}
        </section>
        <SelectedCard CardContent={businessLaunchpadCards[0].CardContent} />
      </div>
    </section>
  );
}

export default BusinessLaunchpad;
