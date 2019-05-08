import React from 'react';
import PropTypes from 'prop-types';

import LeaderboardListItem from '../LeaderboardListItem';

import {
  Modal,
  Table,
} from '@edx/paragon';

function debug(args) {
  debugger;
  return true;
}

export default class LeaderboardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: [],
      modalOpen: false,
      modalModel: [{}],
    };
  }

   sortLeaderboardByCourseBlockOrder = (leaderboard) => {
    if (leaderboard) {
      return leaderboard.sort(function(a, b) {
        if (a.block_order < b.block_order) { return -1; }
        if (a.block_order > b.block_order) { return 1; }
        return 0;
      });
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <table className="table">
          <thead>
          <tr>
            <th>Rank</th>
            <th>Student</th>
            <th>Badges Earned</th>
            <th>Badges</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {this.props.leaderboard && this.sortLeaderboardByCourseBlockOrder(this.props.leaderboard).map(badge =>
            <LeaderboardListItem key={badge.block_id} badge={badge}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
};

LeaderboardList.propTypes = {
  progress: PropTypes.array.isRequired,
};
