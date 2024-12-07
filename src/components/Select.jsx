import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Select = ({ options, title }) => {
  return (
    <div className="relative"> 
      <select defaultValue={""} className="w-24 appearance-none border border-gray-200 p-4">
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option  } key={option}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-4">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
 