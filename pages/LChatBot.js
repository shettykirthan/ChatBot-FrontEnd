import React from "react";
import logo from "../assets/LWEBSITE.png";
import { Link } from "react-router-dom";
import "./light.css";
import SubmitAndReceive from "../components/SubmitAndReceive/SubmitAndReceive";

const LChatbot = ({ history, addMessageToHistory }) => {
  return (
    <div className="Light-mode">
      <div className="sideBar">
        <div className="upperSide">
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
          <div
            style={{
              position: "absolute",
              left: "6.5%",
              top: "15.5%",
              textAlign: "center",
              color: "black",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
              fontWeight: "500",
            }}>
            <Link to="/LHome">Home</Link>
          </div>
          <div
            style={{
              position: "absolute",
              left: "6.5%",
              top: "42.5%",
              textAlign: "center",
              color: "black",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
              fontWeight: "500",
            }}>
            <Link to="/LAbout">About</Link>
          </div>
          <div
            style={{
              position: "absolute",
              left: "6.1%",
              top: "33.5%",
              textAlign: "center",
              color: "black",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
              fontWeight: "500",
            }}>
            <Link to="/LContact">Contact</Link>
          </div>
          <div
            style={{
              position: "absolute",
              left: "1.3%",
              top: "22.5%",
              background: "#cccccc",
              borderRadius: "22.5px",
              width: "15%",
              height: "8.5%",
            }}></div>
          <div
            style={{
              position: "absolute",
              left: "5.2%",
              top: "25%",
              textAlign: "center",
              color: "black",
              fontSize: "1.5vw",
              fontFamily: "Mukta",
              fontWeight: "500",
            }}>
            AI Chatbot
          </div>
          <div
            className="Rectangle371"
            style={{
              width: "75%",
              height: "96%",
              background: "#E2E2E2",
              borderRadius: 22.5,
              position: "absolute",
              left: "20%",
              top: "3%",
            }}>
            <SubmitAndReceive
              history={history}
              addMessageToHistory={addMessageToHistory}
            />
          </div>

          <div
            style={{
              position: "absolute",
              left: "4%",
              top: "92%",
              textAlign: "center",
              fontSize: "1.8vw",
              fontFamily: "Mukta",
              fontWeight: "500",
              lineHeight: "0vh",
              width: "0%",
            }}>
            LightMode
          </div>
          <Link to="/DChatBot">
            <div
              style={{
                position: "absolute",
                left: "13.7%",
                top: "90.5%",
                width: "2.8%",
                height: "3.3%",
                background: "#cccccc",
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
        </div>
      </div>
    </div>
  );
};

export default LChatbot;
