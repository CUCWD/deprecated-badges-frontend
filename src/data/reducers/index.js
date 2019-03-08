import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import posts from './posts';
import comment from './comment';
import progress from './progress';
import connectionStatus from './connectionStatus';
import { badgeActions } from '../constants/actionTypes/progress';

const identityReducer = (state) => {
  const newState = { ...state };
  return newState;
};

export default (history) => combineReducers({
  router: connectRouter(history),
  // The authentication state is added as initialState when
  // creating the store in data/store/configureStore.js.
  authentication: identityReducer,
  posts,
  comment,
  progress,
  connectionStatus,
});
