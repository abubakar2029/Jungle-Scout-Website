import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Advertisement1() {
  return (
    <div className="lg:pb-20 pb-12 ">
      <section className="w-full max-w-[1200px] mx-auto px-4.5 ">
        <div className="ml-[8%] max-w-[83%] flex bg-white shadow-lg max-lg:flex-col">
          {/* div-1 image */}
          <div className="grow-[2] p-1">
            <figure>
              <img
                src="https://www.junglescout.com/wp-content/uploads/2023/11/js_2023-amazon-product-pricing-report_resources-card@1x.jpg"
                alt=""
                className="w-full"
              />
            </figure>
          </div>
          {/* div-2 contemt grow-8 */}
          <div className="flex max-lg:flex-col">
            <div className="text-left grow-[8] px-6 max-lg:py-6">
              <p className="text-14">NEW RESEARCH</p>
              <h4 className="font-extrabold mt-4">
                Amazon Product Pricing Report | 2023
              </h4>
              <p className="font-normal">
                Explore recent Amazon product pricing trends to learn how — and
                why — prices for popular consumer products shift over time.
              </p>
            </div>
            {/* readme div */}
            <div className="px-12 relative flex items-center max-lg:border-t-[1px] lg:border-l-[1px] border-zinc-200 max-lg:grow max-lg:py-8 justify-center">
              <Link to="">Read more</Link>
              <span className="absolute top-[10px] right-[10px] transform -rotate-45">
                <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advertisement1;
