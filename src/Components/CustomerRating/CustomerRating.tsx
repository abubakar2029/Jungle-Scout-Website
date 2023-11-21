import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarRate from "@mui/icons-material/StarRate";
import GradeIcon from "@mui/icons-material/Grade";

function CustomerRating() {
  return (
    <div>
      <section className="flex mx-auto xl:max-w-[1200px] min-[992px]:ma-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
        {/* row-gap-16px */}
        <Link to="" className="mr-4">
          Our customers say
        </Link>
        <p className="text-[18px] mr-4">Excellent</p>
        {/* rating-icon */}
        <div></div>
        <p>4.7 out of 5 based on 3,593 reviews</p>
        <Link to="" className="font-bold mr-4">
          <span>
            <StarRate />
          </span>
          Trustpilot
        </Link>
      </section>
    </div>
  );
}

export default CustomerRating;
