import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = ({onClickShoppingBtn}) => {
  const [isMobileShown, setIsMobileShown] = useState(false);
  const handleClick = () => {
    setIsMobileShown(!isMobileShown);
  };
  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between">
      <a href="">
        <SiNike className="h-20 w-20 dark:fill-white" />
      </a>
      <button
        onClick={handleClick}
        className="dark:text-gray-400 dark:hover-bg-gray-700  lg:hidden hover:bg-gray-100 p-2 rounded-lg focus:ring-2 focus:bg-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${!isMobileShown && "hidden"} w-full lg:w-auto  lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row rouded-lg border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent  p-4 text-lg lg:dark:text-white">
          {ROUTES.map((routes, index) => {
            return (
              <li
                className={`lg:hover:bg-transparent lg:hover:text-blue-500 rounded cursor-pointer py-2 px-3 ${index == 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(index==3 || index==4) && "lg:text-white"}`}
                key={index}

              >
                {routes}
              </li>
            );
          })}
        </ul>
      </div>
      <div onClick={onClickShoppingBtn} className="fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="btn-press-anim flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
