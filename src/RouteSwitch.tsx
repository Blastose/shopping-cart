import App from "App";
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
          <Route path="games" element={<Games />}>
            <Route path=":gameId" element={null} />
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
