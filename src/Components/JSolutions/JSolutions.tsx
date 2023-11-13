import React from "react";
import { Link } from "react-router-dom";

function JSolutions() {
  return (
    <div className="block box-border">
      <div className="px-4.5 mx-auto w-full max-w-[1200px]"> 
        <h1 className="font-bold w-full text-center mb-12">Explore Jungle Scout’s powerful solutions</h1>
        <div>
          {/* left div */}
          <div className="w-full md:w-1/3">
            {/* top-card */}
            <div className="leading-6 shadow-lg py-8 px-6">
              <h1 className="font-extrabold">
                <span></span>Find your winning product
              </h1>
              <p className="my-4">
                Discover products to sell on Amazon with Jungle Scout’s
                industry-leading product research tools. Track how products sell
                over time to evaluate product potential. Or, expand your brand
                with the most profitable products in your niche.
              </p>
              <button>Start Seling</button>
            </div>
            {/* link */}
            <div className="text-left">
              <div className="px-6 py-8 hover:font-extrabold">
                <Link to="">
                  <span></span>
                  <span>Convert customers & maximize profits</span>
                </Link>
              </div>
              <div className="px-6 py-8 hover:font-extrabold">
                <Link to="" >
                  <span></span>
                  <span>Run your business confidently</span>
                </Link>
              </div>
              <div className="px-6 py-8 hover:font-extrabold">
                <Link to="" >
                  <span></span>
                  <span>Save time and money with AI automations</span>
                </Link>
              </div>
            </div>
          </div>
          {/* right div */}
          <div className="w-full lg:w-2/3">
            <figure>
              <img
                src="https://www.junglescout.com/wp-content/uploads/2023/07/solutions-img-1@2x.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JSolutions;
