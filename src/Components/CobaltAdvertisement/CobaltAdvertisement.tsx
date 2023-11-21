import React from "react";
import { Link } from "react-router-dom";
function CobaltAdvertisement() {
  let cobaltFeaturesList = [
    "Streamline reporting and research with custom data dashboards",
    "Track market share, consumer trends, competitors, and more",
    "Automate and optimize Amazon advertising campaigns",
  ];
  let logoURL = [
    "https://www.junglescout.com/wp-content/uploads/2023/07/hp-logo.svg",
    "https://www.junglescout.com/wp-content/uploads/2023/07/wahl-logo.svg",
    "https://www.junglescout.com/wp-content/uploads/2023/07/libman-logo.svg",
    "https://www.junglescout.com/wp-content/uploads/2023/07/nuby-logo.svg",
  ];
  return (
    // <div className="mb-12"> temp
    <div className="mb-96">
      <section className="w-full overflow-hidden max-w-[1200px] mx-auto px-4.5 relative">
        {/* div for gradient */}
        <div className="absolute top-[100%] bg-gradient-to-br blur-[137px] from-violet-500 from-0% via-blue-700 via-45% to-teal-400 to-100% h-36 -z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          eaque nihil sint suscipit ipsa fugiat velit cum deleniti natus quo qua
        </div>
        {/* div for content */}
        <div className="flex">
          {/* left-container */}
          <div className="px4.5">
            <div className="pl-16 pr-4">
              <figure>
                <img
                  src="https://www.junglescout.com/wp-content/uploads/2023/07/Enterprise-CTA-Homepage.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
          {/* right-container */}
          <div className="px-7.5">
            <h2 className="font-bold text-32">Jungle Scout Cobalt</h2>
            <h2 className="text-32">Enterprise-level Amazon tools</h2>
            <p>
              Explore the advanced insights and advertising tool that helps
              brands and retailers turn industry-leading data into profitable
              strategies on Amazon.
            </p>
            <ul className="pl-10 my-4 leading-6 list-disc">
              {cobaltFeaturesList.map((feature) => {
                return <li>{feature}</li>;
              })}
            </ul>
            <div className="flex gap-x-7 mb-6 items-center">
              {logoURL.map((logo) => {
                return (
                  <div>
                    <img src={logo} alt="" />
                  </div>
                );
              })}
            </div>
            <div>
              <Link to="">Explore</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CobaltAdvertisement;
// https://www.junglescout.com/wp-content/uploads/2023/07/Enterprise-CTA-Homepage.png
