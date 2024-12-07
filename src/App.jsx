import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import NewArrivalSection from "./components/NewArrivalSection";
import { SHOE_LIST } from "./constant";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if(isDarkMode==="true"){
      window.document.documentElement.classList.add("dark");
    }
  })

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />

      <ShoeDetails />

      <NewArrivalSection items={SHOE_LIST} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart CartItems={FAKE_CART_ITEMS} />
      </Sidebar>

      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 text-white px-4 py-2 rounded-full dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
};

export default App;
