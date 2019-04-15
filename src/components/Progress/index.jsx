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
import ProgressCardList from '../ProgressCardList';


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

  render() {
    const {progress} = this.props;

    // debugger;

    return (
      <div className="d-flex justify-content-center">
        <div className="progress-container">
          <BackendStatusBanner />
          <ProgressBanner has_progress={(progress.length ? true : false)}/>

          { this.props.showSpinner && (
              <div className="spinner-overlay">
                <Icon className={['fa', 'fa-spinner', 'fa-spin', 'fa-5x', 'color-black']} />
              </div>
          )}

          { progress.length > 0 && (
            <ProgressCardList progress={progress} />
          )}

        </div>
      </div>
    );
  }

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
    course_id: PropTypes.string,
    event_type: PropTypes.string,
  })),
  showSpinner: PropTypes.bool,
  getCourseBadgesProgress: PropTypes.func.isRequired,
};


