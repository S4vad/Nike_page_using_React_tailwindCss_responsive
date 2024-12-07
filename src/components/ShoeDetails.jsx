import React from "react";
import nike from "../assets/n1-min.png";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

const shoeDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="animate- h-full flex-center bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">
          <img className="animate-float" src={nike} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270  is a lifestyle shoe that's sure to turn heads with its vibrant color gradient "
          }
        </div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>

        <div className="space-x-10">
          <button className="btn-press-anim h-14 w-44  bg-black text-white hover:bg-gray-900 active:bg-gray-600 ">
            Add to bagb
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default shoeDetails;
