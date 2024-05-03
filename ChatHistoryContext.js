// ChatHistoryContext.js
import React, { createContext, useState } from 'react';

export const ChatHistoryContext = createContext();

export const ChatHistoryProvider = ({ children }) => {
 const [history, setHistory] = useState([]);

 return (
    <ChatHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </ChatHistoryContext.Provider>
 );
};
