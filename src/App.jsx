import React from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import NewArrivalSection from "./components/NewArrivalSection"
import { SHOE_LIST } from "./constant";

const App = () => {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetails />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
};

export default App;
