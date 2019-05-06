
import { roleActions } from '../constants/actionTypes/roles';
// import * as apiClient from '../api/mock/client';
// import * as apiClient from '../api/client';

import LmsApiService from '../services/LmsApiService';

const allowedRoles = ['staff', 'instructor', 'support'];

function debug(args) {
    debugger;
  return true;
}


const gotRoles = (isInstructorRights, courseId) => ({
  type: roleActions.request.GOT_ROLES,
  isInstructorRights,
  courseId
});

const errorFetchingRoles = () => ({ type: roleActions.request.ERROR_FETCHING_ROLES });


const fetchUserRoles = (user, courseId) => (
    (dispatch)=> {

        return LmsApiService.fetchUserRoles()
            .then((response) => {
                // debugger;
                if (response.ok) {
                  return (process.env.MOCK_LMS_API ? response.result : response.json());
                }
                throw new Error(response);
            })
            .then((data) => {
                // debugger;
            const isInstructorRights = (data.some(role => (role.course_id === courseId)
                                        && allowedRoles.includes(role.role)));
            dispatch(gotRoles(isInstructorRights, courseId));
        })
  }
);

export {
  fetchUserRoles,
};
