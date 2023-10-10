import React, { useState } from 'react';

const ColorBox = ({ color, onClick }) => {
    const [currentColor, setCurrentColor] = useState(color);

    const handleClick = () => {
        const randomColor = getRandomColor();
        setCurrentColor(randomColor);
        if (onClick) {
            onClick(randomColor);
        }
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let newColor = '#';
        for (let i = 0; i < 6; i++) {
            newColor += letters[Math.floor(Math.random() * 16)];
        }
        return newColor;
    };

    return (
        <div
            className="color-box"
            style={{
                backgroundColor: currentColor,
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            {currentColor}
        </div>
    );
};

export default ColorBox;
