import React, { useState, useEffect } from "react";
import { Navbar } from "../components"; // Assuming Navbar is correctly imported
import Cookies from "js-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode correctly

const AdminView = () => {
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

      // Parse the question and answer properties from JSON to JavaScript objects
      const parsedQuestions = response.data.map((question) => {
        // Parse the question and answer properties from JSON to JavaScript objects
        const questionJson = JSON.parse(question.question);
        const answerJson = JSON.parse(question.answer);

        return {
          question: questionJson.question || questionJson.question, // Handle the typo in the question field
          answer: answerJson.optimal_answer,
        };
      });

      setData(parsedQuestions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const token = Cookies.get("token");
  let role = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }

  return (
    <div>
      {role === "ADMIN" && (
        <>
          <div className="Dark-mode">
            <Navbar /> {/* Ensure Navbar is imported and rendered correctly */}
            <div
              style={{
                width: "80%",
                height: "90%",
                position: "absolute",
                top: "15%",
                left: "10%",
              }}
            >
              <h2 style={headingStyle}>Questions & Answers</h2>
              <div
                className="scrollable-div"
                style={{
                  maxHeight: "80%",
                  overflowY: "scroll",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ccc grey",
                }}
              >
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
        </>
      )}
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#2d2d2d",
  color: "white",
  padding: "1%",
  textAlign: "center", // Add this line
  fontSize: "3vh",
};

const tableCellStyle = {
  border: "1px solid grey",
  padding: "1%",
  fontSize: "1.3vw",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "3%",
  color: "white",
  fontSize: "4vh",
};

export default AdminView;
