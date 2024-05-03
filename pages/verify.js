import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './dark.css';

const Verify = () => {
  const inputs = useRef([]); // Create a ref to store input elements
  const [inputValues, setInputValues] = useState(Array(6).fill('')); // State to store input values
  const [verified, setVerified] = useState(false); // State to track if code is verified

  const handleInput = (index, e) => {
    const input = e.target;
    const value = input.value;

    // Update input values in the state
    setInputValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });

    const maxLength = parseInt(input.getAttribute('maxLength'));
    if (input.value.length >= maxLength) {
      // Move focus to the next input field if available
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const verifyCode = () => {
    // Expected code (for now, "111111")
    const expectedCode = "111111";
    const inputCode = inputValues.join('');
                                                //make changes here   inputCode - userinput, expectedCode - backend
    if (inputCode === expectedCode) {
      // Set verified to true
      setVerified(true);
    } else {
      // Incorrect code, make input boxes red
      inputs.current.forEach(input => {
        input.style.borderColor = 'red';
      });
    }
  };

  return (
    <div className='Signupbg'>
      <div style={{width:"100%", height:"50%" ,position:'absolute',top:"50%", backgroundColor:'#999'}}></div>
      <div style={{transform: 'translate(-50%, -50%)',position:"absolute",left:"50%",top:"50%",width: "35%", height: "50%", background: '#D9D9D9', boxShadow: '0px 41px 20px -7px rgba(100, 100, 100, 0.08)', borderRadius: 15, border: '0.50px #E0E0E0 solid'}} >
        <div style={{position:"absolute",left:"26%",top:"0%", color: '#212121', fontSize: "2.5vw", fontFamily: 'Zen Kaku Gothic Antique', fontWeight: '700', lineHeight: 3}}>Enter The Code</div>
        <div style={{position:"absolute",left:"40%",color: '#757575', fontSize: "1vw", fontFamily: 'Zen Kaku Gothic Antique', fontWeight: '300', lineHeight: 12 }}>Check Your Mail</div>
        <div style={{ position: "relative", left: "50%", top: "48%", transform: "translate(-50%, -50%)", width: "80%", textAlign: "center" }}>
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)} // Store the input element reference
              type="text"
              inputMode="numeric"
              maxLength="1"
              style={{
                width: "12%",
                height: "10%",
                padding: "10px",
                fontSize: "1vw",
                borderRadius: "5px",
                border: '1px solid #ccc',
                textAlign: "center",
                marginRight: "2%"
              }}
              onChange={(e) => handleInput(index, e)} // Call handleInput on change
              required
            />
          ))}
        </div>
        {verified ? (
          // If verified, show Link to "/Signin"
          <Link to="/Signin" style={{textDecoration: 'none'}}>
            <button 
              style={{width: "40%", height: "8%", left: "30%", top: "70%", position: 'absolute', background: '#212121', borderRadius: 12.50, border: 'none', cursor: 'pointer'}}
            >
              <div style={{color: 'white', fontSize: "1.2vw", left: "38%", position: 'absolute', fontFamily: 'Zen Kaku Gothic Antique', lineHeight: 0, fontWeight: '500', wordWrap: 'break-word'}}>Verify</div>
            </button>
          </Link>
        ) : (
          // If not verified, show regular button
          <button 
            onClick={verifyCode} // Call verifyCode when the button is clicked
            style={{width: "40%", height: "8%", left: "30%", top: "70%", position: 'absolute', background: '#212121', borderRadius: 12.50, border: 'none', cursor: 'pointer'}}
          >
            <div style={{color: 'white', fontSize: "1.2vw", left: "38%", position: 'absolute', fontFamily: 'Zen Kaku Gothic Antique', lineHeight: 0, fontWeight: '500', wordWrap: 'break-word'}}>Verify</div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Verify;
