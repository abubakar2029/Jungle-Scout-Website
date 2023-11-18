import React, { useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import SubscriptionOptionsPanel from "../../Components/SubscriptionOptionsPanel/SubscriptionOptionsPanel";
import PricingPlansHeader from "../../Components/PricingPlansHeader/PricingPlansHeader";
import ChooseYourPlan from "../../Components/ChooseYourPlan/ChooseYourPlan";
import PricingTable from "../../Components/PricingTable/PricingTable";

function Pricing() {
  
  return (
    <div className="w-full">
      <PricingPlansHeader/>
      <ChooseYourPlan/>
      <SubscriptionOptionsPanel />
      <PricingTable/>
      
      <div>
        <div>
          <section>
            <h1>Frequently asked questions</h1>
            {
              <div className="flex justify-between items-center px-7.5 py-9">
                <div>
                  <h3>{}</h3>
                  <span className="flex justify-center items-center">
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
