import React from 'react';

const Inputs = props => (

    <div className="forms">
        <div className="buttons">
            <button onClick={props.onPlayClicked}>{props.isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={props.onResetClicked} disabled={props.isRunning}>Reset</button>
            <button onClick={props.onStepClicked} disabled={props.isRunning}>Krok</button>
        </div>
        <div className="inputs">
            <label>
                <span>Okres odświeżania</span>
                <input type="number" min="0" max="999" step="1" value={props.interval} onChange={props.onIntervalChanged} disabled={props.isRunning} />
            </label>
            <label>
                <span>Liczba wierszy</span>
                <input type="number" min="1" max="200" step="1" value={props.rows} onChange={props.onRowsChanged} disabled={props.isRunning} />
            </label>
            <label>
                <span>Liczba kolumn</span>
                <input type="number" min="1" max="200" step="1" value={props.cols} onChange={props.onColsChanged} disabled={props.isRunning} />
            </label>
        </div>
    </div>

);

export default Inputs;
