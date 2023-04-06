import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../media/logo-red.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-content align-items shadow">
        <div className="brand flex justify-content align-items">
            <img src={logo} alt="logo"/>
            <div style={{height: '50px'}}>
                <h1>Fitter</h1>
                <p>lorem ipsum</p>
            </div>
        </div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
        </nav>
        <nav>
              <Link to="/join"><div className="btn">+</div>Join now</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
