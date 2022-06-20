import App from "App";
import GameInfo from "components/game-info-page/GameInfo";
import Games from "components/games-page/Games";
import Home from "components/main-page/Home";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function RouteSwitch(props: any) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
          <Route path="cart" />

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
    </BrowserRouter>
  );
}