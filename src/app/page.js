import React from "react";
import Banner from "./components/banner";
import About from "./components/aboutus";
import OurServices from "./components/ourservices";

export default function page() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <OurServices></OurServices>
    </div>
  );
}
