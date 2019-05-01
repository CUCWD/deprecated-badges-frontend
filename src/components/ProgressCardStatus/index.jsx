import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import TextClamp from 'react-text-clamp'

import {
  Icon,
} from '@edx/paragon';


const ProgressCardStatus = (props) => {

  const getStatusIndicator = () => {
    const indicatorIcon = ( props.status ? 'fa-check-circle' : 'fa-circle-thin' );
    const indicatorStatus = ( props.status ? 'complete' : 'incomplete' );
    return (
      <Icon className={classNames('card-status-icon', 'fa', 'fa-2x', indicatorIcon, indicatorStatus, 'mr-3')} screenReaderText="Badge Progress Status Icon" />
    );
  };

  const getStatusTitle = () => {
    let stripNumPrefix = props.title.replace(/[0-9]+\./g, '');
    return (
      <div className="card-status-title">
          {stripNumPrefix}
      </div>
    )
  };
  // <TextClamp fontSize={14} maxLines={2} rgbBgColor={'rgba(255,255,255,0)'} textAlign={'left'}>

  return (
    <div className="card-status pt-2 pr-0 pb-2 pl-0">
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
