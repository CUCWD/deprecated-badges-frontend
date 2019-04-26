import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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


const ProgressListItem = ({badge}) => {
  const classAsserted = ( badge.assertion.image_url.length > 0 ? "asserted" : "not-asserted" );

  return (
      <tr className={classNames('progress-list-item', classAsserted)}>
        <td>{badge.block_display_name}</td>
        <td className="badge-name">
          <div>
            <a href={badge.assertion.assertion_url} target="_blank">
              <img src={badge.badge_class.image} alt={badge.badge_class.display_name} align="left" />
              <span>{badge.badge_class.display_name}</span>
            </a>
          </div>
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

ProgressListItem.propTypes = {
  badge: PropTypes.object.isRequired
};

export default ProgressListItem;
