import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEmptyObject } from '../../utils/empty';
import ProgressCardStatus from '../ProgressCardStatus';
import ProgressDetails from '../ProgressDetails';

const ProgressCard = (props) => {
  const { data, minimal } = props;

  const isProgressComplete = () => {
    if (isEmptyObject(data.assertion)) {
      return false;
    }
    return data.assertion.image_url.length > 0;
  };

  const getBadgeImage = (minimal = '') => {
    const assertionUrl = data.assertion.assertion_url;

    return (
      <React.Fragment>
        {assertionUrl && (
          <ProgressDetails key={data.assertion.entityId} parentSelector=".modal-progress-details" progress={data} minimal={minimal} />
        )}
        {!assertionUrl && (
          <img className={classNames('card-img-top not-asserted', minimal)} src={data.badge_class.image} alt={data.badge_class.display_name} />
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {minimal && (
        <div className="card text-center mb-3">
          <div className="card-badge">
            {getBadgeImage('minimal')}
          </div>
        </div>
      )}
      {!minimal && (
        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2 mb-3">
          <div className="card text-center mb-3">
            <div className="card-header mb-2">
              <ProgressCardStatus status={isProgressComplete()} title={data.block_display_name} />
            </div>
            <div className="card-badge">
              {getBadgeImage()}

              <div className="card-body">
                <h5 className="card-title text-muted mb-2">{data.badge_class.display_name}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

ProgressCard.defaultProps = {
  minimal: '',
};

ProgressCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
  minimal: PropTypes.string,
};

export default ProgressCard;
