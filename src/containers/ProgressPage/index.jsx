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

const mapStateToProps = (state, ownProps) => (
  {
    progress: state.progress.badges.results,
    headings: state.progress.badges.headings,
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
    getCourseBadgesProgress: (user, courseId, hasInstructorStaffRights) => {
        dispatch(fetchCourseBadgesProgress(user, courseId, hasInstructorStaffRights))
    },
  }
);

const ProgressPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress);

export default ProgressPage;
