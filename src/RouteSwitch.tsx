import App from "App";
import CartCheckout from "components/cart/CartCheckout";
import GameInfo from "components/game-info-page/GameInfo";
import Games from "components/games-page/Games";
import Home from "components/main-page/Home";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

export default function RouteSwitch(props: any) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
          <Route path="cart" element={<CartCheckout />} />

          <Route
            path="*"
            element={
              // TODO Replace later
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
