import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TextDisplay = ({ history }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const isLightMode =
    location.pathname === "/LChatBot" || location.pathname === "/LHome";
  const isHomePop =
    location.pathname === "/Home" || location.pathname === "/LHome";

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Scroll to the bottom
      container.scrollTop = container.scrollHeight;
    }
  }, [history]); // Scroll whenever the history changes

  return (
    <div
      ref={containerRef}
      style={{
        height: isHomePop ? "53vh" : "87vh", // Adjust the height as needed
        width: "100%",
        overflow: "auto",
        position: "absolute",
        top: isHomePop ? "8vh" : "0%",
        background: isLightMode ? "#dfdcdc" : "#2D2D2D",
        color: isLightMode ? "black" : "white",
        borderRadius: "22.50px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        fontSize: "1.11vw",
        lineHeight: "1.5",
        scrollbarColor: isLightMode
          ? "#555555 #dfdcdc"
          : "grey rgb(26, 26, 26)", // Firefox
        scrollbarWidth: "thin", // Firefox
        WebkitScrollbar: "black", // Chrome, Safari, Edge
        "&::-webkit-scrollbar": {
          width: "8px", // Chrome, Safari, Edge
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "black",
          borderRadius: "10px",
        },
      }}>
      {history.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1vw",
            display: "flex",
            flexDirection: "column",
          }}>
          {" "}
          {/* Added display flex */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "0.5vw",
              wordWrap: "break-word",
            }}>
            {" "}
            {/* Added flex and justify to the right */}
            <div
              style={{
                background: isLightMode ? "#999999" : "#075E54ds",
                border: "1px solid black ",
                padding: "0.75vw",
                borderRadius: "1.5vw",
                maxWidth: "60%",
              }}>
              {" "}
              {/* Added background color, border, padding, and maxWidth for user input */}
              <p>{item.userInput}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              wordWrap: "break-word",
            }}>
            {" "}
            {/* Added flex and justify to the left */}
            <div
              style={{
                background: isLightMode ? "#999999" : "#075E54",
                border: "1px solid black ",
                padding: "0.75vw",
                borderRadius: "1.5vw",
                maxWidth: "60%",
              }}>
              {" "}
              {/* Added background color, border, padding, and maxWidth for database response */}
              <p>{item.response}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextDisplay;
