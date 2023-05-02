import React from "react";
import Header from "../components/Header";
import banner from "../media/banner-nutrition.png";

import Footer from "../components/Footer";

const Nutrition = () => {

  return (
    <>
      <Header />
      <div className="banner flex" style={{ justifyContent: "center" }}>
        <img src={banner} alt="banner" />
        <div className="flex align-items" style={{ width: "40%" }}>
          <div>
            <div
              className="text-header d-block text-light"
              style={{ marginBottom: "10px" }}
            >
              Meal plan
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>

      <div className="flex noflex" style={{ justifyContent: "center" }}>

      <div className="container">
        <div>

        <h1 class="text-center">Nutrition</h1>
        <p class="">upon signing up, we will set up a meal plan together which will be tailored according to your 'Body Mass Index' and 'Body Fat %' aswell as your specific goals and needs</p>
        </div>
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Nutrition;