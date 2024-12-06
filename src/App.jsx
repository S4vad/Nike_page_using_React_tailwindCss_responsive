import React from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";

const App = () => {
  return (
    <div className="p-10 xl:px-24">
      <Nav />
      <ShoeDetails />
    </div>
  );
};

export default App;