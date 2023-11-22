import React from "react";
import { Link } from "react-router-dom";

function SignupBanner(props: any) {
  // first used in pricing-page
  const data = props.myProp;
  return (
    <section className="mb-16">
      <div className="flex flex-col mx-auto xl:max-w-[1200px] min-[992px]:ma-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full px-4.5 py-11 mb-6 bg-white">
        <h1 className="mb-5 text-center text-[32px]">
          <strong>{data.heading}</strong>
        </h1>
        <p className="mb-14 text-center">{data.text}</p>
        <div className="flex justify-center items-center">
          <Link
            to=""
            className="py-4 rounded px-7.5 font-extrabold text-white bg-gradient-to-tr from-orang to bg-orange-400"
          >
            {data.linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignupBanner;
