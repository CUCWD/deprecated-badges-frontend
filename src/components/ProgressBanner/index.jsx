import React from 'react';
import PropTypes from "prop-types";

import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
  Icon,
} from '@edx/paragon';

const ProgressBanner = ({has_progress}) => {
    return (
      <div className="d-flex justify-content-left">
        { has_progress &&
          <div id="my-learningpath">
            <div className="row">
              <h2 className="col">My Learning Path</h2>
            </div>
            <div className="row">
              <p className="col">
                Here is your progress through the badges available for this course. Click each badge to
                learn more or to save and share badges you've earned.
              </p>
            </div>
          </div>
        }

        { has_progress === false &&
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
        }
      </div>
    );
};

ProgressBanner.propTypes = {
  has_progress: PropTypes.bool.isRequired,
};

export default ProgressBanner;
