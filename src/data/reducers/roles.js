
import { badgeActions } from '../constants/actionTypes/roles';
import { combineReducers } from 'redux';

const initialState = {
  results: [],
  hasInstructorStaffRights: false,
};

function debug(args) {
    debugger;
  return true;
}

const roles = (state = initialState, action) => {
  switch(action.type)
  {
    case badgeActions.request.GOT_ROLES:
      debugger;
        return {
          ...state,
          hasInstructorStaffRights: action.isInstructorRights,
        };
    default:
      return state;
  }
};

const metadata = combineReducers({
  roles,
});

export default metadata;
