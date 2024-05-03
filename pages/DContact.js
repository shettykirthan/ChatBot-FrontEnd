// DContact.js

import React from "react";
import "./dark.css";
import { Navbar } from "../components";
import ai from "../assets/contactusimg.png";
const DContact = () => {
  return (
    <div className="Dark-mode">
      <Navbar />
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "50%",
            top: "63%",
            transform: "translate(-50%, -50%)",
          }}>
          <div
            style={{
              left: "43%",
              top: "0%",
              position: "absolute",
              opacity: 0.9,
              color: "white",
              fontSize: "2.5vw",
              fontFamily: "Inter",
              fontWeight: "800",
              wordWrap: "break-word",
            }}>
            <span>Get in </span>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.30)",
                fontSize: "2.5vw",
                fontFamily: "Inter",
                fontWeight: "800",
                wordWrap: "break-word",
              }}>
              touch
            </span>
          </div>
          <div
            style={{
              left: "30%",
              top: "8%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.55vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Reach out, and let's create a universe of possibilities together!
          </div>
          <div
            style={{
              width: "0%",
              height: "150%",
              left: "15%",
              top: "19%",
              position: "absolute",
              transform: "rotate(-90deg)",
              transformOrigin: "0 0",
              border: "2px white solid",
            }}></div>
          <div
            style={{
              left: "16%",
              top: "23%",
              position: "absolute",
              opacity: 1,
              color: "white",
              fontSize: "2vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Our team
          </div>
          <div
            style={{
              left: "35%",
              top: "39%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Shishir Hebbar
          </div>
          <div
            style={{
              left: "35%",
              top: "32%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Kirthan Shetty
          </div>
          <div
            style={{
              left: "17.5%",
              top: "39%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Banuprasad
          </div>
          <div
            style={{
              left: "17.5%",
              top: "32%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            R Ajay Prabhu
          </div>

          <div
            style={{
              width: "0%",
              height: "75%",
              left: "15%",
              top: "47%",
              position: "absolute",
              transform: "rotate(-90deg)",
              transformOrigin: "0 0",
              border: "2px white solid",
            }}></div>
          <div
            style={{
              left: "16%",
              top: "51%",
              position: "absolute",
              opacity: 1,
              color: "white",
              fontSize: "2vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Contact Information
          </div>
          <div
            style={{
              left: "35%",
              top: "67%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            nnm22ad053@nmamit.in
          </div>
          <div
            style={{
              left: "35%",
              top: "60%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            nnm22ad051@nmamit.in
          </div>
          <div
            style={{
              left: "17.5%",
              top: "67%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            nnm22ad017@nmamit.in
          </div>
          <div
            style={{
              left: "17.5%",
              top: "60%",
              position: "absolute",
              opacity: 0.7,
              color: "white",
              fontSize: "1.4vw",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            nnm22ad041@nmamit.in
          </div>

          <div style={{ left: "60%", top: "30%", position: "absolute" }}>
            <img src={ai} alt="ai" style={{ width: "45vh", height: "45vh" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DContact;
