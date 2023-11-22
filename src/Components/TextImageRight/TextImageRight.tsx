import React from "react";

function TextImageRight() {
  return (
    <section className="flex mx-auto justify-around xl:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full">
      {/* left-div-text */}
      <div className="flex max-w-[50%] basis-1/2 flex-col px-4.5">
        <h1 className="block mb-2 text-[28px] font-extrabold">
          Generate product ideas
        </h1>
        <p className="mb-4">
          Generate ideas in seconds and start discovering products that match
          your specific search criteria. Sort by categories, estimated sales,
          sales rank, revenue, and more to quickly reveal profitable
          opportunities.
        </p>
      </div>
      <div className="max-w-[41%] basis-[41%]">
        {/* md-50 sm-100 */}
        <img
          src="https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-start-research.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default TextImageRight;
