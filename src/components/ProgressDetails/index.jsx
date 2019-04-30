import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import {
  Button,
  Hyperlink,
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

    // Set the output format for every react-moment instance.
    Moment.globalFormat = 'MMMM D, YYYY';

    // Set the timezone for every instance.
    // Moment.globalTimezone = 'America/Los_Angeles';

    // Set the output timezone for local for every instance.
    Moment.globalLocal = true;

    // Use a <span> tag for every react-moment instance.
    Moment.globalElement = 'span';
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
      progress
    } = this.props;

    const childElements = (
      <img className="card-img-top asserted" src={progress.badge_class.image} alt={progress.badge_class.display_name} />
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
                      <h2 className="col">{progress.badge_class.display_name}</h2>
                    </div>
                    <div className="progress-details-description row w-100">
                      <p className="col">
                        {progress.badge_class.description}
                      </p>
                    </div>
                  </div>
                  <div className="progress-details-body row w-100">
                    <div className="progress-details-image col col-3">
                      <img src={progress.badge_class.image} alt={progress.badge_class.display_name} />
                    </div>
                    <div className="progress-details-meta col col-9">
                      <div className="progress-details-meta-earned">
                        <h3>Earned</h3>
                        <p><Moment>{progress.assertion.issuedOn}</Moment></p>
                      </div>
                      <div className="progress-details-meta-recipient">
                        <h3>Recipient</h3>
                        <p>{progress.assertion.recipient.plaintextIdentity}</p>
                      </div>
                      <div className="progress-details-meta-criteria">
                        <h3>Criteria</h3>
                        <p><ReactMarkdown source={progress.badge_class.criteria} /></p>
                      </div>
                      <div className="progress-details-meta-issuer">
                        <h3>Issuer</h3>
                        <ul className="pl-0">
                          <li>
                            <span className="mr-2"><Hyperlink destination={progress.assertion.issuer.openBadgeId} content={progress.assertion.issuer.name} target="_blank" /></span>
                            <span>{progress.assertion.issuer.email}</span>
                          </li>
                        </ul>
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

// <span className="mr-2"><img src={progress.assertion.issuer.image} title={progress.assertion.issuer.name} /></span>
//<div className="progress-details-meta-share">
//  <p>Please enroll Badgr.io to download and upload your badge content.</p>
//</div>

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
  progress: PropTypes.shape({}).isRequired,
};
// ProgressDetails.propTypes = {
//   data: PropTypes.shape({}).isRequired,
// };

ProgressDetails.defaultProps = {
  parentSelector: 'body',
};

