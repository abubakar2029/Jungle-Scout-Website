import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Fragment } from "react";
import "material-icons/iconfont/material-icons.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import { FeatureActions } from "../../ActionTypes";
import TempAnime from "../../Pages/TempAnime/TempAnime"
interface Solution {
  name: string;
  href: string;
  description: string;
  icon?: string;
  new?: boolean;
}

interface Features {
  name: string;
  href: string;
  icon: string;
}

interface ResourcesNewSellers {
  name: string;
  href: string;
  description: string;
  updated?: boolean;
}

interface ResourcesTools {
  name: string;
  href: string;
}

interface ResourcesLearn {
  name: string;
  href: string;
  description?: string;
  updated?: boolean;
}

export const solutionsFor: Solution[] = [
  {
    name: "First-time Sellers",
    href: "##",
    description:
      "Everything you need to find a product & start your Amazon business",
  },
  {
    name: "Existing Amazon Sellers",
    description:
      "Tools to make managing your business easy, so you can focus on growing it",
    href: "##",
  },
  {
    href: "##",
    description:
      "Insights from the Amazon Marketplace tailored to the world's largest brands",
    name: "Global Brands and Retailers",
  },
];

export const solutionsRecomended: Solution[] = [
  {
    name: "Launch My Product",
    description:
      "Get your product up and running on Amazon with a successful launch",
    href: "/",
  },
  {
    href: "/",
    description:
      "Gain valuable business insights from your data to make key decisions faster",
    name: "Leverage My Amazon Data",
  },
  {
    href: "/",
    name: "Optimize My Product Listing",
    description:
      "Make your Amazon listings more profitable and beat the competition",
  },
];
export const solutionsRecomended2: Solution[] = [
  {
    href: "/",
    name: "Get More Reviews",
    description:
      "Earn more product reviews — the key to driving traffic and sales",
  },
  {
    href: "/",
    name: "Streamline My Business",
    description: "Simplify managing your Amazon business & save time",
  },
  {
    name: "NEW! Get to know AI Assist",
    description: "Explore the power of AI in even more Jungle Scout tools.",
    href: "/",
    new: true,
    icon: "https://www.junglescout.com/wp-content/uploads/2023/09/ai-Icon-small.svg",
  },
];

export const ResourcesLearn: ResourcesLearn[] = [
  {
    name: "Amazon Advertising Report",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    description: "Examines advertising campaign data from 2018-2023.",
  },
  {
    name: "Consumer Trends Report",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    description: "A quarterly study that explores changes in consumer behavior",
  },
  {
    name: "Halloween Shopping Trends",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    description:
      "Peek inside our data crypt to see Amazon's top-selling Halloween products",
  },
  {
    name: "State of the Amazon Seller",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    description: "Annual insights from real Amazon sellers",
  },
  {
    name: "Amazon Prime Day Report",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    description: "Sales insights & ad campaign data from Prime Day 2023",
  },
  {
    name: "Blog & Amazon News",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
  },
  {
    name: "View All Resources",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
  },
];
export const companyResources: ResourcesLearn[] = [
  {
    name: "About Jungle Scout",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
  },
  {
    name: "Careers",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    description: "Now hiring! View career opportunities",
  },
  {
    name: "Affliate Program",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    updated: true,
    description: "Now hiring! View career opportunities",
  },
];
export const communitySupportResources: ResourcesTools[] = [
  {
    name: "Help center",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
  },
  {
    name: "Contact Support",
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
  },
];
export const features2: Features[] = [
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-keyword-scout_dc83440bbeb1383e7013.svg",
    name: "Keyword Scout",
    href: `/features/${FeatureActions.KEYWORD_SCOUT}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-rank-tracker_ab72d65078991dd848fb.svg",
    name: "Rank Tracker",
    href: `/features/${FeatureActions.RANK_TRACKER}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-listing-builder_e113a044dc28eba5bc81.svg",
    name: "Listing Builder",
    href: `/features/${FeatureActions.LISTING_BUILDER}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-review-automation_20026c92995a0efc6c13.svg",
    name: "Review Automation",
    href: `/features/${FeatureActions.REVIEW_AUTOMATION}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-sales-analytics_35f407913d472194395f.svg",
    name: "Sales Analytics",
    href: `/features/${FeatureActions.SALES_ANALYTICS}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-ad-analytics_31b7088782ddf5402561.svg",
    name: "Advertising Analytics",
    href: `/features/${FeatureActions.ADVERTISING_ANALYTICS}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-alerts_572c16c6faba96ee51b7.svg",
    name: "Alerts",
    href: `/features/${FeatureActions.ALERTS}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-category-trends_38bae27ddb837ec26531.svg",
    name: "Category Trends",
    href: `/features/${FeatureActions.CATEGORY_TRENDS}`,
  },
];

export const features1: Features[] = [
  {
    name: FeatureActions.BROWSER_EXTENSION,
    href: `/features/${FeatureActions.BROWSER_EXTENSION}`,
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-product-extension_0dd32e803e9c94596f44.svg",
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-product-tracker_9f6be6df6fc0cc653f18.svg",
    name: "Product Tracker",
    href: `/features/${FeatureActions.PRODUCT_TRACKER}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-opp-finder_a8631af9f3c3a3acd637.svg",
    name: "Opportuniy Finder",
    href: `/features/${FeatureActions.OPPORTUNITY_FINDER}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-product-database_eb58ee142df1f4ae1c37.svg",
    name: "Product Database",
    href: `/features/${FeatureActions.PRODUCT_DATABASE}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-supplier-database_e0f441c8a709ce4e5e09.svg",
    name: "Supplier Database",
    href: `/features/${FeatureActions.SUPPLIER_DATABASE}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-academy_5cff49e0ae3c327c7203.svg",
    name: "Academy",
    href: `/features/${FeatureActions.ACADEMY}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-inventory-manager_6e79d2855d5402555766.svg",
    name: "Inventory manager",
    href: `/features/${FeatureActions.INVENTORY_MANGER}`,
  },
  {
    icon: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-promotions-campaigns_fc2f7c3ab58a91cb77a1.svg",
    name: "Promotions",
    href: `/features/${FeatureActions.PROMOTIONS}`,
  },
];

export const resourcesNewSellers: ResourcesNewSellers[] = [
  {
    name: "How to Sell on Amazon",
    href: `/features/${FeatureActions.CATEGORY_TRENDS}`,
    updated: true,
    description: "Get everything you need to know to start selling on Amazon",
  },
  {
    name: "Million Dollar Case Study",
    href: `/features/${FeatureActions.CATEGORY_TRENDS}`,
    description: "Follow along as we launch a product on Amazon, step-by-step",
  },
];

export const ResourcesTools: ResourcesTools[] = [
  {
    name: "Profit Calculator",
    href: `/features/${FeatureActions.CATEGORY_TRENDS}`,
  },
  {
    name: "Sales Estimator",
    href: `/features/${FeatureActions.CATEGORY_TRENDS}`,
  },
];

function Header() {
  let navLinks = [
    {
      name: "Solutions",
      path: "/solutions",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Resources",
      path: "/resources",
    },
    {
      name: "Enterprise",
      path: "/enterprise",
    },
  ];

  // searchbar-dialog
  let [referenceElement, setReferenceElement] = useState();

  let [isOpen, setIsOpen] = useState("");
  let [isTyping, setIsTyping] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  function SearchDialog() {}
  return (
    <header>
      <nav className="flex items-center justify-between xl:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-4.5  min-h-[60px]">
        <div className="flex ">
          {/* company-logo */}
          <div className="flex items-center h-full py-2">
            <Link to="/" className="">
              <img
                src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/logo-js-full_4ffc995cb339488dc88e.svg"
                alt=""
                height={30}
                width={130}
              />
            </Link>
          </div>
          {/* nav-links */}
          <div className=" h-full flex max-[992px]:hidden">
            {/* childs-start */}
            <div className="">
              <div className=" ml-7 inline-block">
                <Link
                  to=""
                  className="py-2 relative px-0.5 mx-1 lg:ml-0  inline-flex justify-center text-[14px] font-bold"
                  onMouseEnter={() => {
                    console.log("I am hovered");
                    setIsOpen("solutions");
                  }}
                  onMouseLeave={() => {
                    console.log("Hover End");
                    setIsOpen("");
                  }}
                >
                  Solutions
                  <ChevronDownIcon
                    className={`ml-2 h-5 w-5 transition-transform
                     ${
                       isOpen === "solutions" ? "-rotate-180" : "rotate-0"
                     } duration-300`}
                    aria-hidden="true"
                  />
                  <div className="absolute top-[92%] flex justify-center w-full h-full ">
                    {/*  */}
                    <div
                      className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                        isOpen === "solutions" ? "w-full" : "w-0"
                      }  ui-open: !duration-300`}
                    />
                  </div>
                </Link>
              </div>
              {/* on-hover-menu */}
              <section
                className={`absolute w-[960px] left-0 right-0 mx-auto z-20 bg-white ${
                  isOpen === "solutions" ? "flex" : "hidden"
                }`}
                onMouseEnter={() => {
                  console.log("I am hovered");
                  setIsOpen("solutions");
                }}
                onMouseLeave={() => {
                  console.log("Hover End");
                  setIsOpen("");
                }}
              >
                {/* bcz-it is going under hero-section therefore adding z-index */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 mb-6">
                      Solutions for...
                    </div>
                    <div>
                      {solutionsFor.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* second-33% */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 mb-6">
                      I want to...
                    </div>
                    <div>
                      {solutionsFor.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* third-33% */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] h-2 flex items-center font-bold uppercase text-gray-400 mb-6">
                      {/* Solutions for... */}
                    </div>
                    <div>
                      {solutionsRecomended2.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* 2nd-child-features */}
            <div className=" ">
              <div className=" ml-7 inline-block">
                <Link
                  to=""
                  className="py-2 relative px-0.5 mx-1 lg:ml-0 text-[14px] font-bold  inline-flex justify-center "
                  onMouseEnter={() => {
                    console.log("I am hovered");
                    setIsOpen("features");
                    console.log("Matching soltuions");
                    console.log(isOpen === "solutions");
                    console.log("Matching features");
                    console.log(isOpen === "features");
                  }}
                  onMouseLeave={() => {
                    console.log("Hover End");
                    setIsOpen("");
                  }}
                >
                  Features
                  <ChevronDownIcon
                    className={`ui-open:text-black ange-300/70  text-black ml-2 h-5 w-5 transition-transform
                     ${
                       isOpen === "features" ? "-rotate-180" : "rotate-0"
                     } duration-300`}
                    aria-hidden="true"
                  />
                  <div className="absolute top-[92%] flex justify-center w-full h-full ">
                    {/*  */}
                    <div
                      className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                        isOpen === "features" ? "w-full" : "w-0"
                      }  ui-open: !duration-300`}
                    />
                  </div>
                </Link>
              </div>
              {/* on-hover-menu */}
              <section
                className={`absolute w-[960px] left-0 right-0 mx-auto z-20 bg-white ${
                  isOpen === "features" ? "flex" : "hidden"
                }`}
                onMouseEnter={() => {
                  console.log("I am hovered");
                  setIsOpen("features");
                }}
                onMouseLeave={() => {
                  console.log("Hover End");
                  setIsOpen("");
                }}
              >
                {/* bcz-it is going under hero-section therefore adding z-index */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 mb-6">
                      Features
                    </div>
                    <div>
                      {features1.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition my-0.5 duration-150 ease-in-out flex py-4 px-2 border border-transparent hover:shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
                        >
                          <img src={item.icon} alt="" />
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* second-33% */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 mb-6">
                      I want to...
                    </div>
                    <div>
                      {solutionsFor.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* third-33% */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] h-2 flex items-center font-bold uppercase text-gray-400 mb-6">
                      {/* Solutions for... */}
                    </div>
                    <div>
                      {solutionsRecomended2.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* 3rd-child */}
            <div className=" ">
              <div className=" ml-7 inline-block">
                <Link
                  to="/pricing"
                  className="py-2 relative px-0.5 mx-1 lg:ml-0 text-[14px] font-bold  inline-flex justify-center "
                  onMouseEnter={() => {
                    console.log("I am hovered");
                    setIsOpen("pricing");
                  }}
                  onMouseLeave={() => {
                    console.log("Hover End");
                    setIsOpen("");
                  }}
                >
                  Pricing
                  <div className="absolute top-[92%] flex justify-center w-full h-full ">
                    <div
                      className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                        isOpen === "pricing" ? "w-full" : "w-0"
                      }  ui-open: !duration-300`}
                    />
                  </div>
                </Link>
              </div>
            </div>
            {/* 4th-child-features */}
            <div className=" ">
              <div className=" ml-7 inline-block">
                <Link
                  to=""
                  className="py-2 relative px-0.5 mx-1 lg:ml-0 text-[14px] font-bold inline-flex justify-center "
                  onMouseEnter={() => {
                    setIsOpen("resources");
                  }}
                  onMouseLeave={() => {
                    console.log("Hover End");
                    setIsOpen("");
                  }}
                >
                  Resources
                  <ChevronDownIcon
                    className={`ui-open:text-black ange-300/70  text-black ml-2 h-5 w-5 transition-transform
                     ${
                       isOpen === "resources" ? "-rotate-180" : "rotate-0"
                     } duration-300`}
                    aria-hidden="true"
                  />
                  <div className="absolute top-[92%] flex justify-center w-full h-full ">
                    {/*  */}
                    <div
                      className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                        isOpen === "resources" ? "w-full" : "w-0"
                      }  ui-open: !duration-300`}
                    />
                  </div>
                </Link>
              </div>
              {/* on-hover-menu */}
              <section
                className={`absolute w-[960px] left-0 right-0 mx-auto z-20 bg-white ${
                  isOpen === "resources" ? "flex" : "hidden"
                }`}
                onMouseEnter={() => {
                  console.log("I am hovered");
                  setIsOpen("resources");
                }}
                onMouseLeave={() => {
                  console.log("Hover End");
                  setIsOpen("");
                }}
              >
                {/* bcz-it is going under hero-section therefore adding z-index */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 mb-6">
                      Features
                    </div>
                    <div>
                      {features1.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition my-0.5 duration-150 ease-in-out flex py-4 px-2 border border-transparent hover:shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
                        >
                          <img src={item.icon} alt="" />
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* second-33% */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 mb-6">
                      I want to...
                    </div>
                    <div>
                      {solutionsFor.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* third-33% */}
                <div className="w-1/3 basis-1/3 flex flex-col">
                  <div className="flex flex-col pr-9">
                    <div className="text-[8px] h-2 flex items-center font-bold uppercase text-gray-400 mb-6">
                      {/* Solutions for... */}
                    </div>
                    <div>
                      {solutionsRecomended2.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none flex flex-col focus-visible:ring py-3 focus-visible:ring-orange-500/50"
                        >
                          <p className="font-bold text-[14px] text-gray-900 whitespace-nowrap">
                            {item.name}
                          </p>
                          <p className="mb-2 leading-4 font-medium text-[12px] text-gray-500">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* 5th-child */}
            <div className=" ">
              <div className=" ml-7 inline-block">
                <Link
                  to=""
                  className="py-2 relative px-0.5 mx-1 lg:ml-0 text-[14px] font-bold inline-flex justify-center "
                  onMouseEnter={() => {
                    console.log("I am hovered");
                    setIsOpen("enterprise");
                  }}
                  onMouseLeave={() => {
                    console.log("Hover End");
                    setIsOpen("");
                  }}
                >
                  Enterprise
                  <div className="absolute top-[92%] flex justify-center w-full h-full ">
                    <div
                      className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                        isOpen === "enterprise" ? "w-full" : "w-0"
                      }  ui-open: !duration-300`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right-search */}
        {/* right-container-starts */}
        <div className="flex max-[992px]:hidden">
          {/* search-icon */}
          <div className="relative flex items-center">
            <SearchIcon
              onClick={() => setIsActive(!isActive)}
              className={` cursor-pointer`}
            >
              Search
            </SearchIcon>
            <div
              className={
                isActive
                  ? "inline-block absolute right-0 top-7 w-250 p-2.5 bg-white"
                  : "hidden"
              }
            >
              <form
                action=""
                className={`rounded border-2 border-zinc-200
                  ${isTyping ? " shadow" : ""}
                `}
              >
                <input
                  type="search"
                  placeholder="Search"
                  className="p-1 leading-6 outline-none"
                  onClick={() => setIsTyping(true)}
                />
              </form>
            </div>
            {/* <Dialog
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  className="absolute"
                >
                  <Dialog.Panel className="">
                    <form action="" className="rounded-sm border inline-block">
                      <input type="search" placeholder="Search" />
                    </form>
                  </Dialog.Panel>
                </Dialog> */}
          </div>
          {/* login/signup */}
          <div className="flex items-center font-extrabold text-[12px]">
            <Link to="/login" className="text-[14px] !font-bold mx-2.5">
              Log In
            </Link>
            <Link
              to="/login"
              className="mx-2.5 text-white bg-orange-400 hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.15)] transition-shadow duration-300 focus:ring focus:ring-orange-300 py-1.5 px-4.5 rounded-sm text-xs"
            >
              Sign up
            </Link>
          </div>
        </div>
        {/* mobile-menu */}
        <div className="block min-[992px]:hidden">
          <MobileHeader />
        </div>
      </nav>
    </header>
  );
}

export default Header;
