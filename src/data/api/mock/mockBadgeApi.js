
import delay from './delay';

// This file mocks a web EdX Badges API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
//
// EdX Badges API - https://github.com/edx/edx-platform/blob/open-release/hawthorn.master/lms/djangoapps/badges/api/views.py

const apiPayload = {
  count: 7,
  previous: null,
  num_pages: 1,
  results: [
    {
      badgeClass: {
        slug: "NpxN12UORXy_WRxOGMnA7w",
        issuing_component: "openedx__course",
        display_name: "Safety Concepts and Health",
        course_id: "course-v1:edX+DemoX+Demo_Course",
        description: "Successfully reviewed manufacturing safety concepts and health material.",
        criteria: "Completed **1. Concepts of Safety and Health** module of the **Template: Manufacturing Safety** course on EducateWorkforce.",
        image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_0382d177-a291-4fb0-a504-3935a43b431f.svg"
      },
      imageUrl: "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
      assertionUrl: "https://badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig"
    },
    {
      badgeClass: {
        slug: "7li80Ov_RRqK9RFviudMhw",
        issuing_component: "openedx__course",
        display_name: "Test Badge",
        course_id: "course-v1:edX+DemoX+Demo_Course",
        description: "This is a test badge.",
        criteria: "Anything really.",
        image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_0382d177-a291-4fb0-a504-3935a43b431f.svg"
      },
      imageUrl: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA/image",
      assertionUrl: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA"
    },
    {
      badgeClass: {
        slug: "special_award",
        issuing_component: "openedx__course",
        display_name: "Very Special Award",
        course_id: "course-v1:edX+DemoX+Demo_Course",
        description: "Awarded for people who did something incredibly special",
        criteria: "Do something incredibly special.",
        image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
      },
      imageUrl: "http://badges.example.com/media/issued/cd75b69fc1c979fcc1697c8403da2bdf.png",
      assertionUrl: "http://badges.example.com/public/assertions/07020647-e772-44dd-98b7-d13d34335ca6"
    }
  ]
};


// Todo: Need to look at results from Badge.io badge assertion to see what additional field we may want to include.
// [Badgr.io - EducateWorkforce - Assertion - Results]
// We may want to dig into returning something to align with the assertion results from a badge assertion
// on this site for our EdX API endpoint.
//
// https://badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig
//
// OpenBadge v1.0
// https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig.json?v=1_1
// {
//   "@context": "https://w3id.org/openbadges/v1",
//   "type": "Assertion",
//   "id": "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig?v=1_1",
//   "badge": "https://api.badgr.io/public/badges/NpxN12UORXy_WRxOGMnA7w?v=1_1",
//   "image": "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
//   "uid": "vsDktqmrT3GJLbNhBvqLig",
//   "verify": {
//     "url": "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig?v=1_1",
//       "type": "hosted"
//   },
//     "evidence": "http://courses.educateworkforce.com/badges/XXX",
//     "issuedOn": "2019-03-07T14:43:39.394206+00:00",
//     "expires": "2025-03-16T00:00:00+00:00",
//     "recipient": {
//     "salt": "43d4c83ba0fa419ea90780fbd05471b9",
//       "type": "email",
//       "hashed": true,
//       "identity": "sha256$6c3b71fc1daded1666559e606cf57937b077181112577340da3e16b7bcb89b17"
//   },
//     "extensions:recipientProfile": {
//     "@context": "https://openbadgespec.org/extensions/recipientProfile/context.json",
//       "type": [
//       "Extension",
//       "extensions:RecipientProfile"
//     ],
//       "name": "Zachary Trabookis"
//   }
// }
//
// OpenBadge v2.0
// https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig.json?v=2_0
// {
//   "@context": "https://w3id.org/openbadges/v2",
//   "type": "Assertion",
//   "id": "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig",
//   "badge": "https://api.badgr.io/public/badges/NpxN12UORXy_WRxOGMnA7w",
//   "image": "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
//   "verification": {
//     "type": "HostedBadge"
//   },
//     "evidence": [
//     {
//       "type": "Evidence",
//       "id": "http://courses.educateworkforce.com/badges/XXX",
//       "narrative": "Through the EducateWorkforce platform."
//     }
//   ],
//     "narrative": "Being a good student.",
//     "issuedOn": "2019-03-07T14:43:39.394206+00:00",
//     "expires": "2025-03-16T00:00:00+00:00",
//     "recipient": {
//     "salt": "43d4c83ba0fa419ea90780fbd05471b9",
//       "type": "email",
//       "hashed": true,
//       "identity": "sha256$6c3b71fc1daded1666559e606cf57937b077181112577340da3e16b7bcb89b17"
//   },
//     "extensions:recipientProfile": {
//     "@context": "https://openbadgespec.org/extensions/recipientProfile/context.json",
//       "type": [
//       "Extension",
//       "extensions:RecipientProfile"
//     ],
//       "name": "Zachary Trabookis"
//   }
// }


class MockBadgeApi {

  static getCourseBadges() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], apiPayload.results));
      }, delay);
    });
  }

}

export default MockBadgeApi;
