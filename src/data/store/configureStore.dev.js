import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import history from '../history';
import createRootReducer from '../reducers';
import apiClient from '../apiClient';

import { loadCourseBadges } from '../actions/progress';

const initialState = apiClient.getAuthenticationState();
const loggerMiddleware = createLogger();

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunkMiddleware,
    loggerMiddleware,
  )),
);

store.dispatch(loadCourseBadges());

export default store;

