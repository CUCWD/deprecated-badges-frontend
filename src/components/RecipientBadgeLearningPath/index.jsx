import React from 'react';
import PropTypes from 'prop-types';
// import {
//   Button,
//   InputSelect,
//   Modal,
//   SearchField,
//   StatusAlert,
//   Table,
//   Icon,
// } from '@edx/paragon';

import BackendStatusBanner from '../BackendStatusBanner';
import RecipientBadgeLearningPathAssertion from '../RecipientBadgeLearningPathAssertion';

export default class RecipientBadgeLearningPath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: '',
      modalOpen: false,
      modalModel: [{}],
      updateVal: 0,
      updateModuleId: null,
      updateUserId: null,
    };
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="badge-learningpath">
        <BackendStatusBanner />
        <div className="container">
          <div className="row">
            <h2 className="col">My Learning Path</h2>
          </div>
          <div className="row">
            <p className="col">
              Here is your progress through the badges available for this course. Click each badge to
              learn more or to save and share badges you've earned.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <RecipientBadgeLearningPathAssertion status={true} title="Intro to Flipped and Blended Learning" />
            <RecipientBadgeLearningPathAssertion status={true} title="Blended Learning Lessons" />
            <RecipientBadgeLearningPathAssertion status={true} title="Flipped Learning Lessons" />
            <RecipientBadgeLearningPathAssertion status={false} title="Blended and Flipped Wrap Up" />
            <RecipientBadgeLearningPathAssertion status={false} title="Another Title"/>
          </div>
        </div>
      </div>
    );
  }

}
