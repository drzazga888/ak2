import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Automaton from './containers';
import store from './reducers';
import './style.scss';

const toRender = (
    <Provider store={store}>
        <Automaton />
    </Provider>
);

ReactDOM.render(toRender, document.getElementById('react-me'));
