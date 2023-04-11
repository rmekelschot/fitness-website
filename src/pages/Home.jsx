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
      <div className="container">
        <div
          className="w-100 flex"
          style={{ justifyContent: "center", marginTop: "-40px" }}
        >
          <div className="card text-center rounded-tl rounded-br shadow-big">
            <div className="icon" style={{color: '#ff0000'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={1}
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
              Our team of experts will provide you with a custom program to fit
              your needs
            </p>
          </div>
          <div className="card text-center rounded-tl rounded-br shadow-big">
            <div className="icon" style={{color: '#ff0000'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={1}
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
            <div className="icon" style={{color: '#ff0000'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1"
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
      </div>
    </>
  );
};

export default Home;
