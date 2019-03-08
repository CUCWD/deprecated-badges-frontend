import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
} from '@edx/paragon';

import styles from './ProgressCardListItem.scss';

const ProgressCardListItem = ({badge}) => {
  return (
      <tr className="progress-card-list-item">
        <td className="badge-name">
          <span>
            <a href={badge.assertionUrl} target="_blank">
              <img src={badge.imageUrl} alt={badge.display_name} align="left" />
              <h3>{badge.badgeClass.display_name}</h3>
            </a>
          </span>
        </td>
        <td>{badge.badgeClass.description}</td>
        <td>{badge.badgeClass.criteria}</td>
        <td>
          <a href={badge.assertionUrl} target="_blank">
            <h4>SHARE</h4>
          </a>
        </td>
      </tr>
  );
};

ProgressCardListItem.propTypes = {
  badge: PropTypes.object.isRequired
};

export default ProgressCardListItem;

// if (awardBadge) {
//   <BadgeAssertion/>
// }
// else {
//   <BadgeClass/>
// }
