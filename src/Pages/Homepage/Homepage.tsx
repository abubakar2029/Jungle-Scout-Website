import React from "react";
import Herosection from "../../Components/Herosection/Herosection";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Advertisement1 from "../../Components/Advertisement1/Advertisement1";

function Homepage() {
  let secondDiv = [
    {
      name: "Start selling on Amazon",
      href: "https://www.junglescout.com/solutions/start-selling",
    },
    {
      name: "Grow my existing business",
      href: "https://www.junglescout.com/solutions/amazon-sellers/",
    },
    {
      name: "Explore brand & retailer solutions",
      href: "https://www.junglescout.com/enterprise",
    },
  ];

  return (
    <div>
      <Herosection />

      {/* 2nd div */}
      <section className="pb-16 w-full max-w-[1200px] px-4.5 mx-auto basis-1/2">
        <div className="px-4.5 flex justify-center flex-col max-md:max-w-[720px]">
          <p className="text-[12px] font-bold mb-6 text-center">
            What do you want to do?
          </p>
          <div className="flex justify-center max-lg:flex-col">
            {secondDiv.map((element) => {
              return (
                <a
                  href={element.href}
                  className="border-black border  rounded-full py-1.5 px-4 mx-2 flex justify-between mb-4"
                >
                  {element.name}
                  <span>
                    <ArrowForwardIcon fontSize="medium" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <Advertisement1/>
    </div>
  );
}

export default Homepage;
