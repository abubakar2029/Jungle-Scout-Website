import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

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
  let [isOpen, setIsOpen] = useState(false);
  let [isTyping, setIsTyping] = useState(false);
  function SearchDialog() {}
  return (
    <header className="w-full z-10 fixed top-0 flex justify-around">
      <div className="w-full max-w-[1200px] px-4.5 mx-auto">
        <nav className="flex min-h-[60px] items-center">
          {/* company-logo */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="30"
              viewBox="0 0 200 30"
              aria-labelledby="junglescout-header-logo"
            >
              <desc id="junglescout-header-logo">Jungle Scout logo</desc>
              <g fill="none" fill-rule="nonzero">
                <path
                  fill="#000"
                  d="M0 21.187l2.628-2.84c1.335 1.792 2.67 2.808 4.574 2.808 2.143 0 3.603-1.489 3.603-4.668V1h4.12v15.624c0 2.806-.81 4.902-2.14 6.289C11.455 24.3 9.539 25 7.269 25c-3.504.01-5.776-1.681-7.269-3.813zM19.9 18.227V7h4.057v10.024c0 2.75 1.379 4.276 3.788 4.276 2.344 0 3.987-1.604 3.987-4.354V7h4.089v17.643h-4.089v-2.75c-1.149 1.67-2.78 3.107-5.53 3.107-3.99.01-6.302-2.665-6.302-6.773zM39.801 6.369h4.065v2.704C45.017 7.436 46.652 6 49.406 6c3.996 0 6.315 2.673 6.315 6.747V24h-4.064V13.983c0-2.748-1.382-4.31-3.796-4.31-2.351 0-3.995 1.638-3.995 4.377V24H39.8V6.369zM60.554 27.936l1.478-2.985c1.87 1.15 3.804 1.838 6.166 1.838 3.543 0 5.477-1.838 5.477-5.316v-1.35c-1.442 1.871-3.246 3.183-6.1 3.183-4.067 0-7.874-3.02-7.874-8.099v-.07C59.701 10.02 63.54 7 67.575 7c2.924 0 4.724 1.35 6.073 2.954V7.367h3.964v13.78c0 2.924-.754 5.084-2.198 6.524-1.574 1.574-4.002 2.328-7.117 2.328a14.924 14.924 0 0 1-7.743-2.063zm13.155-12.763v-.065c0-2.821-2.328-4.756-5.084-4.756-2.755 0-4.922 1.903-4.922 4.756v.065c0 2.824 2.198 4.758 4.922 4.758 2.724 0 5.084-1.934 5.084-4.758zM82.587 0h3.98v24h-3.98zM90.547 16.037v-.056c0-4.926 3.541-8.981 8.54-8.981 5.561 0 8.376 4.31 8.376 9.274 0 .359-.034.719-.066 1.12H94.554c.429 2.808 2.449 4.375 5.03 4.375 1.954 0 3.343-.719 4.735-2.058l2.35 2.058c-1.656 1.96-3.94 3.231-7.151 3.231-5.064-.018-8.97-3.645-8.97-8.963zm12.939-1.274c-.261-2.546-1.782-4.539-4.431-4.539-2.45 0-4.172 1.861-4.54 4.539h8.97z"
                ></path>
                <path
                  fill="#F57704"
                  d="M110.448 21.275l2.445-2.933c2.214 1.934 4.462 3.03 7.303 3.03 2.51 0 4.097-1.201 4.097-2.936v-.067c0-1.666-.925-2.567-5.212-3.566-4.924-1.2-7.704-2.668-7.704-6.97v-.065c0-4.002 3.306-6.768 7.9-6.768 3.369 0 6.045 1.033 8.383 2.933l-2.177 3.105c-2.083-1.566-4.163-2.4-6.28-2.4-2.379 0-3.766 1.234-3.766 2.768v.067c0 1.799 1.059 2.6 5.518 3.658 4.892 1.2 7.403 2.972 7.403 6.834v.066c0 4.37-3.399 6.969-8.262 6.969a14.176 14.176 0 0 1-9.648-3.725zM130.348 16.082v-.065c0-4.9 3.777-9.017 8.955-9.017 3.225 0 5.244 1.21 6.872 2.973L143.7 12.62c-1.205-1.275-2.476-2.158-4.43-2.158-2.865 0-4.982 2.482-4.982 5.489v.065c0 3.071 2.117 5.522 5.136 5.522 1.856 0 3.225-.85 4.466-2.124l2.379 2.352c-1.695 1.896-3.68 3.233-7.035 3.233-5.11 0-8.886-4.017-8.886-8.918zM170.15 18.227V7h4.054v10.024c0 2.75 1.38 4.276 3.788 4.276 2.347 0 3.988-1.604 3.988-4.354V7h4.09v17.643h-4.087v-2.75c-1.15 1.67-2.782 3.107-5.53 3.107-3.991.01-6.304-2.665-6.304-6.773zM191.277 19.77v-9.374h-2.222V6.89h2.222V2h4.013v4.89H200v3.506h-4.71v8.733c0 1.586.796 2.226 2.156 2.226a5.322 5.322 0 0 0 2.486-.608v3.339c-1.1.633-2.35.948-3.614.911-2.952 0-5.041-1.316-5.041-5.228zM148.259 16.077v-.065c0-4.926 4.029-9.012 9.466-9.012 5.438 0 9.44 4.017 9.44 8.956v.065c0 4.9-4.03 8.979-9.502 8.979-5.41-.009-9.404-4.024-9.404-8.923zm14.84 0v-.065c0-3.036-2.25-5.55-5.44-5.55-3.265 0-5.337 2.48-5.337 5.485v.065c0 3.005 2.252 5.52 5.406 5.52 3.287 0 5.37-2.483 5.37-5.455z"
                ></path>
                <path
                  fill="#F57704"
                  d="M158.209 12c1.508.375 2.723 2.093 2.723 4.023 0 1.741-.975 3.358-2.237 3.977 2.105-.327 3.612-2.148 3.487-4.214-.126-2.065-1.843-3.702-3.973-3.786z"
                ></path>
              </g>
            </svg>
          </div>
          {/* <div className="flex justify-between"> */}
          <div className=" flex justify-between ml-4 w-full">
            {/* nav-links */}
            <div className="flex font-bold ">
              {navLinks.map((navLink: any) => {
                return (
                  <div className="mx-2.5">
                    <Link to={navLink.path} className="py-2.5 px-0.5">
                      {navLink.name}
                    </Link>
                  </div>
                );
              })}
            </div>
            {/* right-container-starts */}
            <div className="flex">
              {/* search-icon */}
              <div className="relative">
                <SearchIcon onClick={() => setIsOpen(!isOpen)}>
                  Search
                </SearchIcon>
                <div
                  className={
                    isOpen
                      ? "inline-block absolute right-0 top-7 w-250 p-2.5 bg-white"
                      : "hidden"
                  }
                >
                  <form
                    action=""
                    className={
                      isTyping
                        ? "rounded-sm border-2 border-zinc-200 shadow"
                        : "rounded-sm"
                    }
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
              <div className="content-center">
                <Link to="/login" className="font-bold mx-2.5">
                  Log In
                </Link>
                <Link
                  to="/login"
                  className="font-bold mx-2.5 text-white bg-orange-400 shadow-2xl py-2 px-4.5 rounded-sm text-xs"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
