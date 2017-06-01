import React from 'react';
import Ground from './ground';
import Inputs from './inputs';

const randomize = (width, height, barMax) => {
    let arr = [];
    for (let i = 0; i < height; ++i) {
        let row = [];
        for (let j = 0; j < width; ++j) {
            row.push(Math.floor(Math.random() * barMax));
        }
        arr.push(row);
    }
    return arr;
};

const UI = () => (
    <div className="ui">
        <Inputs isRunning={false} />
        <Ground width={5} height={5} bars={randomize(5, 5, 6)} />
    </div>
);

export default UI;