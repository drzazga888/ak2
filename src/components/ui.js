import React from 'react';
import Ground from './ground';
import Inputs from './inputs';
import Stats from './stats';

const UI = props => (

    <div className="app">
        <div className="side">
            <header className="app-header">
                <h1>Rozrost podłoża 2D</h1>
                <p>Model Family'ego</p>
                <p>Autor: Kamil Drzazga</p>
            </header>
            <Inputs {...props} />
            <Stats {...props} />
        </div>
        <div className="main">
            <Ground width={props.rows} height={props.cols} bars={props.bars} />
        </div>
    </div>

);

export default UI;
