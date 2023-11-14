import React from "react";
import { Link } from "react-router-dom";
function CobaltAdvertisement() {
  let cobaltFeatures = [
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
    <div className="mb-12">
      <section className="w-full max-w-[1200px] mx-auto px-4.5 relative">
        {/* div for gradient */}
        <div className="absolute top-[100%] bg-gradient-to-r from-violet-500 from-5% via-blue-700 via-45% to-teal-400 to-0% bg-slate-600 z-10 h-36 w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, eaque nihil sint suscipit ipsa fugiat velit cum deleniti natus quo quaerat maiores necessitatibus magnam, sequi dolor perferendis odit voluptate rerum.
        </div>
        {/* div for content */}
        <div className="flex">
          {/* left-container */}
          <div className="">
            <figure>
              <img
                src="https://www.junglescout.com/wp-content/uploads/2023/07/Enterprise-CTA-Homepage.png"
                alt=""
              />
            </figure>
          </div>
          {/* right-container */}
          <div>
            <h2 className="font-black text-32">Jungle Scout Cobalt</h2>
            <h2 className="text-32">Enterprise-level Amazon tools</h2>
            <p>
              Explore the advanced insights and advertising tool that helps
              brands and retailers turn industry-leading data into profitable
              strategies on Amazon.
            </p>
            <ul>{}</ul>
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
