import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

// import BadgeDownload from '../progress_bak/BadgeDownload'
import BadgeDownload from '../BadgeDownload';

import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
} from '@edx/paragon';


const ProgressCardListItem = ({badge}) => {
  // debugger;
  return (
      <tr className="progress-card-list-item">
        <td className="badge-name">
          <span>
            <a href={badge.assertion.assertionUrl} target="_blank">
              <img src={badge.badge_class.image} alt={badge.badge_class.display_name} align="left" />
              <h3>{badge.badge_class.display_name}</h3>
            </a>
          </span>
        </td>
        <td>{badge.badge_class.description}</td>
        <td>{badge.badge_class.criteria}</td>
        <td>
          { badge.assertion.image_url.length > 0 && (
            <BadgeDownload url={badge.assertion.image_url} />
          )}
        </td>
      </tr>
  );
};

ProgressCardListItem.propTypes = {
  badge: PropTypes.object.isRequired
};

export default ProgressCardListItem;
