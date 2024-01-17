import "material-icons/iconfont/material-icons.css";

import * as Types from "../../entities/Types";

import { Link } from "react-router-dom";
import React from "react";

function StaticPopularContentCards(props: Types.PopularContentDataProps) {
  const data = props.PopularContentData;
  return (
    <section className="flex flex-col py-20">
      <h1 className="mb-4 text-32 font-extrabold text-center">
        Our most popular content
      </h1>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-x-8 mt-2 pt-2">
        {data.map((item, index) => {
          return (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-b-md rounded-t-sm shadow mb-6"
              key={index}
            >
              <img src={item.img} alt="" className="w-full"/>
              <div className="p-5 h-64">
                <p className="uppercase text-[12px] text-gray-400 h-[10%]">
                  {item.category}
                </p>
                <h5 className="mb-2 font-extrabold tracking-tight text-gray-900 h-[15%] leading-tight">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[55%]">
                  {item.text}
                </p>
                <p className="inline-flex items-center py-2 text-sm text-center font-bold text-[12px] text-blue-700 h-[20%]">
                  Read more
                  <i className="material-icons"></i>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StaticPopularContentCards;
