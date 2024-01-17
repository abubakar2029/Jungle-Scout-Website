import { Link } from "react-router-dom";
import React from "react";

// function FeaturespageHeader(props: any) {
function FeaturespageHeader({ heroSection }: any) {
  // const props1 = props.heroSection;
  const props1 = heroSection;
  return (
    <div
      className="py-4.5 bg-cover bg-center bg-no-repeat"
      style={
        props1.bgImg
          ? {
              backgroundImage: `url(${props1.bgImg})`,
            }
          : {}
      }
    >
      <section className="mx-auto mb-6 px-4.5 py-11 xl:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-md:flex-col w-full flex justify-between">
        {/* first-div-content */}
        <div className="md:max-w-[50%] w-full flex h-full my-auto items-start flex-col">
          <div className="py-1 px-3 rounded-sm inline-flex items-center bg-white">
            <img src={props1.iconImg} alt="" width={12} height={12} />
            <span className="uppercase ml-1 text-orange-500 text-[12px] font-bold ">
              {props1.name}
            </span>
          </div>
          <h1
            className="mt-6 mb-2 text-[40px] font-extrabold block leading-[46px] pb-4"
            style={{ fontSize: `calc(1.3rem + 1.5vw)` }}
          >
            {props1.heading}
          </h1>
          <p className="mb-4 text-[18px] leading-6">{props1.text}</p>
          {/* two-btn-div */}
          <div className="mt-4">
            <Link
              to=""
              className="text-white hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.15)] rounded bg-gradient-to-r from-orange-500 to bg-orange-400 font-extrabold text-center py-4 px-7.5"
            >
              Get started
            </Link>
            {/* transparent-border */}
            <Link
              to=""
              className="border-transparent  text-blue-700 font-extrabold hover:text-blue-800 text-center py-4 px-4"
            >
              Watch video
            </Link>
          </div>
        </div>
        {/* right-div-second */}
        <div className="md:!max-w-[50%] max-md:mt-16 flex justify-center items-center">
          <img
            src="https://www.junglescout.com/wp-content/uploads/2020/06/product-database-hero-image-1024x612.png"
            alt=""
            className="h-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default FeaturespageHeader;
