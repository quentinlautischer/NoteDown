import React, { Component } from 'react';

import Navigate from './Navigate';

// TODO: delete any unused stuff later, including from npm dependencies
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';

import appReducer from '../shared/reducers/appReducer';
import notesReducer from '../shared/reducers/notesReducer';
import editorReducer from '../shared/reducers/editorReducer';

const reducer = combineReducers({
        state: appReducer,
        notes: notesReducer,
        editor: editorReducer
    });
const store = createStore(reducer);

export default class App extends Component {
    render() {
        console.log("START " + JSON.stringify(store.getState()));

        store.dispatch({type: 'SET_USER', userid: 'someid'});

        console.log("END " + JSON.stringify(store.getState()));

        return(
            <Provider store={store}>
                <Navigate />
            </Provider>
        );
    }
}
