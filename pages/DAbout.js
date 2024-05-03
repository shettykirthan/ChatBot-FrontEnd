import React from "react";
import "./dark.css";
import { Navbar } from "../components";
import i1 from "../assets/img3.png";
import i2 from "../assets/img2.png";
import i3 from "../assets/img1.png";
const DAbout = () => {
  return (
    <div className="Dark-mode">
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Navbar />
        <img
          src={i1}
          alt="ai"
          style={{
            width: "13vh",
            height: "13vh",
            position: "absolute",
            left: "18%",
            top: "40%",
          }}
        />
        <img
          src={i2}
          alt="ai"
          style={{
            width: "15vh",
            height: "15vh",
            position: "absolute",
            left: "47%",
            top: "40%",
          }}
        />
        <img
          src={i3}
          alt="ai"
          style={{
            width: "15vh",
            height: "15vh",
            position: "absolute",
            left: "77%",
            top: "39%",
          }}
        />

        <div
          style={{
            width: "0%",
            height: "28%",
            border: "0.75vh #536FD1 solid",
            position: "absolute",
            left: "44%",
            top: "50%",
          }}></div>
        <div
          style={{
            width: "0%",
            height: "28%",
            border: "0.75vh #41AB97 solid",
            position: "absolute",
            left: "14%",
            top: "50%",
          }}></div>
        <div
          style={{
            width: "0%",
            height: "28%",
            background: "#DF3636",
            border: "0.75vh #DF3636 solid",
            position: "absolute",
            left: "74%",
            top: "50%",
          }}></div>

        <div
          style={{
            position: "absolute",
            left: "17%",
            top: "17%",
            width: "20%",
            height: "20%",
            textAlign: "center",
          }}>
          <span
            style={{
              color: "#FFB600",
              fontSize: "2.5vw",
              fontFamily: "Advent Pro",
              fontWeight: "700",
            }}>
            WHO
          </span>
          <span
            style={{
              color: "white",
              fontSize: "2.5vw",
              fontFamily: "Advent Pro",
              fontWeight: "700",
            }}>
            {" "}
          </span>
          <span
            style={{
              color: "white",
              fontSize: "2.5vw",
              fontFamily: "Advent Pro",
              fontWeight: "700",
            }}>
            WE ARE
          </span>
        </div>
        <div
          style={{
            width: "0%",
            height: "150%",
            left: "15%",
            top: "35%",
            position: "absolute",
            transform: "rotate(-90deg)",
            transformOrigin: "0 0",
            border: "0.3vh white solid",
          }}></div>
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "14%",
            width: "40%",
            height: "20%",
            color: "white",
            fontSize: "1vw",
            fontFamily: "Advent Pro",
            fontWeight: "400",
          }}>
          We are the proud students of the 4th semester AI & Data Science
          program at NITTE, representing the class of NNM22AD017, 041, 051, 053.
          Our project is a testament to our collective passion for technology
          and education. The purpose of this project is to enhance our learning
          skills by developing an advanced chatbot at NITTE. Together, we are
          committed to leveraging the power of artificial intelligence and data
          science to create a tool that is not only functional but also deeply
          personalized for every student.
        </div>
        <div
          style={{
            position: "absolute",
            left: "17%",
            top: "70%",
            width: "16%",
            height: "10%",
            color: "white",
            fontSize: "1.1vw",
            fontFamily: "Abhaya Libre",
            fontWeight: "400",
          }}>
          Welcome to our innovative AI-powered chatbot project, designed to
          significantly enhance and streamline information access for all NITTE
          community members through our website, fostering a more interactive
          and supportive environment.
        </div>
        <div
          style={{
            position: "absolute",
            left: "77%",
            top: "55%",
            width: "180px",
            height: "48px",
            color: "#DE3636",
            fontSize: "1.6vw",
            fontFamily: "Abhaya Libre",
            fontWeight: "700",
            textTransform: "uppercase",
          }}>
          YOUR FEEDBACK MATTERS
        </div>
        <div
          style={{
            position: "absolute",
            left: "77%",
            top: "70%",
            width: "16%",
            height: "152px",
            color: "white",
            fontSize: "1.1vw",
            fontFamily: "Abhaya Libre",
            fontWeight: "400",
          }}>
          Your feedback is crucial to us. Explore our chatbot, share your
          360-degree perspective, and let's collaborate to make this project a
          success. Together, we can enhance the NITTE community experience.
        </div>
        <div
          style={{
            position: "absolute",
            left: "47%",
            top: "58%",
            width: "201px",
            height: "24px",
            color: "#526ED1",
            fontSize: "1.6vw",
            fontFamily: "Abhaya Libre",
            fontWeight: "700",
            textTransform: "uppercase",
          }}>
          OUR COMMITMENT
        </div>
        <div
          style={{
            position: "absolute",
            left: "47%",
            top: "70%",
            width: "16%",
            height: "150px",
            color: "white",
            fontSize: "1.1vw",
            fontFamily: "Abhaya Libre",
            fontWeight: "400",
          }}>
          Our project goes beyond a chatbot; it's a dedication to improving
          information access for NITTE's community. We're committed to making
          the chatbot more effective, efficient, and user-friendly through
          continuous enhancements.
        </div>
        <div
          style={{
            position: "absolute",
            left: "17%",
            top: "60%",
            width: "166px",
            height: "24px",
            color: "#41AA97",
            fontSize: "1.6vw",
            fontFamily: "Abhaya Libre",
            fontWeight: "700",
            textTransform: "uppercase",
          }}>
          INTRODUCTION
        </div>
      </div>
    </div>
  );
};

export default DAbout;
