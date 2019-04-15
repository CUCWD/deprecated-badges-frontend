import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import history from '../history';
import createRootReducer from '../reducers';
import apiClient from '../apiClient';

// import { fetchCourseBadgesProgress } from '../actions/progress';

const initialState = apiClient.getAuthenticationState();
const loggerMiddleware = createLogger();

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunkMiddleware,
    loggerMiddleware,
    reduxImmutableStateInvariant()
  )),
);

// store.dispatch(fetchCourseBadgesProgress());

export default store;

