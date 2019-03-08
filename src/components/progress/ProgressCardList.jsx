import React from 'react';
import PropTypes from 'prop-types';

import ProgressCardListItem from './ProgressCardListItem';

import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
} from '@edx/paragon';

const ProgressCardList = ({badges}) => {
  return (
      <div>
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
          {badges.map(badge =>
            <ProgressCardListItem key={badge.badgeClass.slug} badge={badge}/>
          )}
          </tbody>
        </table>
      </div>
  );
};

export default ProgressCardList;
