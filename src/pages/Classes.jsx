import React from "react";
import Header from "../components/Header";
import banner from "../media/banner-homepage.png";

const Classes = () => {
  return (
    <>
      <Header />
      <div className="banner" style={{ justifyContent: "center" }}>
        <img src={banner} alt="banner" className="d-block" height={'650px'}/>
        <div className="d-block flex" style={{ alignItems:'end',width: "30%" }}>
          <div
            className="text-header text-light"
            style={{ marginBottom: "10px" }}
          >
            Classes
          </div>
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};

export default Classes;
