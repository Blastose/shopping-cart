import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/main-page/Header";
import Footer from "components/main-page/Footer";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import Cart from "components/cart/cart";

function App() {
  const rawgApiWrapper = new RawgApiWrapper("a04bc9b870c3405d8f219c1fb7a9040e");
  const [cart, setCart] = useState(new Cart());

  return (
    <div className="app flex flex-col h-screen">
      <Header cart={cart} />
      <Outlet context={rawgApiWrapper} />
      <Footer />
    </div>
  );
}

export default App;
