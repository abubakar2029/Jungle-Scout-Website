import React from "react";

function Herosection() {
  return (
    <section
      className="bg-cover"
      style={{
        backgroundImage: `url("https://www.junglescout.com/wp-content/uploads/2022/03/hp-hero-background-graph-desktop-1.5x.jpg")`,
      }}
    >
      {/* PARENT-DIV */}
      <div className="px-3 flex max-md:flex-col pt-14 mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
        {/* content-section */}
        <div className="text-left md:max-w-[50%] md:basis-1/2 w-full max-md:relative max-md:z-30 max-md:bg-blue-500">
          <h1 className="text-[24px] sm:text-32 lg:text-2.5xl !font-extrabold md:mb-4 mb-3">
            Start and scale your ecommerce business
          </h1>
          <p className="text-[20px] font-normal">
            Jungle Scout’s essential data and tools help you win on Amazon and
            beyond.
          </p>
          {/* Card */}
          <div className="bg-white p-4 shadow-[0_0_15px-rgba(0,0,0,0.2)] rounded-sm">
            <p className="mb-4 text-[20px]">
              We have solutions for all types of sellers. <br />
              <strong className="font-extrabold">I am here to…</strong>
            </p>
            <div>
              {/* yahan map chla ga */}
              <div
                className={`flex justify-between px-2.5 items-center py-3 rounded-sm border transition-all `}
              >
                <p></p>
                <i className="material-icons">arrow_forward</i>
              </div>
            </div>
          </div>
        </div>
        {/* Hero-Img */}
        <div className="px-3 md:pt-6 md:max-w-[50%] md:basis-1/2 w-full">
          <img
            src="https://www.junglescout.com/wp-content/uploads/2022/03/lifestyle-asset_1x.png"
            alt=""
            width={705}
            height={497}
            className="!min-w-[705px] !min-h-[497px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
