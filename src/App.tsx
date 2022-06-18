import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/main-page/Header";
import Footer from "components/main-page/Footer";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";

async function asdf() {
  // const apiWrapper = new RawgApiWrapper("a04bc9b870c3405d8f219c1fb7a9040e");
  // const asdf = await apiWrapper.getGameScreenshots(3498);
  // if (asdf) {
  //   console.log(asdf);
  // }
}
function App() {
  asdf();
  return (
    <div className="app flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
