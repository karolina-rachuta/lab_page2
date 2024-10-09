import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from"./About";
const LazyFooter = React.lazy(() => import("./Footer"));

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <React.Suspense fallback="Loading...">
          <LazyFooter />
        </React.Suspense>
      </div>
    </>
  );
}
export default Home;
