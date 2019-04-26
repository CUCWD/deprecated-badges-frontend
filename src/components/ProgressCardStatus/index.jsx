import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextClamp from 'react-text-clamp'

import {
  Icon,
} from '@edx/paragon';


const ProgressCardStatus = (props) => {

  const getStatusIndicator = () => {
    const indicatorIcon = ( props.status ? 'fa-check-circle' : 'fa-circle-thin' );
    const indicatorStatus = ( props.status ? 'complete' : 'incomplete' );

    return (
      <Icon className={[classNames('card-status-icon', 'fa', 'fa-2x', indicatorIcon, indicatorStatus, 'mr-3')]} />
    );
  };

  /*
  className="card-title my-0 font-weight-normal"
   */
  const getStatusTitle = () => {
    return (
      <div className="card-status-title">
        <TextClamp fontSize={14} maxLines={2} rgbBgColor={'rgba(255,255,255,0)'} textAlign={'left'}>
          {props.title}
        </TextClamp>
      </div>
    )
  };

  return (
    <div className="card-status p-2">
      {getStatusIndicator()}
      {getStatusTitle()}
    </div>
  );
};

ProgressCardStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProgressCardStatus;
