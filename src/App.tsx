import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/main-page/Header";
import Footer from "components/main-page/Footer";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import { Cart, CartItem } from "components/cart/cart";

function App() {
  const rawgApiWrapper = new RawgApiWrapper("a04bc9b870c3405d8f219c1fb7a9040e");
  const [cart, setCart] = useState(new Cart());

  const addGameToCart = (game: CartItem) => {
    setCart((prevCart) => {
      const newCartItems = prevCart.addItemToCart(game);
      return new Cart(newCartItems);
    });
  };

  const removeGameFromCart = (gameId: number) => {
    setCart((prevCart) => {
      const newCartItems = prevCart.removeItemFromCart(gameId);
      return new Cart(newCartItems);
    });
  };

  return (
    <div className="app flex flex-col h-screen">
      <Header cart={cart} />
      <Outlet
        context={{
          rawgApiWrapper: rawgApiWrapper,
          cart: cart,
          addGameToCart: addGameToCart,
          removeGameFromCart: removeGameFromCart,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
