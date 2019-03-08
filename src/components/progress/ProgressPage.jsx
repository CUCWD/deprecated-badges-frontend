import React from 'react';
import PropTypes from 'prop-types';

import BackendStatusBanner from '../BackendStatusBanner';
import ProgressBanner from './ProgressBanner';
import ProgressCardList from './ProgressCardList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as progressActions from '../../data/actions/progress';


class ProgressPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {badges} = this.props;

    return (
      <div className="badge-learningpath">
        <BackendStatusBanner />
        <ProgressBanner/>
        <ProgressCardList badges={badges} />
      </div>
    );
  }

}

ProgressPage.propTypes = {
  badges: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


// Redux Configuration
// --------------------------------------------

const mapStateToProps = (state, ownProps) => (
  {
    badges: state.progress.badges
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(progressActions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);

