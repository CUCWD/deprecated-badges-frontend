import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';

// import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
// } from '@edx/paragon';

import styles from './RecipientBadgeLearningPathAssertionStatus.scss';

const RecipientBadgeLearningPathAssertionStatus = ({status, title}) => {
  const badgeStatus = ( status ? "fa-check-circle" : "fa-circle-thin" );
  const badgeTitle = ( title ? title : "Missing Badge Title" );

  return (

    <div className="col-md badge-assertion-status" data-identifier="badge-assertion-status-icon">
        <span className="icon align-middle">
          <i className={classNames(
            FontAwesomeStyles.fa,
            FontAwesomeStyles[badgeStatus])}>
          </i>
        </span>
        <div className="details align-middle">
          <h3>{badgeTitle}</h3>
        </div>
    </div>

  )
};

RecipientBadgeLearningPathAssertionStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default RecipientBadgeLearningPathAssertionStatus;
