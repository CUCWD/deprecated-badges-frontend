
import { badgeActions } from '../constants/actionTypes/progress';
import { combineReducers } from 'redux';

const badges = (state = [], action) => {
  switch(action.type)
  {
    case badgeActions.request.REQUEST_LOAD_COURSE_BADGES:
      return action.badges;

    default:
      return state;
  }
};

const progress = combineReducers({
  badges,
});

export default progress;
