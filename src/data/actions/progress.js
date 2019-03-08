
import { badgeActions } from '../constants/actionTypes/progress';
import mockBadgeApi from '../api/mock/mockBadgeAPI';

const requestStartedFetchingBadges = () => (
  {
    type: badgeActions.request.REQUEST_STARTED_FETCHING_BADGES
  }
);

const requestFinishedFetchingBadges = () => (
  {
    type: badgeActions.request.REQUEST_FINISHED_FETCHING_BADGES
  }
);

const requestLoadCourseBadges = (badges) => (
  {
    type: badgeActions.request.REQUEST_LOAD_COURSE_BADGES, badges
  }
);

const loadCourseBadges = () => (
  (dispatch) => {
    // dispatch(beginAjaxCall());
    dispatch(requestStartedFetchingBadges());
    return mockBadgeApi.getCourseBadges()
      .then(badges => {
        dispatch(requestLoadCourseBadges(badges));
        dispatch(requestFinishedFetchingBadges());
      })
      .catch(error => {
        throw(error);
      });
  }
);

export {
  loadCourseBadges,
};

// import axios from 'axios';
//
// import {
//   STARTED_FETCHING_POSTS,
//   FINISHED_FETCHING_POSTS,
//   GET_POSTS,
// } from '../constants/actionTypes/posts';
//
// const startedFetchingPosts = () => (
//   {
//     type: STARTED_FETCHING_POSTS,
//   }
// );
//
// const finishedFetchingPosts = () => (
//   {
//     type: FINISHED_FETCHING_POSTS,
//   }
// );
//
// const getPosts = posts => (
//   {
//     type: GET_POSTS,
//     posts,
//   }
// );
//
// const fetchPosts = () => (
//   (dispatch) => {
//     dispatch(startedFetchingPosts());
//     return axios.get('https://jsonplaceholder.typicode.com/posts')
//       // TODO: handle response error
//       .then((result) => {
//         dispatch(getPosts(result.data));
//         dispatch(finishedFetchingPosts());
//       });
//   }
// );
//
// export {
//   startedFetchingPosts,
//   finishedFetchingPosts,
//   getPosts,
//   fetchPosts,
// };
