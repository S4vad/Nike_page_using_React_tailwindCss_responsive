import React from "react";

const Sidebar = ({ children, isOpen, onClickClose }) => {
  return (
    <div>
      <div
        className={`p-5  fixed top-0 right-0 z-50 h-full w-full md:w-[50%] lg:w-[35%] shadow-lg bg-white transform transition duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && <div onClick={onClickClose} className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />}
    </div>
  );
};

export default Sidebar;
