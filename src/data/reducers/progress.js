import { combineReducers } from 'redux';
import { badgeActions } from '../constants/actionTypes/progress';

const initialState = {
  results: [],
  headings: [],
  startedFetching: false,
  finishedFetching: false,
  errorFetching: false,
  showSpinner: true,
};

// function debug(args) {
//     debugger;
//   return true;
// }

const badges = (state = initialState, action) => {
  switch (action.type) {
    case badgeActions.request.REQUEST_GOT_COURSE_BADGES:
      return {
        ...state,
        results: action.progress,
        headings: action.headings,
        showSpinner: false,
      };
    case badgeActions.request.REQUEST_STARTED_FETCHING_COURSE_BADGES:
      return {
        ...state,
        startedFetching: true,
        finishedFetching: false,
        showSpinner: true,
      };
    case badgeActions.request.REQUEST_ERROR_FETCHING_COURSE_BADGES:
      return {
        ...state,
        finishedFetching: true,
        errorFetching: true,
        showSpinner: false,
      };
    case badgeActions.request.REQUEST_FINISHED_FETCHING_COURSE_BADGES:
      return {
        ...state,
        finishedFetching: true,
        showSpinner: false,
      };
    default:
      return state;
  }
};

const metadata = combineReducers({
  badges,
});

export default metadata;
