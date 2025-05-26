import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="dark:bg-black">
        <Navbar />
        <div className=" mx-auto  px-5 md:px-0">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
