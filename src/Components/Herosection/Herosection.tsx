import React, { Fragment, useEffect, useState } from "react";
import Button from "../Button/Button";
import { Transition } from "@headlessui/react";

function Herosection() {
  let [isTranslating, setisTranslating] = useState(false);

  useEffect(() => {
    setisTranslating(true);
  }, []);

  return (
    <div className="w-full bg-no-repeat box-border bg-cover bg-[url('https://www.junglescout.com/wp-content/uploads/2023/10/js_hero-background-img-Angle_1440@1.5x.png')] pb4.5">
      <section className="w-full max-w-[1200px] px-4.5 pb-10 mx-auto">
        <div className="-mx-4 flex">
          {/* left-container */}
          <div className="text-left lg:mt-88 px-4.5 w-5/12">
            <figure className="mb-4 mr-auto">
              <img
                src="https://www.junglescout.com/wp-content/uploads/2023/10/js_trust-pilot@1.5x.png"
                alt="Excellent 4.7 stars on Trustpilot"
                width="292px"
                height="25px"
                className="max-h-full"
              />
            </figure>
            <h1 className="block text-2.5xl leading-10 font-semibold">
              Smart Tools for
              <br />
              <span className="text-blue-700">Amazon Sellers</span>
            </h1>
            <p className="mb-6 pr-60 font-normal text-[12px]">
              Whether you want to start selling on Amazon or accelerate your
              brand’s growth, Jungle Scout has the industry-leading data, tools,
              and expertise to help you succeed.
            </p>
            <div>
              <Button
                label="Sign up now"
                href="/"
                bgColor="black"
                textColor="white"
                width="106"
                height="4"
              />
            </div>
          </div>
          {/* right-container */}
          <div className="max-w-[50%] px-4.5 basis-1/2">
            <div className="relative left-0 mr-auto top-1">
              {/* first-img */}
              <Transition
                as={Fragment}
                show={isTranslating}
                enter="transform transition duration-[1100ms]"
                enterFrom="translate-x-[-50%]"
                enterTo="translate-x-0"
                leave="transform duration-500 transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-10%]"
              >
                {/* Your content goes here */}
                <figure className="z-10 absolute top-28">
                  <img
                    src="https://www.junglescout.com/wp-content/uploads/2023/10/js_hero_net-profit-callout-1.png"
                    alt=""
                    className={`mr-auto translate-x-0 transition-transform`}
                    width="381px"
                    height="71px"
                  />
                  {/* first-img */}
                </figure>
              </Transition>

              {/* img-2 */}
              <Transition
                as={Fragment}
                show={isTranslating}
                enter="transform transition duration-[1100ms]"
                enterFrom="translate-x-[10%]"
                enterTo="translate-x-0"
                leave="transform duration-500 transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-10%]"
              >
                {/* Your content goes here */}
                <figure className="z-10 absolute top-48 left-8">
                  <img
                    src="https://www.junglescout.com/wp-content/uploads/2023/10/js_hero_keyword-search-callout-2.png"
                    alt="keyword-scratch-logo"
                    className="mr-auto "
                    width="385px"
                    height="74px"
                  />
                </figure>
              </Transition>
              {/* img-3 */}
              <Transition
                as={Fragment}
                show={isTranslating}
                enter="transform transition duration-[1100ms]"
                enterFrom="translate-x-[10%]"
                enterTo="translate-x-0"
                leave="transform duration-500 transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-10%]"
              >
                {/* Your content goes here */}
                <figure className="z-10 absolute top-[274px] left-8">
                  <img
                    src="https://www.junglescout.com/wp-content/uploads/2023/10/js_hero_review-automation-callout-3.png"
                    alt="review automation"
                    className="mr-auto"
                    width="385px"
                    height="74px"
                  />
                </figure>
              </Transition>
              <Transition
                as={Fragment}
                show={isTranslating}
                enter="transform transition duration-[1100ms]"
                enterFrom="translate-x-[10%]"
                enterTo="translate-x-0"
                leave="transform duration-500 transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-10%]"
              >
                {/* Your content goes here */}
                <figure className="mr-auto relative z-0 left-14 top-0">
                  <img
                    src="https://www.junglescout.com/wp-content/uploads/2023/10/js_hero_keyword-UI-1.png"
                    alt=""
                    className=" "
                    height="508px"
                    width="728px"
                  />
                </figure>
              </Transition>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
