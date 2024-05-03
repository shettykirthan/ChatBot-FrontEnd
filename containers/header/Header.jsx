import "./header.css";
import React, { useState, useEffect } from "react";

import pop from "../../assets/popupimg.png";
import ai2 from "../../assets/Lpopup.svg";
import ai from "../../assets/ai.png";
import { Link } from "react-router-dom";
import SubmitAndReceive from "../../components/SubmitAndReceive/SubmitAndReceive";
import DynamicTextBox from "../../components/DynamicTextBox/DynamicTextBox";
import cross from "../../assets/backbutton.png";

const Header = () => {
  const [visibleImage, setVisibleImage] = useState(pop);
  const [userInputState, setUserInputState] = useState("");
  const [historyState, setHistoryState] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [showQuestionsPopup, setShowQuestionsPopup] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setImageScale((prevScale) => (prevScale === 1 ? 1.2 : 1));
    }, 300);

    return () => clearInterval(animationInterval);
  }, []);

  const handleInputChangeFunction = (newValue) => {
    setUserInputState(newValue);
  };

  const handleSubmitFunction = () => {
    // Your submit logic here
  };

  const addMessageToHistoryFunction = (message) => {
    setHistoryState([...historyState, message]);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div
      className="lgpt3_header section_padding"
      id="home"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "50%",
        top: "63%",
        transform: "translate(-50%, -50%)",
      }}>
      <div className="lgpt3__header-content">
        <div className="header-text" style={{ marginBottom: "40px" }}>
          <h1
            style={{
              color: "white",
              position: "absolute",
              left: "7%",
              top: "5%",
              fontSize: "3.25vw",
              fontFamily: "Mukta",
              fontWeight: "400",
            }}>
            ChatBot
          </h1>
          <div
            style={{
              width: "55%",
              position: "absolute",
              left: "7%",
              top: "17%",
              color: "white",
              fontSize: "1.25vw",
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: 1.5,
            }}>
            Chatbot is specifically tailored for answering questions and
            providing information related to NMAMIT. It's designed to be a
            knowledgeable and helpful assistant for students, staff, and
            visitors of NMAMIT, offering detailed answers to queries about
            courses, faculty, campus life, and other relevant information.
            Leveraging advanced AI technologies, it's capable of understanding
            complex queries and delivering accurate, up-to-date responses.
          </div>
          <div className="button-container">
            <Link to="/DChatBot">
              <button
                className="Lbutton"
                style={{ position: "absolute", left: "7%", top: "45%" }}>
                <div
                  style={{
                    margin: "0",
                    textAlign: "center",
                    color: "white",
                    fontSize: "1.55vw",
                    fontFamily: "Open Sans",
                    fontWeight: "400",
                  }}>
                  Get Started
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", right: "5%", top: "4%" }}>
        <img src={ai} alt="ai" style={{ width: "60vh", height: "60vh" }} />
      </div>
      <div style={{ position: "absolute", right: "25%", top: "6.3%" }}>
        <img
          src={visibleImage}
          alt="pop"
          style={{
            width: "8vh",
            height: "8vh",
            transform: `scale(${imageScale})`,
          }}
          onClick={togglePopup}
        />
      </div>

      {popupVisible && (
        <div
          style={{
            position: "absolute",
            right: "6%",
            top: "5.5%",
            width: "60vh",
            height: "70vh",
            background: "#2D2D2D",
            borderRadius: 22.5,
          }}>
          <div
            style={{
              width: "100%",
              height: "10vh",
              background: "#2D2D2D",
              borderTopLeftRadius: 22.5,
              borderTopRightRadius: 22.5,
            }}>
            <div style={{ position: "absolute", left: "5%", top: "2.3%" }}>
              <img
                src={ai2}
                alt="ai2"
                style={{
                  width: "3.5vh",
                  height: "3.5vh",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "14%",
                top: "3%",
                color: "white",
                fontSize: "1.5vw",
                fontFamily: "Mukta",
                fontWeight: "400",
              }}>
              CHATBOT
            </div>
            <div style={{ position: "absolute", right: "3%", top: "2%" }}>
              <img
                src={cross}
                alt="cross"
                style={{ width: "5vh", height: "5vh" }}
                onClick={togglePopup}
              />
            </div>
          </div>

          <DynamicTextBox
            onChange={handleInputChangeFunction}
            onSubmit={handleSubmitFunction}
            value={userInputState}
          />
          <SubmitAndReceive
            history={historyState}
            addMessageToHistory={addMessageToHistoryFunction}
          />
        </div>
      )}
    </div>
  );
};
export default Header;
