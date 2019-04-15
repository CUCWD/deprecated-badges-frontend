
import { badgeActions } from '../constants/actionTypes/progress';
// import * as apiClient from '../api/mock/client';
// import * as apiClient from '../api/client';

import LmsApiService from '../services/LmsApiService';

function debug(args) {
    debugger;
    return true;
}

const startFetchingCourseBadgeProgress = () => (
  {
    type: badgeActions.request.REQUEST_STARTED_FETCHING_COURSE_BADGES
  }
);

const finishedFetchingCourseBadgeProgress = () => (
  {
    type: badgeActions.request.REQUEST_FINISHED_FETCHING_COURSE_BADGES
  }
);
// debug() &&
const errorFetchingCourseBadgeProgress = (response, previousCourseBadgesState) => (
  {
    type: badgeActions.request.REQUEST_ERROR_FETCHING_COURSE_BADGES,
    response,
    previousState: previousCourseBadgesState
  }
);

const gotCourseBadgeProgress = (progress) => (
  {
    type: badgeActions.request.REQUEST_GOT_COURSE_BADGES,
    progress
  }
);


const fetchCourseBadgesProgress = (user, courseId) => (
  (dispatch) => {

    dispatch(startFetchingCourseBadgeProgress());

    return LmsApiService.requestUserBadgeProgress(user, courseId)
      .then((response) => {
        // debugger;
        if (response.ok) {
          return (process.env.MOCK_LMS_API ? response.result : response.json());
        }
        throw new Error(response);
      })
      .then((data) => {
        // debugger;

        dispatch(gotCourseBadgeProgress(
          data
        ));
        dispatch(finishedFetchingCourseBadgeProgress());

        return Promise.resolve();
      })
      .catch((error) => {
        dispatch(errorFetchingCourseBadgeProgress(error));

        return Promise.resolve();
      });
  }
);

export {
  fetchCourseBadgesProgress,
};
