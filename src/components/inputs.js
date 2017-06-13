import React from 'react';

const Inputs = props => (

    <div className="inputs">

        {/* buttons start / stop / reset / next */}
        <div className="buttons">
            <button title="Rozpocznij / zakończ symulację" onClick={props.onPlayClicked}>{props.isRunning ? 'Stop' : 'Start'}</button>
            <button title="Następny krok symulacji" onClick={props.onResetClicked} disabled={props.isRunning}>Reset</button>
            <button title="Zresetuj automat" onClick={props.onStepClicked} disabled={props.isRunning}>Krok</button>
        </div>

        <div className="input-blocks">

            {/* interval input */}
            <label title="Okres, po którym wykonany zostanie następny krok (w ms); można wprowadzać wartości całkowite od 0 do 9999; wartość '0' oznacza, że symulacja jest prowadzona najszybciej jak to jest możliwe">
                Okres odświeżania
                <input type="number" min={0} max={999} step={1} value={props.interval} onChange={props.onIntervalChanged} disabled={props.isRunning} />
            </label>

            {/* rows input */}
            <label title="Liczba wierszy automatu; można wprowadzać wartości całkowite od 1 do 200">
                Liczba wierszy
                <input type="number" min={1} max={200} step={1} value={props.rows} onChange={props.onRowsChanged} disabled={props.isRunning} />
            </label>

            {/* cols input */}
            <label title="Liczba kolumn automatu; można wprowadzać wartości całkowite od 1 do 999">
                Liczba kolumn
                <input type="number" min={1} max={200} step={1} value={props.cols} onChange={props.onColsChanged} disabled={props.isRunning} />
            </label>

        </div>

    </div>

);

export default Inputs;
