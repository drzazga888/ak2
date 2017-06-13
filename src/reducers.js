import { createStore } from 'redux';
import { step as stepActionCreator } from './actions';
import { initBars, nextStep, getRoughness } from './alghoritms';

let intervalId = null;

const rowsInit = 20;
const colsInit = 20;

const initialState = {
    isRunning: false,
    rows: rowsInit,
    cols: colsInit,
    interval: 0,
    bars: initBars(rowsInit, colsInit)
};

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
            return { ...state, bars: nextStep(state.rows, state.cols, state.bars) }
        default:
            return state;
    }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
