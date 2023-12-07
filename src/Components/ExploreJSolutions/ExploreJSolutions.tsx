import { Link } from "react-router-dom";
import React from "react";

function JSolutions() {
  let customerSolutions = [
    {
      solutionName: "Convert customers & maximize profits",
      icon: "https://www.junglescout.com/wp-content/uploads/2023/10/arrow-narrow-up-right.svg",
      href: "/",
    },
    {
      solutionName: "Run your business confidently",
      icon: "https://www.junglescout.com/wp-content/uploads/2023/10/package.svg",
      href: "/",
    },
    {
      solutionName: "Save time and money with AI automations",
      icon: "https://www.junglescout.com/wp-content/uploads/2023/10/Icon.svg",
      href: "/",
    },
  ];

  return (
    <section className="block box-border mt-14">
      <div className="px-4.5 mx-auto w-full max-w-[1200px] ">
        <h1 className=" w-full text-center mb-12 text-32 font-extrabold">
          Explore Jungle Scout’s powerful solutions
        </h1>
        <div className="flex">
          {/* left div */}
          <section className="flex max-sm:flex-col-reverse">
            <div className="w-full xl:w-1/3 sm:w-5/12 max-sm:w-full px-4.5">
              {/* top-card */}
              <div className="leading-6 shadow-lg py-8 px-6">
                <h1 className="font-extrabold flex">
                  <span className="mr-2">
                    <img
                      src="https://www.junglescout.com/wp-content/uploads/2023/10/search-refraction.svg"
                      alt=""
                    />
                  </span>
                  Find your winning product
                </h1>
                <p className="my-4">
                  Discover products to sell on Amazon with Jungle Scout’s
                  industry-leading product research tools. Track how products
                  sell over time to evaluate product potential. Or, expand your
                  brand with the most profitable products in your niche.
                </p>
                <button>Start Seling</button>
              </div>

              {/* solution-link */}
              <div className="text-left ">
                {customerSolutions.map((solution) => {
                  return (
                    <div className="px-6 py-8 hover:font-extrabold">
                      <Link to={solution.href} className="flex ">
                        <span className="mr-2">
                          <img src={solution.icon} alt="" />
                        </span>
                        <span>{solution.solutionName}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* right div */}
            <div className="w-full max-sm:w-full sm:w-7/12 xl:w-2/3">
              <figure>
                <img
                  src="https://www.junglescout.com/wp-content/uploads/2023/07/solutions-img-1@2x.png"
                  alt=""
                />
              </figure>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default JSolutions;
