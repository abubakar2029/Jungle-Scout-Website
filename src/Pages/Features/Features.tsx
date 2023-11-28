import React from "react";
import { useParams } from "react-router-dom";
import FeaturespageHeader from "../../Components/FeaturespageHeader/FeaturespageHeader";
import FeaturesTopHeading from "../../Components/FeaturesTopHeading/FeaturesTopHeading";
import TextImageRight from "../../Components/TextImageRight/TextImageRight";
import { FeaturePages } from "../../FeaturesData";

function Features() {
  let param = useParams();
  console.log(param.pID);
  let overview = {
    heading:"",
    text:"",
  };
  let heroSection;
  let extensionInfo;
  for (const page of FeaturePages) {
    if (param.pID === page.name) {
      console.log(page);
      heroSection = page.Header;
      overview.text = page.Overview;
      extensionInfo = page.Info;
      overview.heading=page.name
    }
  }

  return (
    <div>
      <FeaturespageHeader heroSection={heroSection} />
      <FeaturesTopHeading ExtensionOverview={overview} />
      {extensionInfo?.map((section, index) => {
        return <TextImageRight data={section} key={index} />;
      })}
    </div>
  );
}

export default Features;
