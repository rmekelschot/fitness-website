import React from "react";
import Header from "../components/Header";
import banner from "../media/banner-homepage.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="banner flex" style={{ justifyContent: "center" }}>
        <img src={banner} alt="banner" />
        <div className="flex align-items" style={{ width: "30%" }}>
          <div>
            <div className="text-header d-block text-light" style={{marginBottom: '10px'}}>Make yourself</div>
            <div className="text-header d-block text-light" style={{marginBottom: '40px', fontWeight: '400'}}>Strong & disciplined</div>
            <Link className="btn btn-block btn-light" to="/gallery">
              our classes <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">home</div>
    </>
  );
};

export default Home;
