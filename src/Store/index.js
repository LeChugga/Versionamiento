/**
 * @author : Brayan Mauricio Monroy Fraile
 * @since  : 09/02/2020
 * @desc : El estado inicial de la aplicación esta vacio y redux esta configurado
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

// --- Reducers
import configReducer from './Reducers/ConfigReducer';
import userReducer from "./Reducers/OptionReducer";

const Logger = createLogger()

export default (initialState = {}) => (
    createStore(
        combineReducers({
            config: configReducer,
            login: userReducer,
        }),
        initialState,
        applyMiddleware(
            Logger,
            promiseMiddleware,
            thunk
        )
    )
);