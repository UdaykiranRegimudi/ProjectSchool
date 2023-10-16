import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home";

export const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col align-middle h-full w-full">
      <Home />
      <Navbar />
      <div className="flex flex-1 basis-auto shrink-0 flex-col mt-[8rem] max-w-[120rem] w-full sm:mt-[6.4rem]">
        {children}
      </div>
      <Footer />
    </div>
  );
};
