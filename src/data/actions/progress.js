
import { badgeActions } from '../constants/actionTypes/progress';
// import * as apiClient from '../api/mock/client';
// import * as apiClient from '../api/client';
import { headingMapper } from './utils'; // sortAlphaAsc
import LmsApiService from '../services/LmsApiService';
import metadata from "../reducers/roles";

const defaultAssignmentFilter = 'All';

// function debug(args) {
//     debugger;
//   return true;
// }

const startFetchingCourseBadgeProgress = () => (
  {
    type: badgeActions.request.REQUEST_STARTED_FETCHING_COURSE_BADGES,
  }
);

const finishedFetchingCourseBadgeProgress = () => (
  {
    type: badgeActions.request.REQUEST_FINISHED_FETCHING_COURSE_BADGES,
  }
);

const errorFetchingCourseBadgeProgress = (response, previousCourseBadgesState) => (
  {
    type: badgeActions.request.REQUEST_ERROR_FETCHING_COURSE_BADGES,
    response,
    previousState: previousCourseBadgesState,
  }
);

const gotCourseBadgeProgress = (progress, headings) => (
  {
    type: badgeActions.request.REQUEST_GOT_COURSE_BADGES,
    progress,
    headings,
  }
);

const fetchCourseBadgesProgress = (userName, courseId, hasInstructorStaffRights = false) => (
  (dispatch) => {
    dispatch(startFetchingCourseBadgeProgress());

    if (hasInstructorStaffRights) {
      return LmsApiService.requestCourseBadgeProgress(courseId)
        .then((response) => {
          if (response.ok) {
            return (process.env.MOCK_LMS_API ? response.result : response.json());
          }
          throw new Error(response);
        })
        .then((data) => {
          dispatch(gotCourseBadgeProgress(
            data,
            headingMapper(defaultAssignmentFilter, data)(data[0]),
          ));
          dispatch(finishedFetchingCourseBadgeProgress());

          return Promise.resolve();
        })
        .catch((error) => {
          dispatch(errorFetchingCourseBadgeProgress(error));

          return Promise.resolve();
        });
    }

    return LmsApiService.requestUserBadgeProgress(courseId, userName)
      .then((response) => {
        if (response.ok) {
          return (process.env.MOCK_LMS_API ? response.result : response.json());
        }
        throw new Error(response);
      })
      .then((data) => {
        dispatch(gotCourseBadgeProgress(data));
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
