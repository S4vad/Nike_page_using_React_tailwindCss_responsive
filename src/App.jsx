import React, { useState } from "react";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import NewArrivalSection from "./components/NewArrivalSection";
import { SHOE_LIST } from "./constant";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart"

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe =>{
  return {
    product:shoe,
    qty:1,
    size:44
  }
})

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetails />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
      <Cart CartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
};

export default App;
