import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

// import {
// //   Button,
// //   InputSelect,
// //   Modal,
// //   SearchField,
// //   StatusAlert,
// //   Table,
// //   Icon,
// } from '@edx/paragon';
import {isEmptyObject} from "../../utils/empty";

const ProgressBanner = ({has_progress, has_rights}) => {

    const indicatorProgress = ( has_progress ? '' : 'no-progress' );

    const getPathTitle = () => {
      return ( has_rights ? "Class Progress" : "My Learning Path" );
    };

    const getPathSubHeading = () => {
      return (
        has_rights
          ? "Here is all learner progress through the badges available for this course. Click each badge to learn more about an individual student's credential."
          : "Here is your progress through the badges available for this course. Click each badge to learn more or to save and share badges you've earned."
      )
    };

    // d-flex justify-content-left
    return (
      <div className={[classNames('row', 'learningpath', indicatorProgress, 'mb-4', 'pt-4', 'pb-4', 'pr-5', 'pl-5')]}>
        { has_progress && (
          <React.Fragment>
            <div className="row w-100">
              <h2 className="col">{getPathTitle()}</h2>
            </div>
            <div className="row w-100">
              <p className="col">
                {getPathSubHeading()}
              </p>
            </div>
          </React.Fragment>
        )}

        { !has_progress && (
          <h2>Doesn't exists</h2>
        )}
      </div>
    );
};

ProgressBanner.propTypes = {
  has_progress: PropTypes.bool.isRequired,
  has_rights: PropTypes.bool.isRequired,
};

export default ProgressBanner;

/*
<div className="learningpath-empty">
  <h3 className="hd-4 learningpath-empty-header">
    <Icon className={['fa', 'fa-certificate', 'fa-1x', 'color-black']} />
    No module badge configuration for this course has been setup
  </h3>
  <div className="learningpath-empty-detail">
                <span className="learningpath-empty-detail-title">
                    Please contact the support team to setup this functionality.
                </span>
  </div>
</div>
*/
