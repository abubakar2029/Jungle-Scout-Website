import React from "react";
// Social-Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// other links
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  let termLinks = [
    {
      name: "Privacy Center",
      path: "/privacy-policy",
      isBold: true,
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms of Use",
      path: "/terms-of-use",
    },
  ];
  let socialIcons = [
    "FacebookIcon",
    "TwitterIcon",
    "InstagramIcon",
    "YouTubeIcon",
    "LinkedInIcon",
  ];
  let footerContent = [
    {
      title: "Products",
      content: [
        {
          name: "Jungle Scout",
          path: "/jungle-scout",
        },
        {
          name: "Jungle Scout Cobalt",
          path: "/jungle-scout-cobalt",
        },

        {
          name: "Downstream",
          path: "/downstream",
        },
      ],
    },
    {
      title: "Pricing",
    },
    {
      title: "Solutions",
      content: [
        {
          name: "First Time Seller",
          path: "/first-time-seller",
        },
        {
          name: "Existing Amazon Seller",
          path: "/existing-amazon-seller",
        },

        {
          name: "Brand or Agency",
          path: "/brand-agency",
        },

        {
          name: "Launch My Product",
          path: "/launch-my-oroduct",
        },

        {
          name: "Get Reviews",
          path: "/brand-agency",
        },

        {
          name: "Streamline My Business",
          path: "/brand-agency",
        },
      ],
    },
    {
      title: "Features",
      content: [
        {
          name: "Browser Extension",
          path: "/first-time-seller",
        },
        {
          name: "Keyword Scout",
          path: "/existing-amazon-seller",
        },

        {
          name: "Product Tracker",
          path: "/brand-agency",
        },

        {
          name: "Rank Tracker",
          path: "/launch-my-oroduct",
        },

        {
          name: "Opportunity Finder",
          path: "/brand-agency",
        },

        {
          name: "Listing Builder ",
          path: "/brand-agency",
        },
        {
          name: "Product Database",
          path: "/brand-agency",
        },
        {
          name: "Review Automation",
          path: "/brand-agency",
        },
        {
          name: "Supplier Database",
          path: "/brand-agency",
        },
        {
          name: "Sales Analytics",
          path: "/brand-agency",
        },
        {
          name: "Academy",
          path: "/brand-agency",
        },
        {
          name: "Advertising Analytics",
          path: "/brand-agency",
        },
        {
          name: "Inventory Manager",
          path: "/brand-agency",
        },
        {
          name: "Alerts",
          path: "/brand-agency",
        },
        {
          name: "Promotions",
          path: "/brand-agency",
        },
        {
          name: "Category Trends",
          path: "/brand-agency",
        },
      ],
    },
    {
      title: "Rsources",
      content: [
        {
          name: "How to sell on Amazon",
          path: "/first-time-seller",
        },
        {
          name: "Million Dollar Case Study",
          path: "/existing-amazon-seller",
        },

        {
          name: "Profit Calculator",
          path: "/brand-agency",
        },

        {
          name: "Sales Estimator",
          path: "/launch-my-oroduct",
        },

        {
          name: "Amazon Advertising Report",
          path: "/brand-agency",
        },

        {
          name: "Consumer Trends Report",
          path: "/brand-agency",
        },
        {
          name: "Seasonal Advertising Report",
          path: "/brand-agency",
        },
        {
          name: "State of the Amazon Seller",
          path: "/brand-agency",
        },
        {
          name: "Amazon Prime Day Report",
          path: "/brand-agency",
        },
        {
          name: "Blog & Amazon News",
          path: "/brand-agency",
        },
        {
          name: "View All Resources",
          path: "/brand-agency",
        },
      ],
    },
    {
      title: "Support and Community",
      content: [
        {
          name: "Help Center",
          path: "/first-time-seller",
        },
        {
          name: "Contact Us",
          path: "/existing-amazon-seller",
        },
      ],
    },
    {
      title: "Company",
      content: [
        {
          name: "About Us",
          path: "/first-time-seller",
        },
        {
          name: "Leadership",
          path: "/existing-amazon-seller",
        },

        {
          name: "Giving Back",
          path: "/brand-agency",
        },

        {
          name: "Careers",
          path: "/launch-my-oroduct",
        },

        {
          name: "Affliate Programs",
          path: "/brand-agency",
        },

        {
          name: "Press",
          path: "/brand-agency",
        },
      ],
    },
  ];

  // region-list-display
  let [displayList, setDisplayList] = useState(false);
  return (
    <footer className="bg-neutral-100 w-full font-mont">
      <div className="w-full max-w-[1200px] mx-auto px-4.5">
        {/* top-container */}
        <div className="flex pt-12 flex-wrap justify-evenly leading-9">
          {/* lg:h-702 md:h-1500 */}
          {/* 1st container */}
          <div className="px-4.5 max-lg:w-full pb-6">
            <div></div>

            {/* <div className="flex text-xs border-stone-300 border-[1px]"> */}
            <div className="flex text-xs ">
              {/* left-icon */}
              <span className="border-[1px] border-stone-300">
                <LanguageIcon fontSize="small"/>
              </span>
              {/* right-div */}
              <div
                className="w-120 h-26 lg:w-135 relative"
                onMouseOver={() => setDisplayList(true)}
                onMouseOut={() => setDisplayList(false)}
              >
                <div className="px-7 w-full cursor-pointer flex justify-between items-center hover:bg-white hover:outline-1 outline-orange-500 hover:outline border-l-transparent border-stone-300 border-[1px]">
                  <a href="https://www.junglescout.com/t/home" className="">
                    USA
                  </a>
                  <span className="">
                    <ArrowDropDownIcon />
                  </span>
                </div>
                <ul
                  className={
                    displayList
                      ? "absolute border-x-[1px] border-t-[1px] border-stone-300 top-[27px] -left-[1px] w-136 bg-neutral-100"
                      : "hidden"
                  }
                >
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/fr/">France</a>
                  </li>
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/de/">Deutschland</a>
                  </li>
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/it/">Italia</a>
                  </li>
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/es/">España</a>
                  </li>
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/in/">India</a>
                  </li>
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/jp/">Japan</a>
                  </li>
                  <li className="p-7 border-b-[1px] border-stone-300 w-full cursor-pointer hover:py-1.5 hover:bg-white hover:outline-1 outline-orange-500 hover:outline">
                    <a href="https://www.junglescout.com/cn/">中国</a>
                  </li>
                </ul>
                {/* </li> */}
                {/* </ul> */}
              </div>
            </div>
            <div className="mt-4 block">
              <h1 className="text-base font-bold mb-1">Need help?</h1>
              <Link
                to=""
                className="underline text-blue-700 hover:text-black mb-4"
              >
                Visit our help Center
              </Link>
            </div>
            <div>
              <img
                src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/badge-emerald_91a1483b997d56626ac8.png"
                alt="Amazon Emerald Badge"
                className="mb-8 block w-44"
              />
              <img
                src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/badge-aws_0d0eaee069c4d60705fe.png"
                alt="Amazon Web Services Badge"
                className="block w-44"
              />
            </div>
          </div>

          {/* 2nd container */}
          {/* <div className="px-4.5 h-full flex flex-col gap-x-6 flex-wrap"> */}
            {footerContent.map((section) => {
              return (
                <div className="mb-4 flex flex-col flex-wrap px-4.5">
                  <h1 className="font-bold text-xs">{section.title}</h1>
                  {section.content?.map((obj) => {
                    return <Link to={obj.path}>{obj.name}</Link>;
                  })}
                </div>
              );
            })}
          {/* </div> */}
        </div>

        {/* Bottom Container */}
        <div className="border-t-[1px] border-zinc-300 py-3 flex max-md:flex-col">
          {/* Social Links */}
          <div className="flex flex-nowrap w-1/5 justify-between mb-4 max-md:-w-full h-5">
            <a
              href="https://www.facebook.com/amazonjunglescout/"
              className="h-3 w-3"
            >
              <FacebookIcon sx={{ fontSize: 14 }}>Facebook</FacebookIcon>
            </a>
            <a href="https://twitter.com/junglescout" className="h-3 w-3">
              <TwitterIcon sx={{ fontSize: 14 }}></TwitterIcon>
            </a>
            <a
              href="https://www.instagram.com/junglescout_/"
              className="h-3 w-3"
            >
              <InstagramIcon sx={{ fontSize: 14 }}></InstagramIcon>
            </a>
            <a
              href="https://www.youtube.com/channel/UC0iJ3ldvDUGiUPfGiiifzVQ"
              className="h-3 w-3"
            >
              <YouTubeIcon sx={{ fontSize: 14 }}></YouTubeIcon>
            </a>
            <a
              href="https://www.linkedin.com/company/junglescout/about/"
              className="h-3 w-3"
            >
              <LinkedInIcon sx={{ fontSize: 14 }}></LinkedInIcon>
            </a>
          </div>

          {/* Right Side Container */}
          <div className="text-xs flex max-sm:flex-col break-keep w-3/4 justify-end max-md:flex-col">
            {termLinks.map((obj) => {
              return (
                <Link
                  to={obj.path}
                  className={
                    obj.isBold
                      ? "font-bold lg:mr-14 sm:mr-12 md:mb-0 mb-4 "
                      : "lg:mr-14 sm:mr-12 mb-4 md:mb-0"
                  }
                >
                  {obj.name}
                </Link>
              );
            })}
            <p>Copyright2023.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
