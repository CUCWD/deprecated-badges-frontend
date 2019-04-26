import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  InputSelect,
  Modal,
  SearchField,
  StatusAlert,
  Table,
  Icon,
} from '@edx/paragon';
import BackendStatusBanner from '../BackendStatusBanner';
import ProgressBanner from '../ProgressBanner';
import ProgressList from '../ProgressList';
import ProgressCard from "../ProgressCard";


export default class Progress extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    // debugger;
    this.props.getCourseBadgesProgress(
      this.props.userDetails.username,
      this.props.courseDetails.id
    );
  }

  getBadgeProgress(courseStatus) {
    const { progress } = this.props;
    if (progress) {
      return progress;
    }
    return [];
  }

  hasBadgeProgress() {
    const progress = this.getBadgeProgress();
    return progress && progress.length > 0;
  }

  renderBadgeProgress() {
    const progress = this.getBadgeProgress();

    // Todo: Need to add instructor scope to render out ProgressList.
    const hasInstructorRights = false;  // ( this.props.userDetails.role == 'staff' ? true : false )
    if (hasInstructorRights) {
      return (
        <React.Fragment>
          <ProgressBanner has_progress={(progress.length ? true : false)} has_rights={hasInstructorRights}/>
          <ProgressList progress={progress}/>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <ProgressBanner has_progress={(progress.length ? true : false)} has_rights={hasInstructorRights}/>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {progress && (
            <div className="row equal-col-height">
              {progress.map(learnerProgress => (
                <ProgressCard key={learnerProgress.block_id} data={learnerProgress}/>
              ))}
            </div>
          )}
          </div>
        </div>
      </React.Fragment>
    );
  }
  // <div className="card-deck col-sm-12 col-md-12 col-lg-12 mb-3">
  // <div className="col-sm-12 col-md-4 col-lg-3 mb-3">

  renderNoBadgeProgress() {
    return (
      <StatusAlert
        dialog={
          <React.Fragment>
            <Icon className={['fa', 'fa-exclamation-circle', 'mr-2']} />
            There is no course badge progress to show.
          </React.Fragment>
        }
        dismissible={false}
        open
      />
    );
  }


  render() {
    const {progress} = this.props;

    return (
      <React.Fragment>
        <BackendStatusBanner />
        {this.hasBadgeProgress() && (
           this.renderBadgeProgress()
        )}
        {!this.hasBadgeProgress() && this.renderNoBadgeProgress()}
      </React.Fragment>
    );
  }

//       <div className="progress-container">
// <div className="row">
// <div className="col-sm-12 col-md-12 col-lg-12">
// <div className="row equal-col-height">


// <div className="d-flex justify-content-center">
// <div className="progress-container">

//
// { this.props.showSpinner && (
//   <div className="spinner-overlay">
//     <Icon className={['fa', 'fa-spinner', 'fa-spin', 'fa-5x', 'color-black']} />
//   </div>
// )}
//
// { progress.length > 0 && (
//   <ProgressList progress={progress} />
// )}
//

//
// </div>
// </div>

}
//
// Progress.defaultProps = {
//   badges: [],
//   match: {
//     params: {
//       user: '',
//       courseId: '',
//     },
//   },
// }

Progress.propTypes = {
  progress: PropTypes.arrayOf(PropTypes.shape({
    assertion: PropTypes.shape({
      assertion_url: PropTypes.string,
      image_url: PropTypes.string,
    }),
    badge_class: PropTypes.shape({
      course_id: PropTypes.string,
      criteria: PropTypes.string,
      description: PropTypes.string,
      display_name: PropTypes.string,
      image: PropTypes.string,
      issuing_component: PropTypes.string,
      slug: PropTypes.string,
    }),
    block_id: PropTypes.string,
    block_display_name: PropTypes.string,
    block_order: PropTypes.number,
    course_id: PropTypes.string,
    event_type: PropTypes.string,
  })),
  showSpinner: PropTypes.bool,
  getCourseBadgesProgress: PropTypes.func.isRequired,
};


