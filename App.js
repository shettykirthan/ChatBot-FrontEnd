import React, { useState } from "react";
import "./App.css";
import { ChatHistoryProvider } from "./ChatHistoryContext";
import LAbout from "./pages/LAbout";
import DHomePage from "./pages/DHomePage";
import DAbout from "./pages/DAbout";
import DContact from "./pages/DContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DChatbot from "./pages/DChatBot";
import LContact from "./pages/LContact";
import LChatbot from "./pages/LChatBot";
import LHomePage from "./pages/LHomePage";
import Signin from "./pages/signin";
import LAdminView from "./pages/LAdminView";
import AdminView from "./pages/AdminView";

function App() {
  const [history, setHistory] = useState([]);

  // Function to add a new message to the history
  const addMessageToHistory = (userInput, response) => {
    setHistory([...history, { userInput, response }]);
  };

  return (
    <ChatHistoryProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DHomePage />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Home" element={<DHomePage />} />
            <Route path="/LHome" element={<LHomePage />} />
            <Route path="/DAbout" element={<DAbout />} />
            <Route path="/DContact" element={<DContact />} />
            <Route path="/DChatBot" element={<DChatbot />} />
            <Route path="/LAbout" element={<LAbout />} />
            <Route path="/LContact" element={<LContact />} />
            <Route path="/LChatBot" element={<LChatbot />} />
            <Route path="/LAdminView" element={<LAdminView />}></Route>
            <Route path="/AdminView" element={<AdminView />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ChatHistoryProvider>
  );
}

export default App;
