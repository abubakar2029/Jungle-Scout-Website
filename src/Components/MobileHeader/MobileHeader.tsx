import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  let [isOpen, setIsOpen] = useState("");
  const [heading, setHeading] = useState("");
  const [headingRoute, setHeadingRoute] = useState("");
  return (
    <>
    <button onClick={()=>setOpen(true)}>
    <i className="material-icons pr-3 pl-2">menu</i>

    </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400/100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* main-container */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="pointer-events-none flex fixed inset-y-0 right-0  max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              {/* menu-start */}
              <Dialog.Panel className="pointer-events-auto bg-white flex flex-col relative w-screen max-w-sm">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {/* header-of-menu */}
                  <div className="flex justify-between py-3 px-4 border-b border-neutral-300">
                    <Link to={`${headingRoute ? headingRoute : "/"}`}>
                      {heading ? (
                        heading
                      ) : (
                        <img
                          src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/js-logo_ed549a3c85eb1f115998.png"
                          alt=""
                          width={32}
                          height={32}
                        />
                      )}
                    </Link>
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <i className="material-icons">clear</i>
                    </button>
                  </div>
                </Transition.Child>
                {/* (subDiv)-main-nav-links */}
                <div className="flex flex-col py-3 px-4.5">
                  {/* search */}
                  <div className="flex border-2 mx-1 rounded border-zinc-200 h-[calc(1.5rem+0.5rem+4px)] mb-3 focus:shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                    <form action="" className="flex items-center justify-start">
                      <i className="material-icons pr-3 pl-2">search</i>
                      <input
                        type="text"
                        placeholder="Search"
                        className="h-full !border-none"
                      />
                    </form>
                  </div>
                  {/* 1st-nav-link */}
                  <Link
                    to=""
                    className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
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
                      className={`ml-2 h-5 w-5
                      -rotate-90
                     `}
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
                  {/* 2nd-nav */}
                  <Link
                    to=""
                    className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
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
                      className={`ui-open:text-black ange-300/70  text-black ml-2 h-5 w-5 -rotate-90`}
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
                  {/* 3rd-nav */}

                  <Link
                    to="/pricing"
                    className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
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
                  {/* 4th-nav-link */}
                  <Link
                    to=""
                    className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
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
                      className={`ui-open:text-black ange-300/70  text-black ml-2 h-5 w-5 -rotate-90`}
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
                  {/* 5th-link */}
                  <Link
                    to=""
                    className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
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

                {/* login/signup */}
                <div className="flex flex-col px-4 mt-auto mb-3">
                  <Link
                    to="/login"
                    className="rounded text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.15)] transition-shadow duration-300 focus:ring focus:ring-orange-300 py-1.5 px-4.5 text-[12px] font-extrabold text-center"
                  >
                    Sign up today
                  </Link>
                  <Link to="/login" className="text-[12px] font-bold mt-4">
                    Log In
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
</>
  );
}

export default MobileHeader;
