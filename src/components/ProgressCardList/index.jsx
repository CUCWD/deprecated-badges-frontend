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

const sortProgressByCourseBlockOrder = (progress) => {
  return progress.sort(function(a, b) {
    if (a.block_order < b.block_order) { return -1; }
    if (a.block_order > b.block_order) { return 1; }
    return 0;
  });
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
            <th>Module</th>
            <th>Badge</th>
            <th>Description</th>
            <th>Criteria</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {sortProgressByCourseBlockOrder(progress).map(badge =>
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
