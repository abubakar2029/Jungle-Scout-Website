import React, { useState } from "react";

function PricingPlansHeader({ on_Click }: any) {
  const subcriptionOptions = [
    {
      name: "Standard Plans",
      icon: "https://www.junglescout.com/wp-content/uploads/2022/03/standard-plan_svg.svg",
      detail:
        "All in one platform for any entrepreneur starting and scaling ecommerce business.",
    },
    {
      name: "Pakages",
      icon: "https://www.junglescout.com/wp-content/uploads/2022/03/packages_svg.svg",
      detail:
        "Access to advanced training and savings in setting your ecommerce business in motion.",
    },
  ];

  const [card, setCard] = useState("Standard Plans");
  return (
    <div
      className="bg-cover mb-20 bg-center"
      style={{
        backgroundImage:
          "url('https://www.junglescout.com/wp-content/uploads/2022/03/orange-banner_svg.svg')",
      }}
    >
      <section className=" xl:max-w-[1200px] min-[992px]:max-w-[960px] w-full mx-auto">
        <h2 className="text-center max-sm:py-12 sm:py-16 md:py-[72px] px-4.5 text-white font-extrabold text-2.5xl">
          Pricing & Plans
        </h2>
        <div className="flex justify-around pt-6 overflow-hidden">
          {subcriptionOptions.map((item, index) => {
            return (
              <div
                className={`mx-4 rounded-t-lg flex flex-col gap-y-1 transition-transform duration-500 ${
                  card === item.name
                    ? "py-8 pb-8 text-black bg-white scale-y-105"
                    : "mt-2 text-slate-500 py-10 bg-gray-50 hover:bg-white"
                }  px-6 text-left  `}
                key={index}
                onClick={() => {
                  setCard(item.name);
                  on_Click(item.name);
                }}
              >
                {/* heading -div */}
                <div className="flex relative items-center">
                  <div
                    className={`absolute -top-3 bg-orange-400 h-0.5 w-6  left-0 transform transition-transform duration-200 ease-in-out ${
                      card === item.name ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>

                  <figure className="mr-4">
                    <img src={item.icon} alt="" width={24} height={46} />
                  </figure>
                  <h2 className="font-bold">{item.name}</h2>
                </div>
                {/* detail-div */}
                <div>{item.detail}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default PricingPlansHeader;
