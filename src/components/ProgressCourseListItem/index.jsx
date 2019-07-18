import React from 'react';
import PropTypes from 'prop-types';
import ProgressCard from '../ProgressCard';

const ProgressCourseListItem = ({ badge }) => {
  // const classAsserted = (badge.assertion.image_url.length > 0 ? 'asserted' : 'not-asserted');

  return (
    <ProgressCard key={badge.block_id} data={badge} minimal="minimal" />
  );
};

ProgressCourseListItem.propTypes = {
  badge: PropTypes.object.isRequired
};

export default ProgressCourseListItem;
