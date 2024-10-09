import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
const LazyAbout = React.lazy(() => import("./About"));
const LazyFooter = React.lazy(() => import("./Footer"));

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <LazyAbout />
        <LazyFooter />
      </div>
    </>
  );
}
export default Home;
