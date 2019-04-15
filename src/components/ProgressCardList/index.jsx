import React from 'react';
import PropTypes from 'prop-types';

import ProgressCardListItem from '../ProgressCardListItem';

import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
} from '@edx/paragon';

function debug(args) {
  debugger;
  return true;
}

const ProgressCardList = ({progress}) => {
  // debugger;

  // if (typeof(progress) !== 'undefined' || progress != null) {
  //   return <p>No badges available for this course.</p>
  // }

  return (
      <div className="d-flex justify-content-center">
        <table className="table">
          <thead>
          <tr>
            <th>Badge</th>
            <th>Description</th>
            <th>Criteria</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {progress.map(badge =>
            <ProgressCardListItem key={badge.block_id} badge={badge}/>
          )}
          </tbody>
        </table>
      </div>
  );
};

ProgressCardList.propTypes = {
  progress: PropTypes.array.isRequired,
};

export default ProgressCardList;
