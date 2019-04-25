import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEmptyObject } from '../../utils/empty'

import {
  // Button,
  // InputSelect,
  // Modal,
  // SearchField,
  // StatusAlert,
  // Table,
  Icon,
} from '@edx/paragon';

import BadgeDownload from "../ProgressListItem";
import ProgressCardStatus from "../ProgressCardStatus";


const ProgressCard = (props) => {
  const { data } = props;

  const isProgressComplete = () => {
    if (isEmptyObject(data.assertion)) {
      return false;
    }
    return data.assertion.image_url.length > 0;
  };

  // const getProgressStatus = () => {
  //   if (isProgressComplete()) {
  //     return (
  //       <ProgressCardStatus data={isProgressComplete()}/>
  //     );
  //   }
  //   return (
  //     <React.Fragment>
  //       <Icon className={['fa', 'fa-exclamation-circle', 'mr-2']} />
  //       There is no course badge progress to show.
  //     </React.Fragment>
  //   );
  // };

  return (
    <div className="card col-sm-12 col-md-4 col-lg-3 mb-3 shadow-sm">
      <div className="card-header">
        <ProgressCardStatus status={isProgressComplete()} title={data.block_display_name}/>
      </div>
      <div className="card-body">
        <p className="card-subtitle mb-2 text-muted">Test</p>
      </div>
      {/*<div className="card-footer">*/}
        {/*This is the card footer.*/}
      {/*</div>*/}
    </div>
  );
};

ProgressCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProgressCard;

// const classAsserted = ( badge.assertion.image_url.length > 0 ? "asserted" : "not-asserted" );
//
// return (
//   <tr className={classNames('progress-card-list-item', classAsserted)}>
//     <td>{badge.block_display_name}</td>
//     <td className="badge-name">
//       <div>
//         <a href={badge.assertion.assertionUrl} target="_blank">
//           <img src={badge.badge_class.image} alt={badge.badge_class.display_name} align="left" />
//           <span>{badge.badge_class.display_name}</span>
//         </a>
//       </div>
//     </td>
//     <td>{badge.badge_class.description}</td>
//     <td>{badge.badge_class.criteria}</td>
//     <td>
//       { badge.assertion.image_url.length > 0 && (
//         <BadgeDownload url={badge.assertion.image_url} />
//       )}
//     </td>
//   </tr>
// );
