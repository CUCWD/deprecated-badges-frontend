import React from 'react';
import PropTypes from 'prop-types';

const ProgressBanner = ({}) => {
    return (
      <div className="container">
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
    );
};

export default ProgressBanner;

