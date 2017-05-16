import React from 'react';
import ReactDOM from 'react-dom';
import Ground from './components/ground';
import './style.scss';

const props = {
    width: 10,
    height: 10,
    bars: [
        [ 0, 0, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [ 0, 1, 2, 4, 2, 1, 2, 2, 2, 2 ],
        [ 1, 0, 2, 2, 3, 1, 2, 2, 2, 2 ],
        [ 1, 0, 1, 2, 2, 2, 2, 0, 1, 2 ],
        [ 0, 0, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [ 0, 1, 2, 4, 2, 1, 2, 2, 2, 2 ],
        [ 1, 0, 2, 2, 3, 1, 2, 2, 2, 2 ],
        [ 1, 0, 1, 2, 2, 2, 2, 0, 1, 2 ],
        [ 0, 0, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [ 0, 1, 2, 4, 2, 1, 2, 2, 2, 2 ]
    ]
};


ReactDOM.render(<Ground {...props} />, document.getElementById('react-me'));