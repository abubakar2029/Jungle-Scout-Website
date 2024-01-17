import * as Types from "../../entities/Types";

import { Link } from "react-router-dom";
import React from "react";

function TextImageRight(props: any) {
  const props1: Types.InfoItem = props.data;
  return (
    <section
      className={`flex max-md:!flex-col-reverse ${
        props1.TextimageLeft ? "flex-row-reverse" : "flex-row"
      } mb-12 py-12 mx-auto justify-around xl:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full`}
    >
      {/* TEXT-CONTENT */}
      <div
        className="lg:max-w-[41%] lg:basis-[41%] md:max-w-[50%]
        md:basis-1/2 w-full my-auto px-4.5"
      >
        <h1 className="block mb-6 mt-4 text-[28px] font-extrabold">
          {props1.heading}
        </h1>
        <p className="mb-4 block">{props1.text}</p>

        <Link
          to={props1.blogLink || "/"}
          className="text-white font-extrabold whitespace-nowrap py-4 px-7.5 mt-6 bg-black hover:bg-blue-700 hover:shadow-[3px_3px_5px_rgba(147,197,253,0.6)] border-1 border-x-transparent shadow-blue-400 cursor-pointer transition-all duration-300 block w-fit rounded-sm"
        >
          {props1.buttonText}
        </Link>
        {/* EXTERNAL-LINK */}
        <p className="text-blue-700 leading-6 underline"></p>
      </div>
      {/* IMAGE */}
      <div
        className="lg:max-w-[41%] lg:basis-[41%] md:max-w-[50%]
        md:basis-1/2 w-full my-auto "
      >
        <img src={props1.img} alt="" />
      </div>
    </section>
  );
}

export default TextImageRight;
