import Button from "../Button/Button";
import React from "react";

function Sellersrecommendation() {
  return (
    <section className="py-11">
      <div className="w-ful lg:max-w-[1200px] md:max-w-[960px] sm:max-w-[720px] mx-auto px-6 sm:py-8 md:py-12 lg:py-20 ">
        <div className="rounded flex bg-gradient-to-r from-orange-500 from-50% to-yellow-400 to-100% py-6 px-4 lg:p-8 max-md:flex-col">
          <div className="text-white lg:w-3/4 md:w-4/6 w-full block mb-2.5">
            <h1 className="text-32 max-xl:text-[calc(1.35rem+.9vw)]">
              4 out of 5 of Amazon sellers wish they started sooner.
            </h1>
            <p>Don’t wait! Make the leap with support from Jungle Scout.</p>
          </div>
          <div className="flex items-center  justify-center lg:w-1/4 w-full md:w-1/3">
            <Button label="Get started" height="4" width="140" bgColor="white" textColor="black" href="/"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sellersrecommendation;
