import React from "react";
import PricingComponent from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <>
      <Header />

      <div className="flex" style={{ justifyContent: "center" }}>
        <div className="container">
          <div
            className="w-100 flex"
            style={{ justifyContent: "center", marginTop: "160px" }}
          >
            <PricingComponent/>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Pricing;
