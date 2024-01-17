import React, { useEffect } from "react";

import { FeaturePages } from "../../PagesData/FeaturesData";
import FeaturesTopHeading from "../../Components/FeaturesTopHeading/FeaturesTopHeading";
import FeaturespageHeader from "../../Components/FeaturespageHeader/FeaturespageHeader";
import TextImageRight from "../../Components/TextImageRight/TextImageRight";
import { useParams } from "react-router-dom";

function Features() {
  let param = useParams();
  console.log("Param ID", param.pID);
  let overview = {
    heading: "",
    text: "",
  };
  let heroSection;
  let extensionInfo: any[] = [];
  useEffect(() => {
    for (const page of FeaturePages) {
      if (param.pID === page.name) {
        console.log("Ya page mila", page);
        heroSection = page.Header;
        overview.text = page.Overview;
        extensionInfo = page.Info;
        overview.heading = page.name;
      }
    }
  }, []);
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
