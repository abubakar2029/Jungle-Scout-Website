import React, { useState } from "react";
import { planSelectionGuide } from "../../Pages/Pricing/Pricing";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function PlanGuideVideo() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="bg-neutral-100 w-full py-20">
      <div className="flex w-full max-[992px]:flex-col justify-between  items-center lg:max-w-[995px] mx-auto">
        {/* left-div-content */}
        <div className=" max-w-[50%] max-[992px]:w-full max-[992px]:basis-full flex flex-col basis-1/2">
          <h1 className="mb-8 text-[32px] font-extrabold">
            {planSelectionGuide.heading}
          </h1>
          <p className="">{planSelectionGuide.text}</p>
        </div>
        {/* right-div-video */}
        <div className="max-w-[50%] max-[992px]:w-full max-[992px]:basis-full px-4.5 flex items-center justify-center basis-1/2">
          {!isVideoPlaying && (
            <div
              className="relative cursor-pointer"
              onClick={() => setIsVideoPlaying(true)}
            >
              <img
                src={planSelectionGuide.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-auto"
              />
              <PlayCircleOutlineIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 72,
                  color: "#fff",
                }}
              />
            </div>
          )}
          {isVideoPlaying && (
            <video controls controlsList="nodownload" className="w-full h-auto">
              <source
                src={planSelectionGuide.videoSrc}
                type="video/mp4"
              ></source>
            </video>
          )}
        </div>
      </div>
    </section>
  );
}

export default PlanGuideVideo;
