import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import "material-icons/iconfont/material-icons.css";

function PricingFAQ() {
  let [selectedQuestions, setSelectedQuestion] = useState<number[]>([]);

  let pricingFAQ = [
    {
      query: "Is there a free trial?",
      answer:
        "While we do not offer a free trial, we do offer a 7-day money back guarantee on our standard plans. If you decide the product isn’t the right fit within 7 days we will give you a refund, no questions asked. Simply email us at support@junglescout.com to speak to the team.",
    },
    {
      query:
        "What is the difference between Jungle Scout and the browser extension?",
      answer: (
        <>
          <p>
            The main differences between Jungle Scout and the browser extension
            are where you access them and what functionality each tool offers.
          </p>
          <p>
            <span>Jungle Scout</span>is a web-based software where you can find
            features for product research, keywords, listings, and suppliers.
          </p>
          <p>
            <span>Our browser extension</span>
            is for Chrome and Firefox and pulls product data directly from
            Amazon search result pages into one dashboard.
          </p>
          <p>
            <span>Both tools</span>
            are included and available in your Jungle Scout account, whether you
            go Basic, Suite, or Professional.
          </p>
        </>
      ),
    },
    {
      query: "What marketplaces are supported?",
      answer: (
        <>
          <p>
            Jungle Scout is compatible with marketplaces in the United States,
            Canada, Mexico, United Kingdom, France, Germany, Italy, and Spain.
            Some features on Jungle Scout are currently limited to the U.S.
            market.
          </p>
          <p>
            Jungle Scout has partial compatibility with marketplaces in the
            Netherlands, Turkey, India, Saudi Arabia, United Arab Emirates,
            Japan, Australia, Singapore, and Brazil. For a detailed breakdown of
            each marketplace supported features, please click here.
          </p>
        </>
      ),
    },
    {
      query: "How many users can I have on my account?",
      answer: (
        <>
          <p>
            Jungle Scout works great for teams. We encourage you to add users to
            your account, each with their own login for added security.
          </p>
          <p> Our Basic plan is limited to 1 user.</p>
          <p>
            Our Suite plan includes 1 user, with the option to add as many users
            you need at $49/month per seat (or $459/yr on an annual plan).
          </p>
          <p>
            Our Professional plan includes 6 users, but you can add more at
            $49/month per seat (or $459/yr on an annual plan).
          </p>
        </>
      ),
    },
    {
      query: "What information will my authorized users have access to?",
      answer: (
        <>
          <p>
            As the primary user, you are in complete control of your account.
            Customize access to your plan’s features and data for additional
            users through our Team Management settings. Additional users will
            not have access to billing information, your credit card number, or
            be authorized to make changes to your account.
          </p>
          ,
          <p>
            All additional users join by invitation from you, and you can revoke
            their access at any time through your account settings.
          </p>
        </>
      ),
    },
    {
      query:
        "What’s the difference between Opportunity Finder and Niche Hunter?",
      answer: (
        <>
          <p>
            Opportunity Finder was released in Fall, 2019 to give Amazon sellers
            the best tool for finding profitable subcategories to sell in. It
            has a lot of the functionality of Niche Hunter, only more robust
            with more new features! It is currently available for the USA,
            Canada, Mexico and European marketplaces.
          </p>
          <p>
            Niche Hunter was introduced in 2016. It will remain available for
            existing customers (who signed up prior to October, 2019) for a
            short time.
          </p>
        </>
      ),
    },
  ];
  return (
    <div>
      <section className="bg-neutral-100 py-5">
        <h1 className="text-center mb-14 leading-4 text-32 font-bold px-4.5">
          Frequently asked questions
        </h1>
        <div>
          {pricingFAQ.map((query, indexKey) => {
            return (
              <Disclosure key={indexKey} as={"div"}>
                {({ open }) => (
                  <div
                    className={`w-full text-left  py-[35px] px-7.5 max-w-[1000px] ui-not-open:border-b ui-open:bg-white ui-not-open:bg-transparent ui-open:border mx-auto 
                    `}
                  >
                    <Disclosure.Button
                      className=" w-full font-bold text-left gap-x-1 flex justify-between "
                      onFocus={() => {
                        let index = selectedQuestions.findIndex(
                          (question) => question === indexKey
                        );

                        if (index === -1) {
                          setSelectedQuestion(() => [
                            ...selectedQuestions,
                            indexKey,
                          ]);
                        }
                        console.log(indexKey, open);
                        console.log("hover", indexKey);
                      }}
                    >
                      {query.query}
                      <span className="ml-1 relative flex justify-center items-center">
                        <i className="material-icons !leading-[0]">remove</i>
                        <i
                          className={`material-icons !leading-[0] absolute transition-transform duration-500 z-10 ${
                            open ? "rotate-90 transform origin-center" : ""
                          }`}
                        >
                          remove
                        </i>
                      </span>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className={`mt-4`}>
                        {query.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default PricingFAQ;
