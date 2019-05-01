import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEmptyObject } from '../../utils/empty'

import {
  Button,
  // InputSelect,
  Modal,
  // SearchField,
  // StatusAlert,
  // Table,
  // Icon,
} from '@edx/paragon';

import BadgeDownload from "../ProgressListItem";
import ProgressCardStatus from "../ProgressCardStatus";
import ProgressDetails from "../ProgressDetails";


const ProgressCard = (props) => {
  const { data } = props;

  const isProgressComplete = () => {
    if (isEmptyObject(data.assertion)) {
      return false;
    }
    return data.assertion.image_url.length > 0;
  };

  const getBadgeImage = () => {
    let _assertionUrl = data.assertion.assertion_url;

    return (
      <React.Fragment>
        {_assertionUrl && (
          // href={_assertionUrl} target="_blank"
          // <img className="card-img-top asserted" src={data.badge_class.image} alt={data.badge_class.display_name} />

          // title="I am the modal!" body="I was invoked by a button!"
          <ProgressDetails key={data.assertion.entityId} parentSelector=".modal-progress-details" progress={data} />
        )}
        {!_assertionUrl && (
          <img className="card-img-top not-asserted" src={data.badge_class.image} alt={data.badge_class.display_name} />
        )}
      </React.Fragment>
    );
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
    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 mb-3">
      <div className="card text-center mb-3">
        <div className="card-header mb-2">
          <ProgressCardStatus status={isProgressComplete()} title={data.block_display_name}/>
        </div>
        <div className="card-badge">
          {getBadgeImage()}
          <div className="card-body">
            <h5 className="card-title text-muted mb-2">{data.badge_class.display_name}</h5>
          </div>
          {/*<div className="card-footer">*/}
            {/*This is the card footer.*/}
          {/*</div>*/}
        </div>
      </div>
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
