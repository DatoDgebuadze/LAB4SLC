import React from 'react';
import ColorBox from './ColorBox';


const ColorBoxesContainer = () => {
    const generateRandomColors = (rowCount, colCount) => {
        const colorsArray = [];
        for (let i = 0; i < rowCount; i++) {
            const row = [];
            for (let j = 0; j < colCount; j++) {
                row.push(getRandomColor());
            }
            colorsArray.push(row);
        }
        return colorsArray;
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const colorsArray = generateRandomColors(5, 5);

    return (
        <div className="color-boxes-container">
            {colorsArray.map((row, rowIndex) => (
                <div key={rowIndex} className="color-box-row">
                    {row.map((color, colIndex) => (
                        <ColorBox key={colIndex} color={color} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ColorBoxesContainer;
