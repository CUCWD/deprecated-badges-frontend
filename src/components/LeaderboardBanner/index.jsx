import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

const LeaderboardBanner = () => {

    const getPathTitle = () => {
      return (" LeaderBoard ");
    };

    return (
      <div>
          <React.Fragment>
            <div className="row w-100">
              <h2 className="col">{getPathTitle()}</h2>
            </div>
           </React.Fragment>
      </div>
    );
};

export default LeaderboardBanner;

