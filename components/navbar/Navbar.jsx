import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/weblogo.png";
import sun from "../../assets/moon.png";
import "./navbar.css";
import profile from "../../assets/dprofile.svg";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode instead of jwtDecode
// Import jwtDecode correctly
import Cookies from "js-cookie"; // Import Cookies if not already imported

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  // Function to determine the destination based on the current page
  const getSunDestination = () => {
    switch (pathname) {
      case "/DAbout":
        return "/LAbout";
      case "/DContact":
        return "/LContact";
      case "/AdminView":
        return "/LAdminView";
      // Add more cases if needed
      default:
        return "/LHome";
    }
  };

  const token = Cookies.get("token");
  let role = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }

  const isAboutPage = pathname === "/DAbout";
  const isContactPage = pathname === "/DContact";
  const isViewPage = pathname === "/AdminView";
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
            background: "#999",
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
            color: "white",
            fontSize: "1.5vw",
            fontFamily: "Mukta",
          }}>
          <Link to="/AdminView">Data</Link>
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
            background: "#999",
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
            background: "#999",
            borderRadius: 22.5,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          left: "4.5%",
          top: "5%",
          textAlign: "center",
          width: "16.5vh",
        }}>
        <Link to="/Home">
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
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
            }}>
            <Link to="/DAbout">About</Link>
          </div>
          <div
            style={{
              position: "absolute",
              right: "25%",
              top: "5%",
              textAlign: "center",
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
            }}>
            <Link to="/DContact">Contact</Link>
          </div>
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              right: "20.8%",
              top: "5%",
              textAlign: "center",
              width: "3vh",
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
              color: "white",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
              fontWeight: "500",
            }}>
            DarkMode
          </div>
          <Link to={getSunDestination()}>
            <div
              style={{
                position: "absolute",
                right: "9.7%",
                top: "5%",
                width: "2.8%",
                height: "3.3%",
                background: "#999",
                borderRadius: 15,
              }}>
              <div
                style={{
                  position: "absolute",
                  right: "2%",
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
  );
};

export default Navbar;
