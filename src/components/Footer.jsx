import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex" style={{ justifyContent: "center" }}>
        <div style={{paddingRight: '50px'}}>div1</div>
        <div style={{paddingRight: '50px'}}>
          <h1 className="text-header" style={{ fontSize: "14px" }}>
            Our classes
          </h1>
          <p>Powerlifting</p>
          <p>Bodybuilding</p>
          <p>Running</p>
          <p>Boxing</p>
          <p>Calisthenics</p>
          <p>Brazilian Jiu-Jitsu</p>
          </div>
        <div style={{paddingRight: '50px'}}>
          <h1 className="text-header" style={{ fontSize: "14px" }}>
            Working hours
          </h1>
          <div style={{fontSize: '14px'}}>

          <b>
            Monday - Friday:
          </b>
          <p>
            5:00 AM - 22:30 PM
          </p>
          <b>Saturday</b>
          <p>
            9:00 AM - 13:00 PM
          </p>
          <b>Sunday</b>
          <p>
            closed
          </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
