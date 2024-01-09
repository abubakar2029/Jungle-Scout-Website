import {
  AffliatedBrandsLogos,
  featuredBrandLogos,
  jungleScoutResources,
} from "../../HomepadeData";

import BrandAffiliations from "../../Components/BrandAffiliations/BrandAffiliations";
import BusinessLaunchpad from "../../Components/BusinessLaunchpad/BusinessLaunchpad";
import CobaltAdvertisement from "../../Components/CobaltAdvertisement/CobaltAdvertisement";
import GrowBusiness from "../../Components/GrowBusiness/GrowBusiness";
import HeroSection from "../../Components/Hero_Section/Hero_Section";
import JSolutions from "../../Components/ExploreJSolutions/ExploreJSolutions";
import NewResources from "../../Components/NewResources/NewResources";
import React from "react";
import RegisterEmailForm from "../../Components/RegisterEmailForm/RegisterEmailForm";
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

  let heroSectionProps = [
    {
      href: "/",
      name: "Start Selling on Amazon",
    },
    {
      href: "/",
      name: "Grow my existing Business",
    },
    {
      href: "/",
      name: "Explore brand and Retailer Options",
    },
  ];

  return (
    <div>
      <BusinessLaunchpad
        style={{
          backgroundColor: "#f0f0f0 !important",
          border: "1px solid #ccc",
        }}
        aho="aho"
      />

      <HeroSection linkArr={heroSectionProps} />
      <BrandAffiliations
        data={{
          brandsLogos: AffliatedBrandsLogos,
          heading: "Trusted by leading brands",
        }}
      />

      <NewResources />

      {/* <Advertisement1 /> */}
      <JSolutions />
      <Sellersrecommendation />

      <Testimonials />
      <CobaltAdvertisement />
      <RegisterEmailForm />
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
