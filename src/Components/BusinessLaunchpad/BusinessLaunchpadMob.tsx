import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

import { Link } from "react-router-dom";

export default function Business_Launchpad_Modal() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative h-[80dvh] transform overflow-y-scroll rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-6 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-[calc(1.225rem+0.9%)] text-center font-bold text-base text-gray-900"
                    >
                      Jungle Scout powers ecommerce
                    </Dialog.Title>

                    {/* start maping from */}
                    <div className="mt-5 text-[20px]  text-gray-400 flex justify-center ">
                      <button className="px-9 py-4 font-bold border-b-2  text-orange-500 border-orange-500 ">
                        Start
                      </button>
                      <button className="px-9 py-4 font-bold border-b-2  hover:text-orange-500 hover:border-orange-500 ">
                        Grow
                      </button>
                      <button className="px-9 py-4 font-bold border-b-2  hover:text-orange-500 hover:border-orange-500 ">
                        Accelerate
                      </button>
                    </div>
                    <div className="my-8 font-extrabold text-[1.8rem] text-center">
                      Start selling
                    </div>

                    <img
                      className="shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                      src="https://www.junglescout.com/wp-content/uploads/2022/03/hp-start-business-asset-1x.png"
                      alt=""
                    />
                    <img
                      className="my-8 "
                      src="https://www.junglescout.com/wp-content/uploads/2022/03/JS.svg"
                      alt=""
                    />
                    <div className="font-bold ">
                      New to selling on Amazon? You’re in the right place.
                    </div>

                    <ul className="">
                      <li className="my-4 pl-8">
                        Find and track winning products.
                      </li>
                      <li className="my-4 pl-8">
                        Discover high-value keywords
                      </li>
                      <li className="my-4 pl-8">
                        Source suppliers for products
                      </li>
                      <li className="my-4 pl-8">
                        Create and optimize product listings
                      </li>
                      <li className="my-4 pl-8">
                        Learn from experts in exclusive video tutorials
                      </li>
                    </ul>

                    <button className="btn font-extrabold text-[white] bg-orange-500 max-md:w-full max-md:mx-0 mx-6 py-4 px-8 rounded-sm">
                      Learn More
                    </button>
                    <button className="btn font-extrabold my-5 text-orange-500 max-md:w-full max-md:mx-0 mx-6 py-4 px-8 rounded-sm border border-orange-500">
                      View Plans
                    </button>

                    <div className="relative p-8 text-[1.25rem] font-bold bg-gray-200">
                      <img
                        className="absolute -top-3"
                        src="https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/testimonials/quote-orange_c1a4be12566a9a121f4f.svg"
                        alt=""
                      />
                      <p>
                        You need to learn first before you jump into FBA. Jungle
                        Scout offers those tools and education that you need.
                      </p>
                      <div className="font-normal text-[0.9rem] mt-3">
                        {" "}
                        <span className="font-semibold">Maricia Magaña</span> |
                        Founder and CEO of LITTIL
                      </div>
                      <Link
                        to="/"
                        className="font-semibold text-[0.9rem] text-blue-600"
                      >
                        {" "}
                        {"Read their success story >"}
                      </Link>
                    </div>

                    <p className="mt-8 mb-4 font-bold text-[1.1rem] text-gray-600">
                      RESOURCES
                    </p>

                    <Link
                      to="/"
                      className="font-bold text-[1.1rem] text-blue-600"
                    >
                      {" "}
                      Million Dollar Case Study
                    </Link>
                    <p className="text-[1.05rem] pb-5">
                      Follow along in this video series as the Jungle Scout team
                      launches a real private label product on <br /> Amazon.
                    </p>

                    <Link
                      to="/"
                      className="font-bold text-[1.1rem] text-blue-600"
                    >
                      {" "}
                      How to Sell on Amazon 2023
                    </Link>
                    <p className="text-[1.05rem] pb-5">
                      Learn to launch your own private label FBA business with
                      our in-depth, step-by-step guide.
                    </p>
                    {/* start maping to */}
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-3 inline-flex justify-center absolute text-[1.2rem] top-1 right-3 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  X
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
