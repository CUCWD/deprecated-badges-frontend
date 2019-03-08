import React from 'react';
import PropTypes from 'prop-types';

// import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
// } from '@edx/paragon';

import RecipientBadgeLearningPathAssertionStatus from '../RecipientBadgeLearningPathAssertionStatus';
import RecipientBadgeLearningPathAssertionCard from '../RecipientBadgeLearningPathAssertionCard';

const RecipientBadgeLearningPathAssertion = ({status, title}) => {
  return (
    <div className="col-sm badge-assertion">
      <RecipientBadgeLearningPathAssertionStatus status={status} title={title} />
      <RecipientBadgeLearningPathAssertionCard />
    </div>
  )
};

export default RecipientBadgeLearningPathAssertion;
