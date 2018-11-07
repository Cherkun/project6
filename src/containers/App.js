import thunkMiddleware from 'redux-thunk';
import React, {Component} from 'react';
import Root from './Root';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";

let store = createStore(reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware, // позволяет нам отправлять функции
    )
);

const App =()=> (
            <div>
                <Provider store={store}>
                    <Router>
                        <Root/>
                    </Router>
                </Provider>
            </div>
)

export default App