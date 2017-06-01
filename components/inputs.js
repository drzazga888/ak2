import React from 'react';

const Inputs = ({ isRunning }) => (
                         
    <div className="forms">
        <div className="buttons">
            <button>{isRunning ? 'Stop' : 'Start'}</button>
            <button disabled={isRunning}>Reset</button>
            <button disabled={isRunning}>Krok</button>
        </div>
        <div className="inputs">
            <label>
                <span>Okres odświeżania</span>
                <input type="number" min="0" max="999" step="1" />
            </label>
            <label>
                <span>Liczba wierszy</span>
                <input type="number" min="1" max="200" step="1" />
            </label>
            <label>
                <span>Liczba kolumn</span>
                <input type="number" min="1" max="200" step="1" />
            </label>
        </div>
    </div>

);

export default Inputs;