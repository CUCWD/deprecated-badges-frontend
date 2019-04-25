import React from 'react';
import PropTypes from 'prop-types';

import ProgressListItem from '../ProgressListItem';

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

export default class ProgressList extends React.Component {
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

  render() {
    return (
      <div className="d-flex justify-content-center">
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
            <ProgressListItem key={badge.block_id} badge={badge}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
};

ProgressList.propTypes = {
  progress: PropTypes.array.isRequired,
};

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
