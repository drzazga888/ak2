import React from 'react';
import Ground from './ground';
import Inputs from './inputs';

const UI = props => (
    <div className="ui">
        <Inputs {...props} />
        <Ground width={props.rows} height={props.cols} bars={props.bars} />
    </div>
);

export default UI;
