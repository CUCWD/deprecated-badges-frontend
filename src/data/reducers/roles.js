
import { roleActions } from '../constants/actionTypes/roles';
import { combineReducers } from 'redux';

const initialState = {
  results: [],
  hasInstructorStaffRights: null,
};

function debug(args) {
    debugger;
  return true;
}

const roles = (state = initialState, action) => {
  switch(action.type)
  {
    case roleActions.request.GOT_ROLES:
      // debugger;
        return {
          ...state,
          hasInstructorStaffRights: action.isInstructorRights,
        };
    case roleActions.request.ERROR_FETCHING_ROLES:
      return {
        ...state,
        hasInstructorStaffRights: false,
      };
    default:
      return state;
  }
};

const metadata = combineReducers({
  roles,
});

export default metadata;
