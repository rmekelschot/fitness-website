import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../media/logo-red.png";

const Header = () => {
  return (
    <>
      <header className="flex align-items shadow" style={{justifyContent: 'space-between'}}>
        <div
          className="brand text-light flex justify-content align-items"
          style={{ maxWidth: "150px" }}
        >
          <img src={logo} alt="logo" />
          <div style={{ height: "50px" }}>
            <h1>Fitter</h1>
            <p>Super gains</p>
          </div>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
        <nav className="hide-mobile">
          <div>
            <Link to="/pricing">
              <div className="btn" style={{ fontSize: "16px" }}>
                +
              </div>
              &nbsp;Join now
            </Link>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
