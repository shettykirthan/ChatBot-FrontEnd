import React, { useState } from "react";
import DynamicTextBox from "../DynamicTextBox/DynamicTextBox";
import TextDisplay from "../TextDisplay/TextDisplay";
import submitImage from "../../assets/submit.png"; // Adjust the path as per your project structure
import { useLocation } from "react-router-dom";
import blacksubmitImage from "../../assets/blacksubmit.png";

const SubmitAndReceive = () => {
  const location = useLocation();
  const isLightMode =
    location.pathname === "/LChatBot" || location.pathname === "/LHome";
  const isDarkPop =
    location.pathname === "/Home" || location.pathname === "/LHome";

  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleUserInputChange = (newText) => {
    setUserInput(newText);
  };

  const handleSubmit = async () => {
    if (userInput.trim() === "") return; // Don't submit empty input

    // Define the API endpoint
    const apiEndpoint = "http://localhost:8080/predict"; // Adjust the URL as per your deployment

    try {
      // Make a POST request to the API
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userInput }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const optimalAnswer = data.optimal_answer;

      // Update the history with the new question and answer
      setHistory([...history, { userInput, response: optimalAnswer }]);
      setUserInput(""); // Clear the input field
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Optionally, handle the error in the UI
    }
  };

  return (
    <div>
      <div>
        <TextDisplay history={history} />
      </div>
      <div>
        <DynamicTextBox
          onChange={handleUserInputChange}
          onSubmit={handleSubmit}
          value={userInput}
        />
        <button
          style={{
            position: "absolute",
            top: isDarkPop ? "94%" : "96%",
            right: isDarkPop ? "1%" : "4%",
            transform: "translate(-50%, -50%)",
            width: "4vh",
            height: "auto",
            cursor: "pointer",
            border: "none",
            background: "none",
            padding: "0",
          }}
          onClick={handleSubmit}>
          <img
            src={isLightMode ? blacksubmitImage : submitImage}
            alt="Submit"
            style={{
              width: isDarkPop ? "70%" : "100%",
              height: isDarkPop ? "70%" : "100%",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default SubmitAndReceive;
