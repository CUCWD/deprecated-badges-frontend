import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusAlert,
  Icon,
} from '@edx/paragon';
import BackendStatusBanner from '../BackendStatusBanner';
import ProgressBanner from '../ProgressBanner';
import ProgressCourseList from '../ProgressCourseList';
import ProgressCard from '../ProgressCard';

export default class Progress extends React.Component {
  componentDidMount() {
    // debugger;
    this.props.getUserRoles(
      this.props.userDetails.username,
      this.props.courseDetails.id,
    );
  }

  componentDidUpdate(prevProps) {
    // debugger;
    const { hasInstructorStaffRights } = this.props;
    if (hasInstructorStaffRights !== prevProps.hasInstructorStaffRights) {
      this.props.getCourseBadgesProgress(
        this.props.userDetails.username,
        this.props.courseDetails.id,
        this.props.hasInstructorStaffRights,
      );
    }
  }

  getBadgeProgress() {
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
    const { headings } = this.props;

    if (this.props.hasInstructorStaffRights) {
      return (
        <React.Fragment>
          <ProgressBanner hasProgress={(progress.length ? true : false)} hasRights={this.props.hasInstructorStaffRights} />
          <ProgressCourseList headings={headings} data={progress} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <ProgressBanner hasProgress={(progress.length ? true : false)} hasRights={this.props.hasInstructorStaffRights} />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {progress && (
              <div className="row equal-col-height">
                {progress.map(learnerProgress => (
                  <ProgressCard key={learnerProgress.block_id} data={learnerProgress} />
                ))}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderNoBadgeProgress() {
    return (
      <StatusAlert
        dialog={
          <React.Fragment>
            <Icon className="fa fa-exclamation-circle mr-2" screenReaderText="Badge Progress Icon" />
            There is no course badge progress to show.
          </React.Fragment>
        }
        alertType="info"
        dismissible={false}
        open
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <BackendStatusBanner />
        {this.hasBadgeProgress() && (
           this.renderBadgeProgress()
        )}
        {!this.hasBadgeProgress() && (
           this.renderNoBadgeProgress()
        )}
      </React.Fragment>
    );
  }
}

Progress.propTypes = {
  progress: PropTypes.arrayOf(PropTypes.shape({
    assertion: PropTypes.shape({
      issuedOn: PropTypes.string,
      expires: PropTypes.string,
      revoked: PropTypes.bool,
      assertion_url: PropTypes.string,
      image_url: PropTypes.string,
      entityId: PropTypes.string,
      recipient: PropTypes.shape({
        plaintextIdentity: PropTypes.string,
      }),
      issuer: PropTypes.shape({
        entityType: PropTypes.string,
        entityId: PropTypes.string,
        openBadgeId: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
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
  headings: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.string,
  })),
  showSpinner: PropTypes.bool,
  hasInstructorStaffRights: PropTypes.bool,
  userDetails: PropTypes.shape({
    username: PropTypes.string,
  }),
  courseDetails: PropTypes.shape({
    id: PropTypes.string,
  }),
  getUserRoles: PropTypes.func.isRequired,
  getCourseBadgesProgress: PropTypes.func.isRequired,
};

Progress.defaultProps = {
  progress: {
    assertion: null,
    badge_class: null,
    block_id: '',
    block_display_name: '',
    block_order: 0,
    course_id: '',
    event_type: '',
  },
  headings: null,
  showSpinner: false,
  hasInstructorStaffRights: false,
  userDetails: null,
  courseDetails: null,
};
