import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@edx/paragon';

import statusMap from './statusMap.json';
import { pingLms } from '../../data/actions/connectionStatus';

class BackendStatusBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiConnectionStatus: 200,
    };
  }

  componentDidMount() {
    this.props.pingLms();
  }

  renderStatusMessage() {
    const status = statusMap[this.props.connectionStatus];
    if (status.link) {
      return (
        <span>
          {status.message}
          {' '}
          <a href={status.link.url} className={styles['alert-link']}>{status.link.text}</a>
        </span>
      );
    }
    return status.message;
  }

  render() {
    const status = statusMap[this.props.connectionStatus];
    return (!status || this.props.connectionStatus === 200) ?
      null :
      (
        <div
          className={classNames(
            styles['api-error'],
            styles.alert,
            styles[`alert-${status.alertLevel}`],
          )}
        >
          <Button
            label="↻"
            buttonType="sm"
            className={[styles['btn-outline-primary']]}
            onClick={this.props.pingLms}
          />
          {' '}
          {this.renderStatusMessage()}
        </div>
      );
  }
}

BackendStatusBanner.propTypes = {
  connectionStatus: PropTypes.number,
  pingLms: PropTypes.func.isRequired,
};

BackendStatusBanner.defaultProps = {
  connectionStatus: null,
};

const WrappedBackendStatusBanner = connect(
  state => ({
    connectionStatus: state.connectionStatus,
  }), dispatch => ({
    pingLms: () => dispatch(pingLms()),
  }),
)(BackendStatusBanner);

export default WrappedBackendStatusBanner;
