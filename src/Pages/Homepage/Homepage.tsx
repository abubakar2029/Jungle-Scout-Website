import {
  AffliatedBrandsLogos,
  featuredBrandLogos,
  jungleScoutResources,
} from "../../HomepadeData";

import Advertisement1 from "../../Components/Advertisement1/Advertisement1";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BrandAffiliations from "../../Components/BrandAffiliations/BrandAffiliations";
import CobaltAdvertisement from "../../Components/CobaltAdvertisement/CobaltAdvertisement";
import GrowBusiness from "../../Components/GrowBusiness/GrowBusiness";
import Herosection from "../../Components/HeroSection/HeroSection";
import JSolutions from "../../Components/ExploreJSolutions/ExploreJSolutions";
import NewResources from "../../Components/NewResources/NewResources";
import OldHeroSection from "../../Components/OldHerosection/Herosection";
import React from "react";
import ResourcesSlider from "../../Components/ResourcesSlider/ResourcesSlider";
import Sellersrecommendation from "../../Components/Sellersrecommendation/Sellersrecommendation";
import StaticPopularContentCards from "../../Components/StaticPopularContentCards/StaticPopularContentCards";
import Testimonials from "../../Components/Testimonials/Testimonials";

function Homepage() {
  let secondDiv = [
    {
      name: "Start selling on Amazon",
      href: "https://www.junglescout.com/solutions/start-selling",
    },
    {
      name: "Grow my existing business",
      href: "https://www.junglescout.com/solutions/amazon-sellers/",
    },
    {
      name: "Explore brand & retailer solutions",
      href: "https://www.junglescout.com/enterprise",
    },
  ];

  return (
    <div>
      <Herosection />
      <BrandAffiliations
        data={{
          brandsLogos: AffliatedBrandsLogos,
          heading: "Trusted by leading brands",
        }}
      />

      <NewResources />
      {/* <OldHeroSection /> */}

      {/* 2nd div */}
      {/* <section className="pb-16 w-full max-w-[1200px] px-4.5 mx-auto basis-1/2">
        <div className="px-4.5 flex justify-center flex-col max-md:max-w-[720px]">
          <p className="text-[12px] font-bold mb-6 text-center">
            What do you want to do?
          </p>
          <div className="flex justify-center max-lg:flex-col">
            {secondDiv.map((element, index) => {
              return (
                <a
                  key={index}
                  href={element.href}
                  className="border-black border  rounded-full py-1.5 px-4 mx-2 flex justify-between mb-4"
                >
                  {element.name}
                  <span>
                    <ArrowForwardIcon fontSize="medium" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* <Advertisement1 /> */}
      <JSolutions />
      <Sellersrecommendation />
      {/*  */}
      {/* <div className="flex justify-center px-4.5">
        <h1 className="font-normal text-center leading-10 lg:max-w-[66%] mb-14 text-32">
          Jungle Scout is the #1 trusted solution for
          <br />
          building & managing your Amazon business
        </h1>
      </div> */}
      <Testimonials />
      <CobaltAdvertisement />
      <ResourcesSlider />
      <GrowBusiness />
      <StaticPopularContentCards PopularContentData={jungleScoutResources} />
      <BrandAffiliations
        data={{
          brandsLogos: featuredBrandLogos,
          heading: "Featured in",
        }}
      />
    </div>
  );
}

export default Homepage;
