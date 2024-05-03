import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTextBox = ({ onChange, onSubmit, value }) => {
    const location = useLocation();
    const isLightMode = location.pathname === '/LChatBot' || location.pathname === '/LHome';
    const isDarkPop = location.pathname === '/Home' || location.pathname === '/LHome';

    const inputRef = useRef(null);

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSubmit(); // Call the onSubmit function passed from parent
        }
    };

    // Define styles based on whether the component is on the Home page or not
    const inputStyle = {
        width: '82%' , // Adjust width based on the condition
        height: isDarkPop ? '7%' :'7%',
        background: isLightMode ? "#F9F9F9" : '#2D2D2D',
        borderRadius: '22.50px',
        position: 'absolute',
        left: isDarkPop ? '4%' :'10vh',
        top: isDarkPop ? '90%' :'88.5vh',
        overflow: 'hidden',
        padding: '10px',
        color: isLightMode ? 'black' : 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
    };

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="Type your message here"
            style={inputStyle} // Apply the conditional style
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
};

export default DynamicTextBox;
