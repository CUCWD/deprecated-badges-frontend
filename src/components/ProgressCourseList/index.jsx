import React from 'react';
import PropTypes from 'prop-types';

import ProgressCourseListItem from '../ProgressCourseListItem';

import {
//   Button,
//   InputSelect,
  Modal,
//   SearchField,
//   StatusAlert,
  Table,
//   Icon,
} from '@edx/paragon';

function debug(args) {
  debugger;
  return true;
}

export default class ProgressCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: [],
      modalOpen: false,
      modalModel: [{}],
    };
  }
  // debugger;

  // if (typeof(progress) !== 'undefined' || progress != null) {
  //   return <p>No badges available for this course.</p>
  // }

  sortProgressByCourseBlockOrder = (progress) => {
    if (progress) {
      return progress.sort(function(a, b) {
        if (a.block_order < b.block_order) { return -1; }
        if (a.block_order > b.block_order) { return 1; }
        return 0;
      });
    }
  }

  getProgressCourseListData() {
    const results = [];

    // const dataHeadings = headings
    //   .filter(headings => headings.keys)
    //   .map(h => ({
    //     h: ''
    //   }));

    // debugger;

    // results.push(
    //   "username": progress.user_name,
    // )

    this.props.data.forEach(function(item) {

      const learnerData = {
        username: item.user_name,
      };

      item.progress.forEach(function(item) {
        learnerData[item.block_id] = (
          <ProgressCourseListItem key={learnerData.username + "_" + item.block_id} badge={item}/>
        );
      });

      results.push(learnerData);
    });

    return results;
  }

  render() {
    // debugger;

    // tableSortable
    // defaultSortedColumn={this.props.headings[0].key}
    // defaultSortDirection="desc"

    // hasFixedColumnWidths
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
};

ProgressCourseList.propTypes = {
  data: PropTypes.array.isRequired,
  headings: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.string,
  })).isRequired
};

/*
<table className="table">
          <thead>
          <tr>
            <th>Module</th>
            <th>Badge</th>
            <th>Description</th>
            <th>Criteria</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {this.props.progress && this.sortProgressByCourseBlockOrder(this.props.progress).map(badge =>
            <ProgressCourseListItem key={badge.block_id} badge={badge}/>
          )}
          </tbody>
        </table>

 */

/*
<Table
  columns={[{ label: 'Module', key: 'module' }, { label: 'Badges', key: 'badges' }]}
  data={this.state.modalModel}
/>
<Modal
  open={this.state.modalOpen}
  title={"View Badge"}
  closeText="Cancel"
  body={(
    <div>
      <h3>Test Badge</h3>
    </div>
  )}
  onClose={() => this.setState({
    modalOpen: false,
    modalModel: [{}],
  })}
/>


<div className="card-group">
  {this.props.progress && this.sortProgressByCourseBlockOrder(this.props.progress).map(badge =>
    <ProgressListItem key={badge.block_id} badge={badge}/>
  )}
</div>
*/
