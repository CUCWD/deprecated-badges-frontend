import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Progress from '../../components/Progress'
import {
  fetchCourseBadgesProgress,
} from '../../data/actions/progress';

import {
  fetchUserRoles,
} from '../../data/actions/roles';

function debug(args) {
  debugger;
  return true;
}

function shouldShowSpinner(state) {
  // if (state.roles.canUserViewGradebook === true) {
  //   return state.grades.showSpinner;
  // } else if (state.roles.canUserViewGradebook === false) {
  //   return false;
  // } // canUserViewGradebook === null
  return state.progress.badges.showSpinner;
}

const mapStateToProps = (state, ownProps) => debug() && (
  {
    progress: state.progress.badges.results,
    courseDetails: state.lmsDetails.course,
    userDetails: state.lmsDetails.user,
    showSpinner: shouldShowSpinner(state),
    hasInstructorStaffRights: state.roles.roles.hasInstructorStaffRights,
  }
);

const mapDispatchToProps = dispatch => debug && (
  {
    getUserRoles: (user, courseId) => {
        dispatch(fetchUserRoles(user, courseId))
    },
    getCourseBadgesProgress: (user, courseId) => {
        dispatch(fetchCourseBadgesProgress(user, courseId))
    },
  }
);

const ProgressPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress);

export default ProgressPage;
