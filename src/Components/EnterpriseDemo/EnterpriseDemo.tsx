import React from "react";
import { Link } from "react-router-dom";

function EnterpriseDemo() {
  return (
    <div className="mb-6 mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
        {/*  */}
      <div className="max-w-[83%] mx-auto bg-violet-50 p-6 flex justify-between">
        <div className="flex flex-col pr-12">
          <h3 className="mb-1 text-blue-950 font-bold leading-6">Looking for Enterprise Solutions?</h3>
          <p className="pr-12">
            Jungle Scout offers enterprise-level market insights and competitive
            analysis for brands looking to win the Amazon channel.
          </p>
        </div>
        {/* button */}
        <div className="flex items-center">
          <Link
            to=""
            className="bg-orange-500 hover:bg-orange-400 py-4 whitespace-nowrap px-2.5 font-bold rounded-sm text-white text-center"
          >
            Request your demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseDemo;
