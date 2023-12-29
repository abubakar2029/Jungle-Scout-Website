import "material-icons/iconfont/material-icons.css";

import * as Types from "../../entities/Types";

import { Link } from "react-router-dom";
import React from "react";

function SolutionsPageHeader(props: Types.PageHeaderProps) {
  const props1 = props.pageHeader;
  return (
    <div
      className="py-4.5 bg-cover bg-center bg-no-repeat"
      style={
        props1?.bgImg
          ? {
              backgroundImage: `url(${props1.bgImg})`,
            }
          : {}
      }
    >
      <section className="mx-auto mb-6 px-4.5 py-11 xl:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-md:flex-col w-full flex justify-between">
        {/* title and description */}
        <div className="md:max-w-[50%] w-full flex h-full my-auto items-start flex-col">
          <div>
            <h1
              className="mt-6 mb-2 text-[40px] font-extrabold block leading-[46px] pb-4"
            >
              {props1?.heading}
            </h1>
            <p className="mb-4 text-[16px] leading-6">{props1?.text}</p>
            <ul className="mb-6">
              {props1?.features?.map((feature, index) => {
                return (
                  <li className="mb-2 leading-6 flex" key={index}>
                    <span><i className="material-icons">check</i></span>
                    <p className="pl-5">{feature}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* GET-STARTED */}
          <div className="mt-4 flex flex-col">
            <Link
              to="/"
              className="text-white hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.15)] rounded bg-gradient-to-r from-orange-500 to bg-orange-400 font-extrabold text-center py-4 px-7.5 !min-w-[200px] block leading-4 mb-4"
            >
              Get started
            </Link>
            <p className="text-gray-500 mb-4 text-[12px]">
              7-day money-back guarantee
            </p>
          </div>
        </div>
        {/* HERO-IMG */}
        <div className="md:!max-w-[50%] max-md:mt-16 flex justify-center items-center">
          <img src={props1?.heroImg} alt="" className="h-auto" />
        </div>
      </section>
    </div>
  );
}

export default SolutionsPageHeader;
