import React, { useState, useEffect } from "react";
import { LNavBar } from "../components";
import Cookies from "js-cookie";
import axios from "axios";
import "./light.css";

const LAdminView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jwtToken = Cookies.get("token");
      const response = await axios.get(
        "http://localhost:8080/admin/questions",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      const parsedQuestions = response.data.map((question) => {
        const questionJson = JSON.parse(question.question);
        const answerJson = JSON.parse(question.answer);

        return {
          question: questionJson.question || questionJson.quesiton, // Handle the typo in the question field
          answer: answerJson.optimal_answer,
        };
      });

      setData(parsedQuestions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="Light-mode">
      <LNavBar />
      <div
        style={{
          width: "80%",
          height: "98%",
          position: "absolute",
          top: "15%",
          left: "10%",
        }}>
        <h2 style={headingStyle}>Questions & Answers</h2>
        <div
          className="scrollable-div"
          style={{
            maxHeight: "80%",
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbarColor: "#ccc #6d6d6d",
          }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>S.No</th>
                <th style={tableHeaderStyle}>Question</th>
                <th style={tableHeaderStyle}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>{index + 1}</td>
                  <td style={tableCellStyle}>{item.question}</td>
                  <td style={tableCellStyle}>{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#111111",
  padding: "1%",
  color: "white",
  textAlign: "center",
  fontSize: "3vh",
};

const tableCellStyle = {
  border: "1px solid grey",
  padding: "1%",
  fontSize: "1.3vw",
  backgroundColor: "#B1B1B1",
};
const headingStyle = {
  textAlign: "center",
  marginBottom: "3%",
  color: "black", // Change this to any color you want for light mode
  fontSize: "4vh",
};

export default LAdminView;
