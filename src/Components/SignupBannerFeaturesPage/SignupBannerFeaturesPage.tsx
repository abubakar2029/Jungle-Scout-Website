import React from "react";
import SignupBanner from "../SignupBanner/SignupBanner";

function SignupBannerFeaturesPage() {
  const bannerData = {
    heading: "Start your product research with Jungle Scout",
    text: "Risk free, 7-day money back guarantee.",
    linkText:"Sign up today",
    bgImg:
      "https://www.junglescout.com/wp-content/uploads/2019/07/rectangle-2.png",
  };
  return <SignupBanner myProp={bannerData} />;
}

export default SignupBannerFeaturesPage;
