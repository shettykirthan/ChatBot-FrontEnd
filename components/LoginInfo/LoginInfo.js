import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginInfo = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validCredentials, setValidCredentials] = useState(true);

  const handleLogin = () => {
    if (email === 'shettykirthan@gmail.com' && password === '1234') {    // make changes here : userinput email,password
      onLogin();
    } else {
      setValidCredentials(false);
    }
  };

  return (
    <div>
      <input
          type="email"
          placeholder={validCredentials ? "Email" : "Email (Not Matching)"}
          style={{position: "absolute", left: "50%", top: "52%", transform: "translate(-50%, -50%)", width: "80%",height:"10%", padding: "10px", fontSize: "1vw", borderRadius: "5px", border: `1px solid ${validCredentials ? '#ccc' : 'red'}`}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       <input
          type="password"
          placeholder={validCredentials ? "Password" : "Password (Not Matching)"}
          style={{position: "absolute", left: "50%", top: "68%", transform: "translate(-50%, -50%)", width: "80%",height:"10%", padding: "10px", fontSize: "1vw", borderRadius: "5px", border: `1px solid ${validCredentials ? '#ccc' : 'red'}`}}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/Signup"><div style={{left: "63%", top: "75%", position: 'absolute',color: 'black', fontSize: "1vw", fontFamily: 'Karla', fontWeight: '700', wordWrap: 'break-word'}}>Create New Account</div></Link>
        <button 
          style={{width: "40%", height: "8%", left: "30%", top: "80%", position: 'absolute', background: '#212121', borderRadius: 12.50, border: 'none', cursor: 'pointer'}}
          onClick={handleLogin}
        >
          <div style={{color: 'white', fontSize: "1.2vw", left: "35%", position: 'absolute', fontFamily: 'Zen Kaku Gothic Antique', lineHeight:"0", fontWeight: '500', wordWrap: 'break-word'}}>LOG IN</div>
        </button>
    </div>
  );
}

export default LoginInfo;
