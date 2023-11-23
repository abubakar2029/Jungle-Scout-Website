import React from "react";
import { Link } from "react-router-dom";

function SignupBanner(props: any) {
  // first used in pricing-page\
  // second in all feature pages
  const data = props.myProp;
  return (
    <section
      className="mb-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${data.bgImg ? `${data.bgImg}` : ""})` }}
    >
      <div
        className={`flex flex-col mx-auto xl:max-w-[1200px] min-[992px]:ma-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full px-4.5 pt-20 pb-16 mb-6 ${
          data.bgImg ? "" : "bg-white"
        } `}
      >
        <h1
          className={`mb-3 text-center text-[32px] ${
            data.bgImg ? "text-white" : "text-black"
          }`}
        >
          <strong>{data.heading}</strong>
        </h1>
        <p
          className={`mb-9 text-center ${
            data.bgImg ? "text-white" : "text-black"
          }`}
        >
          {data.text}
        </p>
        <div className="flex justify-center items-center">
          <Link
            to=""
            className={`py-4 rounded px-7.5 font-extrabold text-white bg-gradient-to-tr from-orang to bg-orange-400 ${
              data.bgImg ? "block !px-16 !py-3 !bg-orange-500" : ""
            }`}
          >
            {data.linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignupBanner;
