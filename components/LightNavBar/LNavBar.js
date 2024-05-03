import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LWEBSITE.png";
import sun from "../../assets/Sun.png";
import "./LNavBar.css";
import profile from "../../assets/profile.svg";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode instead of jwtDecode
// Import jwtDecode correctly
import Cookies from "js-cookie";
const LNavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Function to determine the destination based on the current page
  const getSunDestination = () => {
    switch (pathname) {
      case "/LAbout":
        return "/DAbout";
      case "/LContact":
        return "/DContact";
      case "/LAdminView":
        return "/AdminView";
      // Add more cases if needed
      default:
        return "/Home";
    }
  };

  // Check if the current page is "LAbout"
  const isAboutPage = pathname === "/LAbout";
  const isContactPage = pathname === "/LContact";
  const token = Cookies.get("token");
  let role = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }
  const isViewPage = pathname === "/LAdminView";
  return (
    <div>
      {isViewPage && (
        <div
          style={{
            position: "absolute",
            right: "38.2%",
            top: "5%",
            width: "9vh",
            height: "3.5vh",
            background: "#cccccc",
            borderRadius: 22.5,
          }}
        />
      )}
      {role === "ADMIN" && (
        <div
          style={{
            position: "absolute",
            right: "39%",
            top: "5%",
            textAlign: "center",
            color: "black",
            fontSize: "1.5vw",
            fontFamily: "Mukta",
          }}>
          <Link to="/LAdminView">Data</Link>
        </div>
      )}
      {isContactPage && (
        <div
          style={{
            position: "absolute",
            right: "24.3%",
            top: "5%",
            width: "12vh",
            height: "3.5vh",
            background: "#cccccc",
            borderRadius: 22.5,
          }}
        />
      )}

      {isAboutPage && (
        <div
          style={{
            position: "absolute",
            right: "31.25%",
            top: "5%",
            width: "11vh",
            height: "3.5vh",
            background: "#cccccc",
            borderRadius: 22.5,
          }}
        />
      )}
      <div>
        <div
          style={{
            position: "absolute",
            left: "4.5%",
            top: "5%",
            textAlign: "center",
            width: "16.5vh",
          }}>
          <Link to="/LHome">
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <div className="gpt3__navbar-links">
            <div
              style={{
                position: "absolute",
                right: "32%",
                top: "5%",
                textAlign: "center",
                color: "black",
                fontSize: "1.5vw",
                fontFamily: "Mukta",
              }}>
              <Link to="/LAbout">About</Link>
            </div>
            <div
              style={{
                position: "absolute",
                right: "25%",
                top: "5%",
                textAlign: "center",
                color: "black",
                fontSize: "1.5vw",
                fontFamily: "Mukta",
              }}>
              <Link to="/LContact">Contact</Link>
            </div>
          </div>
          <div>
            <div
              style={{
                position: "absolute",
                right: "20.5%",
                top: "4.3%",
                textAlign: "center",
                width: "5vh",
              }}>
              <img
                src={sun}
                alt="sun"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: "13.5%",
                top: "5%",
                textAlign: "center",
                color: "black",
                fontSize: "1.5vw",
                fontFamily: "Mukta",
                fontWeight: "500",
              }}>
              LightMode
            </div>
            <Link to={getSunDestination()}>
              <div
                style={{
                  position: "absolute",
                  right: "9.7%",
                  top: "5%",
                  width: "2.8%",
                  height: "3.3%",
                  background: "#ccc",
                  borderRadius: 15,
                }}>
                <div
                  style={{
                    position: "absolute",
                    right: "50%",
                    top: "9.7%",
                    width: "45%",
                    height: "80%",
                    background: "#333",
                    borderRadius: 50.5,
                  }}
                />
              </div>
            </Link>

            {role === "ADMIN" ? (
              <div
                style={{
                  position: "absolute",
                  right: "4.3%",
                  top: "3.6%",
                  textAlign: "center",
                  color: "black",
                  fontSize: "1.1vw",
                  fontFamily: "Mukta",
                  fontWeight: "500",
                }}>
                <img
                  src={profile}
                  alt="profile"
                  style={{ width: "5.6vh", height: "5.6vh" }}
                />
              </div>
            ) : (
              <Link to="/Signin">
                <div
                  style={{
                    position: "absolute",
                    right: "4.3%",
                    top: "3.6%",
                    textAlign: "center",
                    color: "black",
                    fontSize: "1.1vw",
                    fontFamily: "Mukta",
                    fontWeight: "500",
                  }}>
                  <img
                    src={profile}
                    alt="profile"
                    style={{ width: "5.6vh", height: "5.6vh" }}
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="gpt3__navbar-space"></div>
      </div>
    </div>
  );
};

export default LNavBar;
