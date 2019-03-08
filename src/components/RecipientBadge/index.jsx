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

import styles from './RecipientBadgeLearningPathAssertionCard.scss';

export default class RecipientBadge extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      checked: false,
    };
  }


}

const RecipientBadge = ({status, title}) => {
  // const badgeStatus = ( status ? "fa-check-circle" : "fa-circle-thin" );
  // const badgeTitle = ( title ? title : "Missing Badge Title" );

  return (

    <div className="col-md badge-assertion-card" data-identifier="badge-status-icon">
      {/*<span className="icon align-middle">*/}
      {/*<i className={classNames(*/}
      {/*FontAwesomeStyles.fa,*/}
      {/*FontAwesomeStyles[badgeStatus])}>*/}
      {/*</i>*/}
      {/*</span>*/}
      {/*<div className="details align-middle">*/}
      {/*<h3>{badgeTitle}</h3>*/}
      {/*</div>*/}
    </div>

  )
};

RecipientBadgeLearningPathAssertionCard.propTypes = {
  // image: PropTypes.image.isRequired,
  // title: PropTypes.string.isRequired
};

export default RecipientBadgeLearningPathAssertionCard;
