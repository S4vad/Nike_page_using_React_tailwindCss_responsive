import React from "react";
import Card from "./Card";

const NewArrivalSection = ({ items }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center txt-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] justify-between gap-x-6">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
