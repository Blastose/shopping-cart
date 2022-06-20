import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/main-page/Header";
import Footer from "components/main-page/Footer";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";

function App() {
  const rawgApiWrapper = new RawgApiWrapper("a04bc9b870c3405d8f219c1fb7a9040e");

  return (
    <div className="app flex flex-col h-screen">
      <Header />
      <Outlet context={rawgApiWrapper} />
      <Footer />
    </div>
  );
}

export default App;
