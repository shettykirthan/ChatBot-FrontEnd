import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import logo from "../assets/signimg.png";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = () => {
    return username && password;
  };

  const handleLoginSuccess = () => {
    window.location.href = "/Home";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      const { token } = response.data;

      document.cookie = `token=${token}; path=/; max-age=3600`;

      handleLoginSuccess();
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="Signupbg">
      <div
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          top: "50%",
          backgroundColor: "#999",
        }}></div>
      <div
        style={{
          transform: "translate(-50%, -50%)",
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "35%",
          height: "75%",
          background: "#D9D9D9",
          boxShadow: "0px 41px 20px -7px rgba(100, 100, 100, 0.08)",
          borderRadius: 15,
          border: "0.50px #E0E0E0 solid",
        }}>
        <div style={{ position: "absolute", right: "44.5%", top: "5%" }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "10vh", height: "10vh" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "28%",
            left: "29%",
            textAlign: "center",
            color: "#212121",
            fontSize: "2.5vw",
            fontFamily: "Zen Kaku Gothic Antique",
            fontWeight: "700",
          }}>
          Admin Login
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            style={{
              position: "absolute",
              left: "50%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "10%",
              padding: "10px",
              fontSize: "1vw",
              borderRadius: "5px",
              border: "#ccc",
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              position: "absolute",
              left: "50%",
              top: "68%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "10%",
              padding: "10px",
              fontSize: "1vw",
              borderRadius: "5px",
              border: "#ccc",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isFormValid() ? (
            <button
              type="submit"
              style={{
                width: "40%",
                height: "8%",
                left: "30%",
                top: "80%",
                position: "absolute",
                background: "#212121",
                borderRadius: 12.5,
                border: "none",
                cursor: "pointer",
              }}>
              <div
                style={{
                  color: "white",
                  fontSize: "1.2vw",
                  left: "38%",
                  position: "absolute",
                  fontFamily: "Zen Kaku Gothic Antique",
                  lineHeight: "0",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}>
                Log In
              </div>
            </button>
          ) : (
            <button
              style={{
                width: "40%",
                height: "8%",
                left: "30%",
                top: "80%",
                position: "absolute",
                background: "#212121",
                borderRadius: 12.5,
                border: "none",
                cursor: "pointer",
              }}>
              <div
                style={{
                  color: "grey",
                  fontSize: "1.2vw",
                  left: "38%",
                  position: "absolute",
                  fontFamily: "Zen Kaku Gothic Antique",
                  lineHeight: "0",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}>
                Log In
              </div>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;
