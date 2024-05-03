import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Define the current page variable or state
const currentPage = 'DHomePage'; // Example value, replace it with your logic to determine the current page

ReactDOM.render(
  <React.StrictMode>
    <App currentPage={currentPage} />
  </React.StrictMode>,
  document.getElementById('root')
);
