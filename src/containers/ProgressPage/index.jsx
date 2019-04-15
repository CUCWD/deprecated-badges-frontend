import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Progress from '../../components/Progress'
import {
  fetchCourseBadgesProgress
} from '../../data/actions/progress';

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
    courseDetails: state.lmsDetails.course,
    userDetails: state.lmsDetails.user,
    showSpinner: shouldShowSpinner(state),
  }
);

const mapDispatchToProps = dispatch => debug && (
  {
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
