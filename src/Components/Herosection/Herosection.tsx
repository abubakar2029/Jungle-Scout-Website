import React from "react";
import Button from "../Button/Button";

function Herosection() {
  return (
    <div className="w-full">
      <section className="w-full max-w-[1200px] pt-6 px-4.5 pb-10 mx-auto">
        <div className="-mx-4">
          {/* left-container */}
          <div className="text-left lg:mt-88 px-4.5">
            <figure className="mb-4 mr-auto">
              <img
                src="https://www.junglescout.com/wp-content/uploads/2023/10/js_trust-pilot@1.5x.png"
                alt="Excellent 4.7 stars on Trustpilot"
                width="292px"
                height="25px"
                className="max-h-full"
              />
            </figure>
            <h1 className="block text-2.5xl leading-10 ">
              Smart Tools for
              <span className="text-blue-700">Amazon Sellers</span>
            </h1>
            <p className="mb-6">
              Whether you want to start selling on Amazon or accelerate your
              brand’s growth, Jungle Scout has the industry-leading data, tools,
              and expertise to help you succeed.
            </p>
            <div>
              <Button />
            </div>
          </div>
          {/* right-container */}
          <div className="max-w-[50%] px-4.5 basis-1/2">
            <div className="relative top-32 left-0 mr-auto">
              <figure><img src="https://www.junglescout.com/wp-content/uploads/2023/10/js_hero_net-profit-callout-1.png" alt="" className="mr-auto"/></figure>
              <figure><img src="https://www.junglescout.com/wp-content/uploads/2023/10/js_hero_keyword-search-callout-2.png" alt="" className="mr-auto left-11 top-56"/></figure>
              <figure><img src="" alt="" className="mr-auto left-11 top-56"/></figure>
              <figure><img src="" alt="" className="mr-auto top-0 left-[60px]"/></figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
