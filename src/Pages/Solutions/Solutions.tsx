import React from "react";
import { useParams } from "react-router-dom";
import TextImageRight from "../../Components/TextImageRight/TextImageRight";
import TestimonialCardsStatic from "../../Components/TestimonialCardsStatic/TestimonialCardsStatic";
import { staticTestimonialCards } from "../../Types";
import SolutionsPageHeader from "../../Components/SolutionsPageHeader/SolutionsPageHeader";
import { SolutionPages } from "../../SolutionsData";

function Solutions() {
  let param = useParams();
  console.log("Param Route ya aya", param.pID);
  // UNUSED CODE
  let overview = {
    heading: "",
    text: "",
  };
  let Header;
  let extensionInfo;
  let testimonialsData;
  for (const page of SolutionPages) {
    if (param.pID === page.pageName) {
      console.log("ya page mila ha", page);
      Header = page.Header;
      extensionInfo = page.Info;
      testimonialsData = page.staticTestimonialsData;
      overview.heading = page.name;
    }
  }

  return (
    <div>
      <SolutionsPageHeader pageHeader={Header} />
      {/* <TextImageRight/> */}

      {/*  */}
      <section className="bg-neutral-100 ">
        <div className="py-12 px-4.5 min-[1200px]:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto">
          <h1 className="text-32 text-center mb-4 font-extrabold">
            Join over 600,000 entrepreneurs already using Jungle Scout
          </h1>
          <TestimonialCardsStatic testimonialsData={testimonialsData} />
        </div>
      </section>
    </div>
  );
}

export default Solutions;
