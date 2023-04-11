import React from "react";
import logo from "../media/logo-red.png";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-content">
        <div
          className="footer-content"
          style={{ width: "350px", paddingRight: "50px" }}
        >
          <div className="brand flex justify-content align-items" style={{maxWidth: '150px'}}>
            <img src={logo} alt="logo" />
            <div style={{ height: "50px" }}>
              <h1>Fitter</h1>
              <p>Super gains</p>
            </div>
          </div>
          <br/>
          <div className="text-subheader">Take your body to the next level with the help of our experts.</div>
          <br/>
          <p className="text-subheader">&copy; {new Date().getFullYear()} RM Ekelschot</p>
        </div>
        <div className="footer-content" style={{ paddingRight: "50px" }}>
          <h1
            className="text-header"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Our classes
          </h1>
          <div style={{ fontSize: "14px" }}>
            <p className="footer-item">Powerlifting</p>
            <p className="footer-item">Bodybuilding</p>
            <p className="footer-item">Running</p>
            <p className="footer-item">Boxing</p>
            <p className="footer-item">Calisthenics</p>
            <p className="footer-item">Brazilian Jiu-Jitsu</p>
          </div>
        </div>
        <div className="footer-content" style={{ paddingRight: "50px" }}>
          <h1
            className="text-header"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Working hours
          </h1>
          <div style={{ fontSize: "14px" }}>
            <p className="footer-item">
              <b>Monday - Friday:</b>
            </p>
            <p className="footer-item">5:00 AM - 22:30 PM</p>
            <p className="footer-item">
              <b>Saturday</b>
            </p>
            <p className="footer-item">9:00 AM - 13:00 PM</p>
            <p className="footer-item">
              <b>Sunday</b>
            </p>
            <p className="footer-item">closed</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
