import { createStore } from 'redux';
import { step as stepActionCreator } from './actions';
import { initBars, nextStep, getRoughness } from './alghoritms';

let intervalId = null;

const initialParams = {
    rows: 20,
    cols: 20,
    interval: 50
};

const initialState = {
    isRunning: false,
    rows: initialParams.rows,
    cols: initialParams.cols,
    interval: initialParams.interval,
    bars: initBars(initialParams.rows, initialParams.cols),
    roughness: 0,
    step: 0
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
            return { ...state, rows: action.rows, bars: initBars(action.rows, state.cols), step: 0, roughness: 0 };
        case 'SET_COLS':
            return { ...state, cols: action.cols, bars: initBars(state.rows, action.cols), step: 0, roughness: 0 };
        case 'SET_INTERVAL':
            return { ...state, interval: action.interval };
        case 'RESET_BOARD':
            return { ...state, bars: initBars(state.rows, state.cols), step: 0, roughness: 0 };
        case 'STEP':
            const bars = nextStep(state.rows, state.cols, state.bars);
            const roughness = getRoughness(state.rows, state.cols, bars);
            return { ...state, bars, roughness, step: state.step + 1 }
        default:
            return state;
    }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
