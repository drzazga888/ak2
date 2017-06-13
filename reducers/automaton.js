import { createStore } from 'redux';
import { step as stepActionCreator } from '../actions/automaton';

const rowsInit = 20;
const colsInit = 20;

const initBars = (rows, cols) => new Array(rows).fill(null).map(() => new Array(cols).fill(0));

const initialState = {
    isRunning: false,
    rows: rowsInit,
    cols: colsInit,
    interval: 0,
    bars: initBars(rowsInit, colsInit)
};

const step = ({ rows, cols, bars }) => {
    let targetCol = Math.floor(Math.random() * rows);
    let targetRow = Math.floor(Math.random() * cols);
    const neighbours = [
        { row: targetRow, col: (targetCol + cols - 1) % cols },
        { row: targetRow, col: (targetCol + 1) % cols },
        { row: (targetRow + 1) % rows, col: targetCol },
        { row: (targetRow + rows - 1) % rows, col: targetCol }
    ];
    const withHeights = neighbours.map(({ row, col }) => ({ row, col, height: bars[row][col] }));
    const localMinimum = withHeights.reduce((min, place) => (min === null || place.height < min) ? place.height : min, null);
    const localMinimumPlaces = withHeights.filter(place => place.height === localMinimum);
    const localMinimumPlace = localMinimumPlaces[Math.floor(Math.random() * localMinimumPlaces.length)];
    if (localMinimumPlace.height < bars[targetRow][targetCol]) {
        targetCol = localMinimum.col;
        targetRow = localMinimum.row;
    }
    if (targetCol === undefined) {
        console.log(targetRow, targetCol);
    }
    return bars.map((row, rowNr) => row.map((field, colNr) => field + (targetCol === colNr && targetRow === rowNr)));
};

function getRoughness({ bars, rows, cols }) {
    const all = rows * cols;
    const sumAll = bars.reduce((sum, row) => sum + row.reduce((sumRow, bar) => sumRow + bar, 0), 0);
    const avg = sumAll / all;
    const sumDiff = bars.reduce((sum, row) => sum + row.reduce((sumRow, bar) => sumRow + Math.pow(bar - avg, 2), 0), 0);
    return Math.sqrt(sumDiff / (all * (all - 1)));
}

let intervalId = null;

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_RUNNING':
            const switchedToRunning = !state.isRunning;
            if (switchedToRunning) {
                intervalId = setInterval(() => store.dispatch(stepActionCreator()), state.interval);
            } else {
                clearInterval(intervalId);
            }
            return { ...state, isRunning: switchedToRunning };
        case 'SET_ROWS':
            return { ...state, rows: action.rows, bars: initBars(action.rows, state.cols) };
        case 'SET_COLS':
            return { ...state, cols: action.cols, bars: initBars(state.rows, action.cols) };
        case 'SET_INTERVAL':
            return { ...state, interval: action.interval };
        case 'RESET_BOARD':
            return { ...state, bars: initBars(state.rows, state.cols) };
        case 'STEP':
            console.log(getRoughness(state));
            return { ...state, bars: step(state) }
        default:
            return state;
    }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
