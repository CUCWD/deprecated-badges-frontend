import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  Button,
  // InputSelect,
  Modal,
  // SearchField,
  // StatusAlert,
  // Table,
  Icon,
} from '@edx/paragon';
import ProgressCard from "../ProgressCard";


export default class ProgressDetails extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = {
      modalOpen: false,
      modalModel: [{}],
    };
  }

  openModal() {
    this.setState({
      modalOpen: true,
      modalModel: [{}],
    });
  }

  resetModalWrapperState() {
    this.setState({
      modalOpen: false,
      modalModel: [{}],
    });
    // this.button.focus();
  }

  render() {
    const {
      badgeClass
    } = this.props;

    const childElements = (
      <img className="card-img-top asserted" src={badgeClass.image} alt={badgeClass.display_name} />
    );

    return (
      <React.Fragment>
          <div>
            <div className="modal-progress-details" />
            <Button
              buttonType="link"
              className="m-0 p-0"
              onClick={this.openModal}
              children={childElements}
            />
          </div>
          <Modal
            open={this.state.modalOpen}
            closeText="Close"
            body={(
              <React.Fragment>
                <div className="progress-details">
                  <div className="progress-details-header mb-5">
                    <div className="progress-details-title row w-100">
                      <h2 className="col">{badgeClass.display_name}</h2>
                    </div>
                    <div className="progress-details-description row w-100">
                      <p className="col">
                        {badgeClass.description}
                      </p>
                    </div>
                  </div>
                  <div className="progress-details-body row w-100">
                    <div className="progress-details-image col col-3">
                      <img src={badgeClass.image} alt={badgeClass.display_name} />
                    </div>
                    <div className="progress-details-meta col col-9">
                      <div className="progress-details-meta-recipient">
                        <h3>Recipient</h3>
                        <p>{badgeClass.recipient}</p>
                      </div>
                      <div className="progress-details-meta-criteria">
                        <h3>Criteria</h3>
                        <p>{badgeClass.criteria}</p>
                      </div>
                      <div className="progress-details-meta-issuer">
                        <h3>Issuer</h3>
                        <p>{badgeClass.issuer}</p>
                      </div>
                      <div className="progress-details-meta-share">
                        <p>Please use Badgr.io to download and upload your badge content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
            parentSelector={this.props.parentSelector}
            buttons={[
              <Button
                label="Progress Details"
                buttonType="link"
                onClick={this.openModal}
              />,
            ]}
            onClose={this.resetModalWrapperState}
          />
      </React.Fragment>
    );
  }
}
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

ProgressDetails.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  parentSelector: PropTypes.string,
  badgeClass: PropTypes.shape({}).isRequired,
};
// ProgressDetails.propTypes = {
//   data: PropTypes.shape({}).isRequired,
// };

ProgressDetails.defaultProps = {
  parentSelector: 'body',
};

