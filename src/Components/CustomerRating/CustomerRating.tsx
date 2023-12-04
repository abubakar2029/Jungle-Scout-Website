import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarRate from "@mui/icons-material/StarRate";
import GradeIcon from "@mui/icons-material/Grade";

function CustomerRating() {
  return (
    <div className="mb-6 py-8">
      <section className="flex justify-center mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full mb-16 items-center">
        {/* row-gap-16px */}
        <Link to="" className="mr-4 whitespace-nowrap hidden min-[1200px]:block">
          Our customers say
        </Link>
        <p className="text-[18px] mr-4 font-medium hidden md:block">Excellent</p>
        {/* rating-icon */}
        <div></div>
        <p className="text-[14px] whitespace-nowrap hidden min-[992px]:block">
          4.7 out of 5 based on 3,593 reviews
        </p>
        <Link to="" className="mr-1 md:-ml-20 max-md:-ml-28 inline-block">
          <iframe
            title="Customer reviews powered by Trustpilot"
            src="https://widget.trustpilot.com/trustboxes/5406e65db0d04a09e042d5fc/index.html?templateId=5406e65db0d04a09e042d5fc&businessunitId=58483f770000ff000598c2a7#locale=en-US&styleHeight=28px&styleWidth=100%25&theme=light"
            style={{
              height: 20,
              width: "100%",
              borderStyle: "none",
              display: "inline-block",
              overflow: "hidden",
            }}
            data-gtm-yt-inspected-7="true"
          />
        </Link>
      </section>
    </div>
  );
}

export default CustomerRating;
