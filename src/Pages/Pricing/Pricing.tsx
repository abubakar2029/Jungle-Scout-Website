import React, { useState } from "react";

import ChooseYourPlan from "../../Components/ChooseYourPlan/ChooseYourPlan";
import CustomerRating from "../../Components/CustomerRating/CustomerRating";
import EnterpriseDemo from "../../Components/EnterpriseDemo/EnterpriseDemo";
import Heading from "../../Components/Heading/Heading";
import MiniSubcriptionCard from "../../Components/MiniSubcriptionCard/MiniSubcriptionCard";
import PaymentOptions from "../../Components/PaymentOptions/PaymentOptions";
import PlanGuideVideo from "../../Components/PlanGuideVideo/PlanGuideVideo";
import PricingFAQ from "../../Components/PricingFAQ/PricingFAQ";
import PricingPlansHeader from "../../Components/PricingPlansHeader/PricingPlansHeader";
import PricingTable from "../../Components/PricingTable/PricingTable";
import SellerPackages from "../../Components/SellerPackages/SellerPackages";
import SignupBanner from "../../Components/SignupBanner/SignupBanner";
import SubscriptionOptionsPanel from "../../Components/SubscriptionOptionsPanel/SubscriptionOptionsPanel";

// plan-selection
export const planSelectionGuide = {
  heading: "Find the right plan for you",
  text: "Need help choosing your Jungle Scout plan? This video outlines everything you need to know to ensure you select the best plan for your ecommerce success on Amazon and beyond.",
  videoSrc: "/videos/Pricing&PlansGuide.ts",
  thumbnail:
    "https://embed-ssl.wistia.com/deliveries/0ee6509464443f81fee8f30e227c8e27.webp?image_crop_resized=901x524",
};
function Pricing() {
  let [planSwitcher, setPlanSwitcher] = useState("Standard Plans");
  function handlePlanSwitcher(prop: any) {
    setPlanSwitcher(prop);
    console.log("prop", prop);
    console.log(planSwitcher);
  }
  return (
    <div className="w-full">
      <PricingPlansHeader on_Click={handlePlanSwitcher} />
      <div className={`${planSwitcher === "Pakages" ? "block" : "hidden"}`}>
        <Heading
          text="Sign up for these packages to get savings and education tailored to first-time sellers"
          fontWeight="font-extrabold"
          fontSize="text-[32px]"
          mb="mb-14"
          pxl="72"
          pxm="12"
          pxs=""
        />
        <SellerPackages />
      </div>
      <div
        className={`${planSwitcher === "Standard Plans" ? "block" : "hidden"}`}
      >
        <ChooseYourPlan />
        <SubscriptionOptionsPanel />
        <PricingTable />
        <MiniSubcriptionCard />
        <PlanGuideVideo />
        <div className="h-20 w-full"></div>
        {/* extra-div to give space b/w components */}
      </div>
      <PaymentOptions />
      <EnterpriseDemo />
      <Heading
        text="600,000+ sellers trust Jungle Scout"
        fontWeight="font-bold"
        fontSize="text-[32px]"
        mb="mb-[72px]"
      />
      <CustomerRating />
      <PricingFAQ />
      <SignupBanner
        myProp={{
          heading: "Get started with the leading platform for Amazon sellers",
          text: "Build and grow a successful business with Jungle Scout.",
          linkText: "Sign up today",
          linkURL: "/",
        }}
      />
    </div>
  );
}

export default Pricing;
