import React from "react";
import Header from "../components/Header";
import banner from "../media/banner-classes.png";

import larry from "../media/larry2.png";
import noel from "../media/noel.png";
import david from "../media/david.png";
import tony from "../media/tony.png";
import chris from "../media/chris.png";
import jocko from "../media/jocko.png";
import Footer from "../components/Footer";

const pushAlert = (classTitle, classCoach, classDatetime) => {
  alert(
    `U heeft geklikt op de les '${classTitle}', gegeven door ${classCoach} op ${classDatetime}`
  );
};

const Classes = () => {
  const classes = [
    {
      title: "Powerlifting",
      coach: "Larry Wheels",
      datetime: "Mon: 7:00 PM",
      bgImg: larry,
    },
    {
      title: "Bodybuilding",
      coach: "Noel Deyzel",
      datetime: "Tue: 1:00 PM",
      bgImg: noel,
    },
    {
      title: "Running",
      coach: "David Goggins",
      datetime: "Wed: 5:00 AM",
      bgImg: david,
    },
    {
      title: "Boxing",
      coach: "Tony Jeffries",
      datetime: "Thu: 7:00 PM",
      bgImg: tony,
    },
    {
      title: "Calisthenics",
      coach: "Chris Heria",
      datetime: "Fri: 3:00 PM",
      bgImg: chris,
    },
    {
      title: "Brazilian Jiu-Jitsu",
      coach: "Jocko Willink",
      datetime: "Sat: 11:00 AM",
      bgImg: jocko,
    },
  ];

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
              Our classes
            </div>
            {/* <div
              className="text-header d-block text-light"
              style={{ marginBottom: "40px", fontWeight: "400" }}
            >
              Strong & disciplined
            </div> */}
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="flex" style={{justifyContent: 'center', marginBottom: '40px'}}>
        <div>

        <h1>Classes we offer</h1>
        <p>Taught by the experts in their field</p>
        </div>
      </div>
      <div className="flex noflex" style={{ justifyContent: "center" }}>

      <div className="container">
        <div>
          {classes.map((_class, i) => {
            return (
              <div className="fullWidth" style={{ display: "inline-block" }} key={i}>
                <div
                  className="fullWidth card rounded flex"
                  style={{
                    alignItems: "end",
                    height: "300px",
                    backgroundColor: "#000000",
                    padding: "30px",
                    paddingBottom: "35px",
                    backgroundImage: `url(${_class.bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  
                >
                  <div>
                    <h1
                      className="text-header text-light"
                      style={{ fontSize: "14px" }}
                    >
                      {_class.title}
                    </h1>
                    <p
                      className="text-light flex align-items"
                      style={{ fontSize: "14px", marginBottom: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      </svg>{" "}
                      &nbsp;
                      {_class.coach}
                    </p>

                    <p
                      className="text-light flex align-items"
                      style={{ fontSize: "14px", marginBottom: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>{" "}
                      &nbsp;
                      {_class.datetime}
                    </p>

                    <br />
                    <span
                      className="btn btn-block btn-light"
                      onClick={() => {
                        pushAlert(_class.title, _class.coach, _class.datetime);
                      }}
                    >
                      Join now <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Classes;
