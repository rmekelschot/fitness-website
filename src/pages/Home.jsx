import React from "react";
import Header from "../components/Header";
import banner from "../media/banner-homepage.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import jocko from "../media/jocko.png";
import noel from "../media/noel.png";
import david from "../media/david.png";

import PricingComponent from "../components/Pricing";

const Home = () => {
  const coaches = [
    {
      title: "Brazilian Jiu-Jitsu",
      coach: "Jocko Willink",
      bgImg: jocko,
    },
    {
      title: "Bodybuilding",
      coach: "Noel Deyzel",
      bgImg: noel,
    },
    {
      title: "Running",
      coach: "David Goggins",
      bgImg: david,
    },
  ];

  return (
    <>
      <Header />
      <div className="banner flex" style={{ justifyContent: "center" }}>
        <img src={banner} alt="banner" />
        <div className="flex align-items" style={{ width: "30%" }}>
          <div>
            <div
              className="text-header d-block text-light"
              style={{ marginBottom: "10px" }}
            >
              Make yourself
            </div>
            <div
              className="text-header d-block text-light"
              style={{ marginBottom: "40px", fontWeight: "400" }}
            >
              Strong & disciplined
            </div>
            <Link className="btn btn-block btn-light" to="/classes">
              our classes <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex" style={{ justifyContent: "center" }}>
        <div className="container">
          <div
            className="w-100 flex"
            style={{ justifyContent: "center", marginTop: "-40px" }}
          >
            <div className="card text-center rounded-tl rounded-br shadow-big">
              <div className="icon" style={{ color: "#ff4545" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 3l0 4"></path>
                  <path d="M8 3l0 4"></path>
                  <path d="M4 11l16 0"></path>
                  <path d="M8 15h2v2h-2z"></path>
                </svg>
              </div>
              <div className="text-header">progression</div>
              <br />
              <p>
                Our team of experts will provide you with a custom program to
                fit your needs
              </p>
            </div>
            <div className="card text-center rounded-tl rounded-br shadow-big">
              <div className="icon" style={{ color: "#ff4545" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path>
                  <path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071z"></path>
                  <path d="M7.5 16l1 1"></path>
                  <path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>
                </svg>
              </div>
              <div className="text-header">nutrition</div>
              <br />
              <p>
                good results require good nutrition. together we will create a
                meal plan to achieve your goals
              </p>
            </div>
            <div className="card text-center rounded-tl rounded-br shadow-big">
              <div className="icon" style={{ color: "#ff4545" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M2 12h1"></path>
                  <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"></path>
                  <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                  <path d="M9 12h6"></path>
                  <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                  <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"></path>
                  <path d="M22 12h-1"></path>
                </svg>
              </div>
              <div className="text-header">workout</div>
              <br />
              <p>
                with plenty of exercises to choose from you have everything you
                need for optimal results
              </p>
            </div>
          </div>

          <div style={{ marginTop: "40px", padding: "15px" }}>
            <div style={{ width: "500px" }}>
              <h1 style={{ fontSize: "32px", marginBottom: "15px" }}>
                Discover the strength and beauty that the body is capable of
              </h1>
              <p>
                Our easily understandable programs are designed to help you
                achieve your goals
              </p>
              <div
                className="flex justify-content"
                style={{ marginTop: "20px" }}
              >
                <div style={{ marginBottom: "40px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#ff4545" }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M5 20l5 -.5l1 -2"></path>
                    <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2"></path>
                  </svg>
                  <p
                    className="text-header"
                    style={{ fontSize: "18px", textAlign: "center" }}
                  >
                    expert trainers
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#ff4545" }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M2 12h1"></path>
                    <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"></path>
                    <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                    <path d="M9 12h6"></path>
                    <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                    <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"></path>
                    <path d="M22 12h-1"></path>
                  </svg>
                  <p
                    className="text-header"
                    style={{ fontSize: "18px", textAlign: "center" }}
                  >
                    Plenty of weights
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "#ff4545" }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21h18"></path>
                    <path d="M19 21v-4"></path>
                    <path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"></path>
                    <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path>
                    <path d="M9 17v4"></path>
                    <path d="M8 13h2"></path>
                    <path d="M8 9h2"></path>
                  </svg>
                  <p
                    className="text-header"
                    style={{ fontSize: "18px", textAlign: "center" }}
                  >
                    Centralized location
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="btn btn-block btn-dark text-header"
              style={{ fontSize: "14px" }}
              to="/classes"
            >
              Take a tour <span>&rarr;</span>
            </Link>
          </div>
            <div className="spacer"></div>
          <div className="w-100 text-center">
            <h1>Our team of experts</h1>
            <p>Our team will assist you to make sure you reach your goals.</p>
            <div className="flex" style={{ marginTop: '40px', justifyContent: "center" }}>
              {coaches.map((coach, i) => {
                return (
                  <div style={{ display: "inline-block" }} key={i}>
                    <div
                      className="card rounded flex"
                      style={{
                        justifyContent: "center",
                        alignItems: "end",
                        height: "300px",
                        backgroundColor: "#000000",
                        padding: "30px",
                        paddingBottom: "35px",
                        backgroundImage: `url(${coach.bgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div>
                        <h1
                          className="text-header text-light"
                          style={{ fontSize: "24px" }}
                        >
                          {coach.coach}
                        </h1>
                        <p className="text-light">{coach.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="spacer"></div>
          <PricingComponent/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
