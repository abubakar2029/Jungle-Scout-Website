import React, { useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import SubscriptionOptionsPanel from "../../Components/SubscriptionOptionsPanel/SubscriptionOptionsPanel";
import PricingPlansHeader from "../../Components/PricingPlansHeader/PricingPlansHeader";
import ChooseYourPlan from "../../Components/ChooseYourPlan/ChooseYourPlan";
import PricingTable from "../../Components/PricingTable/PricingTable";
import EnterpriseDemo from "../../Components/EnterpriseDemo/EnterpriseDemo";
import Heading from "../../Components/Heading/Heading";

function Pricing() {
  return (
    <div className="w-full">
      <PricingPlansHeader />
      <ChooseYourPlan />
      <SubscriptionOptionsPanel />
      <PricingTable />
      <EnterpriseDemo />
      <Heading
        text="600,000+ sellers trust Jungle Scout"
        fontWeight="font-bold"
        fontSize="text-[32px]"
        mb="mb-[72px]"
      />
      <Heading
        text="Sign up for these packages to get savings and education tailored to first-time sellers"
        fontWeight="font-bold"
        fontSize="text-[32px]"
        mb="mb-14"
        pxl="72"
        pxm="12"
        pxs=""
      />
      <div>
        <div>
          <section>
            <h1>Frequently asked questions</h1>
            {
              <div className="flex justify-between items-center px-7.5 py-9">
                <div>
                  <h3>{}</h3>
                  <span className="flex justify-center items-center ">
                    <MinimizeIcon className="" />
                    <MinimizeIcon />
                  </span>
                </div>
              </div>
            }
          </section>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
