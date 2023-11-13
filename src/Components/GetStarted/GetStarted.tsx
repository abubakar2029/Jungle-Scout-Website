import React from "react";

function GetStarted() {
  return (
    <div>
      <div className="w-ful lg:max-w-[1200px] md:max-w-[960px] sm:max-w-[720px] mx-auto px-4.5 py-12 lg:py-20">
        {/* 540px xsm */}
        {/*gradient-div  */}
        <div>
          <div className="text-white">
            <h1>4 out of 5 of Amazon sellers wish they started sooner.</h1>
            <p>Don’t wait! Make the leap with support from Jungle Scout.</p>
          </div>
          <div className="flex items-start justify-center">
            <button className="bg-slate-500 rounded"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
