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
    <div>
      <section>
        {/* div for gradient */}
        <div></div>
        {/* div for content */}
        <div>
          {/* left-container */}
          <div>
            <figure>
              <img
                src="https://www.junglescout.com/wp-content/uploads/2023/07/Enterprise-CTA-Homepage.png"
                alt=""
              />
            </figure>
          </div>
          {/* right-container */}
          <div>
            <h2>Jungle Scout Cobalt</h2>
            <h2>Enterprise-level Amazon tools</h2>
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
