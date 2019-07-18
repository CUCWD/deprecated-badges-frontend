import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from '@edx/paragon';
import ProgressCourseListItem from '../ProgressCourseListItem';

// function debug(args) {
//   debugger;
//   return true;
// }

export default class ProgressCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // progress: [],
      // modalOpen: false,
      // modalModel: [{}],
    };
  }

  getProgressCourseListData() {
    const results = [];

    this.props.data.forEach((item) => {
      const learnerData = {
        username: item.user_name,
      };

      item.progress.forEach((item) => {
        learnerData[item.block_id] = (
          <ProgressCourseListItem key={`${learnerData.username}_${item.block_id}`} badge={item} />
        );
      });

      results.push(learnerData);
    });

    return results;
  }

  sortProgressByCourseBlockOrder = (progress) => {
    if (progress) {
      return progress.sort((a, b) => {
        if (a.block_order < b.block_order) { return -1; }
        if (a.block_order > b.block_order) { return 1; }
        return 0;
      });
    }
    return 0;
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Table
          columns={this.props.headings}
          data={this.getProgressCourseListData()}
          rowHeaderColumnKey="username"
          className={['table-responsive thead-overflow-hidden']}
        />
      </div>
    );
  }
}

ProgressCourseList.propTypes = {
  data: PropTypes.array.isRequired,
  headings: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
};
