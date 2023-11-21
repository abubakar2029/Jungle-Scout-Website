import React from "react";
import { planSelectionGuide } from "../../Pages/Pricing/Pricing";

function PlanGuideVideo() {
  return (
    <section className="bg-neutral-100 w-full py-20">
      <div className="flex">
      {/* left-div-content */}
        <div className="max-w-[50%] flex flex-col items-center basis-1/2">
          <h1 className="mb-8 text-[32px] font-extrabold">{planSelectionGuide.heading}</h1>
          <p className="">{planSelectionGuide.text}</p>
        </div>
        {/* right-div-video */}
        <div className="max-w-[50%] flex items-center justify-center basis-1/2">
          <video src={planSelectionGuide.videoSrc} controls></video>
        </div>
      </div>
    </section>
  );
}

export default PlanGuideVideo;
