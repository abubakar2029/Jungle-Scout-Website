import { Fragment, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  solutionsFor,
  solutionsRecomended,
  solutionsRecomended2,
  features1,
  features2,
  resourcesNewSellers,
} from "../../Components/Header/Header";
import { NavbarActions } from "../../ActionTypes";
import "./style.css"
export default function Example() {
  const [open, setOpen] = useState(false);
  const [headingRoute, setHeadingRoute] = useState("");
  const [heading, setHeading] = useState("");
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  let [isOpen, setIsOpen] = useState("");
  const [uiOpen, setUiOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <i className="material-icons pr-3 pl-2">menu</i>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          {/* Background Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* menu container */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md bg-white overflow-y-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-w-[3px] scrollbar-h-[20%] scrollbar-thumb-rounded-full">
                    {/* Header */}
                    <div className="flex justify-between py-3 px-4 border-b border-neutral-300">
                      <Link
                        to={`${headingRoute ? headingRoute : "/"}`}
                        className={`${
                          heading ? "font-extrabold flex items-center" : ""
                        }`}
                        onClick={() => {
                          setSubMenuOpen(false);
                          setHeading("");
                        }}
                      >
                        {heading ? (
                          <>
                            <i className="material-icons">
                              keyboard_arrow_left
                            </i>
                            <span>{heading}</span>
                          </>
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
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <i className="material-icons">clear</i>
                      </button>
                    </div>

                    {/* main-body */}
                    <div className="flex flex-col py-3 px-4.5">
                      {/* search */}
                      <div className="relative flex border-2 mx-1 rounded border-zinc-200 h-[calc(1.5rem+0.5rem+4px)] mb-3 focus:shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                        <form
                          action=""
                          className="flex items-center justify-start"
                        >
                          <i className="material-icons pr-3 pl-2 ">search</i>
                          <input
                            type="text"
                            placeholder="Search"
                            className="h-full !border-none focus:outline-none"
                          />
                        </form>
                      </div>

                      {/* middle-div */}
                      <div
                        className={`relative ${
                          subMenuOpen ? "overflow-y-auto" : ""
                        } `}
                      >
                        {/* Nav-Links */}
                        <div className="flex flex-col">
                          {/* Solution */}
                          <Link
                            to=""
                            className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between leading-[0]"
                            onMouseEnter={() => {
                              setIsOpen("solutions");
                            }}
                            onMouseLeave={() => {
                              setIsOpen("");
                            }}
                            onClick={() => {
                              setHeading(NavbarActions.SOLUTIONS);
                              setSubMenuOpen(true);
                            }}
                          >
                            Solutions
                            <ChevronDownIcon
                              className={`ml-2 h-5 w-5
                      -rotate-90
                     `}
                              aria-hidden="true"
                            />
                          </Link>
                          {/* features */}
                          <Link
                            to=""
                            className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
                            onMouseEnter={() => {
                              // console.log("I am hovered");
                              setIsOpen("features");
                              console.log("Matching soltuions");
                              console.log(isOpen === "solutions");
                              console.log("Matching features");
                              console.log(isOpen === "features");
                            }}
                            onMouseLeave={() => {
                              // console.log("Hover End");
                              setIsOpen("");
                            }}
                            onClick={() => {
                              setHeading(NavbarActions.FEATURES);
                              setSubMenuOpen(true);
                            }}
                          >
                            Features
                            <ChevronDownIcon
                              className={`ui-open:text-black ange-300/70  text-black ml-2 h-5 w-5 -rotate-90`}
                              aria-hidden="true"
                            />
                            {/* <div className="absolute top-[92%] flex justify-center w-full h-full ">
                              <div
                                className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                                  isOpen === "features" ? "w-full" : "w-0"
                                }  ui-open: !duration-300`}
                              />
                            </div> */}
                          </Link>
                          {/* Pricing */}

                          <Link
                            to="/pricing"
                            className="py-6 relative border-b font-extrabold border-gray-300 lg:ml-0  flex justify-between"
                            onMouseEnter={() => {
                              // console.log("I am hovered");
                              setIsOpen("pricing");
                            }}
                            onMouseLeave={() => {
                              // console.log("Hover End");
                              setIsOpen("");
                            }}
                            onClick={() => {
                              setHeading(NavbarActions.PRICING);
                            }}
                          >
                            Pricing
                            {/* <div className="absolute top-[92%] flex justify-center w-full h-full ">
                              <div
                                className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                                  isOpen === "pricing" ? "w-full" : "w-0"
                                }  ui-open: !duration-300`}
                              />
                            </div> */}
                          </Link>
                          {/* Resources */}
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
                            onClick={() => {
                              setHeading(NavbarActions.RESOURCES);
                              setSubMenuOpen(true);
                            }}
                          >
                            Resources
                            <ChevronDownIcon
                              className={`ui-open:text-black ange-300/70  text-black ml-2 h-5 w-5 -rotate-90`}
                              aria-hidden="true"
                            />
                            {/* <div className="absolute top-[92%] flex justify-center w-full h-full ">
                              <div
                                className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                                  isOpen === "resources" ? "w-full" : "w-0"
                                }  ui-open: !duration-300`}
                              />
                            </div> */}
                          </Link>
                          {/* Enterprise */}
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
                            onClick={() => {
                              setHeading(NavbarActions.ENTERPRISE);
                            }}
                          >
                            Enterprise
                            {/* <div className="absolute top-[92%] flex justify-center w-full h-full ">
                              <div
                                className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                                  isOpen === "enterprise" ? "w-full" : "w-0"
                                }  ui-open: !duration-300`}
                              />
                            </div> */}
                          </Link>
                          {/* Company */}
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
                            onClick={() => {
                              setHeading(NavbarActions.COMPANY);
                            }}
                          >
                            Company
                            {/* <div className="absolute top-[92%] flex justify-center w-full h-full ">
                              <div
                                className={`h-[3px] rounded-md bg-orange-500   transition-all ${
                                  isOpen === "enterprise" ? "w-full" : "w-0"
                                }  ui-open: !duration-300`}
                              />
                            </div> */}
                          </Link>
                        </div>

                        {/* sub-menu-divs */}
                        <Transition
                          // as={`div`}
                          show={subMenuOpen}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute z-10 min-h-full w-full inset-y-0 right-0 transition-opacity bg-white overflow-y-scroll pr-3 scrollbar scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-w-[3px] scrollbar-thumb-rounded-full">
                            {/* SOLUTIONS-SECTION */}
                            <div
                              className={`${
                                heading === NavbarActions.SOLUTIONS
                                  ? "block"
                                  : "hidden"
                              }`}
                            >
                              {/* top-section */}
                              <div className="flex flex-col ">
                                <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 py-6 border-b border-gray-300">
                                  Solutions for...
                                </div>
                                {solutionsFor.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="border-b border-gray-300 py-6"
                                    >
                                      <Link to={item.href}>
                                        <h2 className="font-extrabold block">
                                          {item.name}
                                        </h2>
                                        <p className="pt-1 max-w-[240px] text-[12px] leading-5">
                                          {item.description}
                                        </p>
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                              {/* bottom-2nd-section */}
                              <div className="flex flex-col ">
                                <div className="text-[8px] flex items-center font-bold uppercase text-gray-400 py-6 border-b border-gray-300">
                                  I want to...
                                </div>
                                {solutionsRecomended.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="border-b border-gray-300 py-6"
                                    >
                                      <Link to={item.href}>
                                        <h2 className="font-extrabold block">
                                          {item.name}
                                        </h2>
                                        <p className="pt-1 max-w-[240px] text-[12px] leading-5">
                                          {item.description}
                                        </p>
                                      </Link>
                                    </div>
                                  );
                                })}
                                {solutionsRecomended2.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="border-b border-gray-300 py-6"
                                    >
                                      <Link to={item.href}>
                                        <h2
                                          className={`flex items-center font-extrabold ${
                                            item.new ? "text-orange-500" : ""
                                          }`}
                                        >
                                          {item.icon ? (
                                            <span className="pr-1">
                                              <img src={item.icon} alt="" />
                                            </span>
                                          ) : null}

                                          {item.name}
                                        </h2>
                                        <p className="max-w-[240px] text-[12px] leading-5">
                                          {item.description}
                                        </p>
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            {/* FEATURES-SECTION */}
                            <div
                              className={`${
                                heading === NavbarActions.FEATURES
                                  ? "block"
                                  : "hidden"
                              }`}
                            >
                              <div>
                                <Disclosure>
                                  <div
                                    className={`w-full text-left  py-[35px] max-w-[1000px] border-b border-y-gray-300`}
                                  >
                                    <Disclosure.Button
                                      className="text-left flex justify-between "
                                      onClick={() => {
                                        setUiOpen(!uiOpen);
                                        // let index = selectedQuestions.findIndex(
                                        //   (question) => question === indexKey
                                        // );
                                        // if (index === -1) {
                                        //   setSelectedQuestion(() => [
                                        //     ...selectedQuestions,
                                        //     indexKey,
                                        //   ]);
                                        // }
                                      }}
                                    >
                                      <div className="flex">
                                        <figure className="basis-[20%]">
                                          <img
                                            src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/navigation/icon-product-js_f3e3620a030548d09c1f.svg"
                                            alt=""
                                            className="!w-6 !h-6"
                                          />
                                        </figure>
                                        <div className="pl-4">
                                          <h1 className="font-extrabold leading-3">
                                            Jungle Scout
                                          </h1>
                                          <p className="pt-2 leading-5">
                                            Web-based software suite to start &
                                            grow your Amazon business
                                          </p>
                                        </div>
                                      </div>
                                      {/* <div className="w-14 bg-blue-500 flex items-center my-auto"> */}
                                      <span className=" flex justify-center items-center my-auto">
                                        <i className="material-icons !leading-[0]">
                                          remove
                                        </i>
                                        <i
                                          className={`material-icons !leading-[0] absolute transition-transform duration-500 z-10
                                        ${
                                          uiOpen
                                            ? "rotate-90 transform origin-center"
                                            : ""
                                        }
                                        `}
                                        >
                                          remove
                                        </i>
                                      </span>
                                      {/* </div> */}
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
                                        {features1.map((item, index) => {
                                          return (
                                            <Link
                                              key={index}
                                              to={item.href}
                                              className="flex items-center py-3 pl-4.5"
                                              onClick={() => {
                                                setOpen(false);
                                                setSubMenuOpen(false);
                                              }}
                                            >
                                              <img
                                                src={item.icon}
                                                alt=""
                                                width={16}
                                                className="!h-[16px]"
                                              />
                                              <h3 className="text-[14px] pl-4 font-extrabold">
                                                {item.name}
                                              </h3>
                                            </Link>
                                          );
                                        })}
                                      </Disclosure.Panel>
                                    </Transition>
                                  </div>
                                </Disclosure>
                              </div>
                              {/* bottom-div-new-ai */}
                              <div className="mt-8 flex flex-col text-[12px]">
                                <div className="text-orange-500 font-bold !text-[14px]">
                                  <figure>
                                    <img
                                      src="https://www.junglescout.com/wp-content/uploads/2023/09/Icon-1.png"
                                      alt=""
                                      width={25}
                                      height={25}
                                      className="mb-2"
                                    />
                                  </figure>
                                  <h3>NEW! AI Assisst</h3>
                                </div>
                                <p>
                                  We've added the power of AI to even more
                                  tools.
                                </p>
                                <Link to="" className="text-blue-700">
                                  Learn more
                                </Link>
                              </div>
                            </div>
                            {/* RESOURCES_SECTION */}
                            <div
                              className={`${
                                heading === NavbarActions.RESOURCES
                                  ? "block"
                                  : "hidden"
                              }`}
                            >
                              <Disclosure>
                                <div
                                  className={`w-full text-left  py-[35px] max-w-[1000px] border-b border-y-gray-300`}
                                >
                                  <Disclosure.Button
                                    className="text-left flex justify-between "
                                    onClick={() => {
                                      setUiOpen(!uiOpen);
                                      // let index = selectedQuestions.findIndex(
                                      //   (question) => question === indexKey
                                      // );
                                      // if (index === -1) {
                                      //   setSelectedQuestion(() => [
                                      //     ...selectedQuestions,
                                      //     indexKey,
                                      //   ]);
                                      // }
                                    }}
                                  >
                                    <div className="flex">
                                      <div className="pl-4">
                                        <h1 className="font-extrabold leading-3">
                                          Learn
                                        </h1>
                                        <p className="pt-2 leading-5">
                                          Web-based software suite to start &
                                          grow your Amazon business
                                        </p>
                                      </div>
                                    </div>
                                    <span className=" flex justify-center items-center my-auto">
                                      <i className="material-icons !leading-[0]">
                                        remove
                                      </i>
                                      <i
                                        className={`material-icons !leading-[0] absolute transition-transform duration-500 z-10
                                        ${
                                          uiOpen
                                            ? "rotate-90 transform origin-center"
                                            : ""
                                        }
                                        `}
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
                                      {resourcesNewSellers.map(
                                        (item, index) => {
                                          return (
                                            <Link
                                              key={index}
                                              to={item.href}
                                              className="flex items-center py-3 pl-4.5"
                                              onClick={() => {
                                                setOpen(false);
                                                setSubMenuOpen(false);
                                              }}
                                            >
                                              {/* <img
                                              src={item.icon}
                                              alt=""
                                              width={16}
                                              className="!h-[16px]"
                                            /> */}
                                              <h3 className="text-[14px] pl-4 font-extrabold">
                                                {item.name}
                                              </h3>
                                            </Link>
                                          );
                                        }
                                      )}
                                    </Disclosure.Panel>
                                  </Transition>
                                </div>
                              </Disclosure>
                            </div>
                          </div>
                        </Transition>
                      </div>

                      {/* login/signup */}
                      <div className="flex flex-col mt-auto pt-6 mb-3">
                        <Link
                          to="/login"
                          className="rounded text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.15)] transition-shadow duration-300 focus:ring focus:ring-orange-300 py-1.5 px-4.5 text-[12px] font-extrabold text-center"
                        >
                          Sign up today
                        </Link>
                        <Link
                          to="/login"
                          className="text-[12px] font-bold mt-4"
                        >
                          Log In
                        </Link>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
