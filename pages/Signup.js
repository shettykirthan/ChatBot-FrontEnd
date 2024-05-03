import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import logo from "../assets/signimg.png";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const role = "USER"; // Default role is set to 'User'

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordTouched(true);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordTouched(true);
    setPasswordMatch(event.target.value === password);
  };

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
    setEmailTouched(true);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/register", {
        firstName,
        lastName,
        username,
        password,
        role,
      });

      // Assuming your API returns a token
      const { token } = response.data;

      // Store the token in a cookie
      document.cookie = `token=${token}; path=/`;

      // Redirect the user to the home page or any other page
      window.location.href = "/Home";
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
    }
  };

  // Function to check if all inputs are valid
  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      username &&
      password &&
      confirmPassword &&
      passwordMatch &&
      role
    );
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
          height: "90%",
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
            left: "18%",
            top: "0%",
            color: "#212121",
            fontSize: "2.5vw",
            fontFamily: "Zen Kaku Gothic Antique",
            fontWeight: "700",
            lineHeight: 8,
          }}>
          Create New Account
        </div>

        <input
          type="text"
          placeholder="Firstname"
          style={{
            position: "absolute",
            left: "29.5%",
            top: "42%",
            transform: "translate(-50%, -50%)",
            width: "39%",
            height: "9%",
            padding: "10px",
            fontSize: "1vw",
            borderRadius: "5px",
            border:
              emailTouched && !firstName ? "1px solid red" : "1px solid #ccc",
          }}
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
        <input
          type="text"
          placeholder="Lastname"
          style={{
            position: "absolute",
            left: "70.5%",
            top: "42%",
            transform: "translate(-50%, -50%)",
            width: "39%",
            height: "9%",
            padding: "10px",
            fontSize: "1vw",
            borderRadius: "5px",
            border:
              emailTouched && !lastName ? "1px solid red" : "1px solid #ccc",
          }}
          value={lastName}
          onChange={handleLastNameChange}
          required
        />

        <input
          type="text"
          placeholder="Username or Email"
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "9%",
            padding: "10px",
            fontSize: "1vw",
            borderRadius: "5px",
            border:
              emailTouched && !username ? "1px solid red" : "1px solid #ccc",
          }}
          value={username}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            position: "absolute",
            left: "50%",
            top: "62%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "9%",
            padding: "10px",
            fontSize: "1vw",
            borderRadius: "5px",
            border:
              passwordTouched && !password ? "1px solid red" : "1px solid #ccc",
          }}
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          style={{
            position: "absolute",
            left: "50%",
            top: "72%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "9%",
            padding: "10px",
            fontSize: "1vw",
            borderRadius: "5px",
            border:
              (confirmPasswordTouched && !confirmPassword) ||
              (confirmPasswordTouched && !passwordMatch)
                ? "1px solid red"
                : "1px solid #ccc",
          }}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        {isFormValid() ? (
          <button
            onClick={handleSubmit} // Call handleSubmit when the button is clicked
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
              Create
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
              Create
            </div>
          </button>
        )}
        <Link to="/Signin">
          <div
            style={{
              left: "35%",
              top: "92%",
              position: "absolute",
              color: "black",
              fontSize: "1vw",
              fontFamily: "Karla",
              fontWeight: "700",
              wordWrap: "break-word",
            }}>
            Already Have An Account?
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
