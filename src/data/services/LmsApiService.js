import endpoints from "./endpoints";
import Cookies from "js-cookie";
// import { configuration } from "../../config";

class Service {
  // Todo: These will be used instead of the proxy endpoints after we upgrade to IronWood release since that release \
  //  we can use the @edx/frontend-auth for the apiClient
  // static baseUrl = configuration.LMS_BASE_URL;
  // static badgesUrl = `${LmsApiService.baseUrl}/api/badges/v1/progress`;

  static pingHeartbeat() {
    return fetch(
      endpoints.heartbeat, {
          credentials: 'same-origin',
          headers: {
              Accept: 'application/json',
          },
      },
    );
  }

  static requestUserBadgeProgress(courseId, userName) {
    // debugger;

    return fetch(
      `${endpoints.userBadgeProgress}/courses/${encodeURIComponent(courseId)}/user/${userName}`, {
          credentials: 'same-origin',
          method: 'get',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
          },
      },
    );
  }

  static requestCourseBadgeProgress(courseId) {
    // debugger;

    let params = { master_course_id: `${courseId}` }
    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');

    // body: JSON.stringify(data),
    return fetch(
      `${endpoints.userBadgeProgress}/courses/${courseId}?` + query, {
        credentials: 'same-origin',
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      },
    );
  }

  static fetchUserRoles(courseId) {
//    debugger;
    return fetch(
      `${endpoints.enrollmentRoles}/`, {
          credentials: 'same-origin',
          method: 'get',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
          },
      },
    );
  }

}


class MockService {

  static pingHeartbeat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, apiPayload.pingLmsHeartbeat));
      }, delay);
    });
  }

  static requestUserBadgeProgress(user, courseId) {
    // debugger;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], apiPayload.requestUserBadgeProgress));
      }, delay);
    });
  }

  static requestCourseBadgeProgress(courseId) {
    // debugger;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], apiPayload.requestCourseBadgeProgress));
      }, delay);
    });
  }

  static fetchUserRoles(courseId) {
    // debugger;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], apiPayload.fetchUserRoles));
      }, delay);
    });
  }

}

const delay = 0;

const apiPayload = {
  pingLmsHeartbeat: {
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "http://localhost:1991/heartbeat",
    result: {
      modulestore: {
        status: true,
        message: "OK"
      },
      sql: {
        status: true,
        message: "OK"
      }
    }
  },
  requestUserBadgeProgress: {
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "http://localhost:1991/api/badges/v1/progress/courses/course-v1:edX+DemoX+Demo_Course/user/edx",
    result: [
        {
          course_id: "course-v1:edX+DemoX+Demo_Course",
          block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5a",
          block_display_name: "Example Week 1: Getting Started",
          block_order: 1,
          event_type: "",
          badge_class: {
            slug: "NpxN12UORXy_WRxOGMnA7w",
            issuing_component: "openedx__course",
            display_name: "Safety Concepts and Health",
            course_id: "course-v1:edX+DemoX+Demo_Course",
            description: "Successfully reviewed manufacturing safety concepts and health material.",
            criteria: "Completed **1. Concepts of Safety and Health** module of the **Template: Manufacturing Safety** course on EducateWorkforce.",
            image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_0382d177-a291-4fb0-a504-3935a43b431f.svg"
          },
          assertion: {
            issuedOn: "2019-04-20T02:43:06.566955Z",
            expires: "2019-04-30T00:00:00.000000Z",
            revoked: false,
            image_url: "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
            assertion_url: "https://badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig",
            recipient: {
              plaintextIdentity: "edx@example.com"
            },
            issuer: {
              entityType: "Issuer",
              entityId: "npqlh0acRFG5pKKbnb4SRg",
              openBadgeId: "https://api.badgr.io/public/issuers/npqlh0acRFG5pKKbnb4SRg",
              name: "EducateWorkforce",
              image: "https://media.us.badgr.io/uploads/issuers/issuer_logo_77bb4498-838b-45b7-8722-22878fedb5e8.svg",
              email: "cucwd.developer@gmail.com",
              description: "An online learning solution offered with partnering 2-year colleges to help integrate web and digital solutions into their existing courses. The platform was designed by multiple instructional design, usability, and computing experts to include research-based learning features.",
              url: "https://ew-localhost.com",
            },
          }
        },
        {
          course_id: "course-v1:edX+DemoX+Demo_Course",
          block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5b",
          block_display_name: "Example Week 2: Get Interactive",
          block_order: 2,
          event_type: "",
          badge_class: {
            slug: "7li80Ov_RRqK9RFviudMhw",
            issuing_component: "openedx__course",
            display_name: "Test Badge",
            course_id: "course-v1:edX+DemoX+Demo_Course",
            description: "This is a test badge.",
            criteria: "Anything really.",
            image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_a8d0db24-97d8-486f-a150-d86365857edf.png"
          },
          assertion: {
            issuedOn: "2019-04-22T02:43:06.566955Z",
            expires: null,
            revoked: true,
            image_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA/image",
            assertion_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA",
            recipient: {
              plaintextIdentity: "edx@example.com"
            },
            issuer: {
              entityType: "Issuer",
              entityId: "npqlh0acRFG5pKKbnb4SRg",
              openBadgeId: "https://api.badgr.io/public/issuers/npqlh0acRFG5pKKbnb4SRg",
              name: "EducateWorkforce",
              image: "https://media.us.badgr.io/uploads/issuers/issuer_logo_77bb4498-838b-45b7-8722-22878fedb5e8.svg",
              email: "cucwd.developer@gmail.com",
              description: "An online learning solution offered with partnering 2-year colleges to help integrate web and digital solutions into their existing courses. The platform was designed by multiple instructional design, usability, and computing experts to include research-based learning features.",
              url: "https://ew-localhost.com",
            },
          }
        },
        {
          course_id: "course-v1:edX+DemoX+Demo_Course",
          block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5c",
          block_display_name: "Example Week 3: Be Social Example Week",
          block_order: 3,
          event_type: "",
          badge_class: {
            slug: "special_award",
            issuing_component: "openedx__course",
            display_name: "Very Special Award",
            course_id: "course-v1:edX+DemoX+Demo_Course",
            description: "Awarded for people who did something incredibly special",
            criteria: "Do something incredibly special.",
            image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
          },
          assertion: {
            issuedOn: "",
            expires: null,
            revoked: false,
            image_url: "",
            assertion_url: "",
            recipient: {
              plaintextIdentity: ""
            },
            issuer: {
              entityType: "",
              entityId: "",
              openBadgeId: "",
              name: "",
              image: "",
              email: "",
              description: "",
              url: "",
            },
          }
        },
        {
          course_id: "course-v1:edX+DemoX+Demo_Course",
          block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@1414ffd5143b4b508f739b563ab468b7",
          block_display_name: "About Exams and Certificates",
          block_order: 3,
          event_type: "",
          badge_class: {
            slug: "special_award",
            issuing_component: "openedx__course",
            display_name: "Very Special Award",
            course_id: "course-v1:edX+DemoX+Demo_Course",
            description: "Awarded for people who did something incredibly special",
            criteria: "Do something incredibly special.",
            image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
          },
          assertion: {
            issuedOn: "",
            expires: null,
            revoked: false,
            image_url: "",
            assertion_url: "",
            recipient: {
              plaintextIdentity: ""
            },
            issuer: {
              entityType: "",
              entityId: "",
              openBadgeId: "",
              name: "",
              image: "",
              email: "",
              description: "",
              url: "",
            },
          }
        },
        {
          course_id: "course-v1:edX+DemoX+Demo_Course",
          block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@9fca584977d04885bc911ea76a9ef29e",
          block_display_name: "holding section",
          block_order: 3,
          event_type: "",
          badge_class: {
            slug: "special_award",
            issuing_component: "openedx__course",
            display_name: "Very Special Award",
            course_id: "course-v1:edX+DemoX+Demo_Course",
            description: "Awarded for people who did something incredibly special",
            criteria: "Do something incredibly special.",
            image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
          },
          assertion: {
            issuedOn: "",
            expires: null,
            revoked: false,
            image_url: "",
            assertion_url: "",
            recipient: {
              plaintextIdentity: ""
            }
          },
          issuer: {
            entityType: "",
            entityId: "",
            openBadgeId: "",
            name: "",
            image: "",
            email: "",
            description: "",
            url: "",
          },
        }
    ],
  },
  requestCourseBadgeProgress: {
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "http://localhost:1991/api/badges/v1/progress/courses/course-v1:edX+DemoX+Demo_Course/",
    result: [
      {
        user_id: 50,
        user_name: "JohnDoe",
        name: "John Doe",
        email: "john.doe@example.com",
        progress: [
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5a",
            block_display_name: "Example Week 1: Getting Started",
            block_order: 1,
            event_type: "",
            badge_class: {
              slug: "NpxN12UORXy_WRxOGMnA7w",
              issuing_component: "openedx__course",
              display_name: "Safety Concepts and Health",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Successfully reviewed manufacturing safety concepts and health material.",
              criteria: "Completed **1. Concepts of Safety and Health** module of the **Template: Manufacturing Safety** course on EducateWorkforce.",
              image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_0382d177-a291-4fb0-a504-3935a43b431f.svg"
            },
            assertion: {
              issuedOn: "2019-04-20T02:43:06.566955Z",
              expires: "2019-04-30T00:00:00.000000Z",
              revoked: false,
              image_url: "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
              assertion_url: "https://badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig",
              recipient: {
                plaintextIdentity: "john.doe@example.com"
              },
              issuer: {
                entityType: "Issuer",
                entityId: "npqlh0acRFG5pKKbnb4SRg",
                openBadgeId: "https://api.badgr.io/public/issuers/npqlh0acRFG5pKKbnb4SRg",
                name: "EducateWorkforce",
                image: "https://media.us.badgr.io/uploads/issuers/issuer_logo_77bb4498-838b-45b7-8722-22878fedb5e8.svg",
                email: "cucwd.developer@gmail.com",
                description: "An online learning solution offered with partnering 2-year colleges to help integrate web and digital solutions into their existing courses. The platform was designed by multiple instructional design, usability, and computing experts to include research-based learning features.",
                url: "https://ew-localhost.com",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5b",
            block_display_name: "Example Week 2: Get Interactive",
            block_order: 2,
            event_type: "",
            badge_class: {
              slug: "7li80Ov_RRqK9RFviudMhw",
              issuing_component: "openedx__course",
              display_name: "Test Badge",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "This is a test badge.",
              criteria: "Anything really.",
              image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_a8d0db24-97d8-486f-a150-d86365857edf.png"
            },
            assertion: {
              issuedOn: "2019-04-22T02:43:06.566955Z",
              expires: null,
              revoked: true,
              image_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA/image",
              assertion_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA",
              recipient: {
                plaintextIdentity: "john.doe@example.com"
              },
              issuer: {
                entityType: "Issuer",
                entityId: "npqlh0acRFG5pKKbnb4SRg",
                openBadgeId: "https://api.badgr.io/public/issuers/npqlh0acRFG5pKKbnb4SRg",
                name: "EducateWorkforce",
                image: "https://media.us.badgr.io/uploads/issuers/issuer_logo_77bb4498-838b-45b7-8722-22878fedb5e8.svg",
                email: "cucwd.developer@gmail.com",
                description: "An online learning solution offered with partnering 2-year colleges to help integrate web and digital solutions into their existing courses. The platform was designed by multiple instructional design, usability, and computing experts to include research-based learning features.",
                url: "https://ew-localhost.com",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5c",
            block_display_name: "Example Week 3: Be Social Example Week",
            block_order: 3,
            event_type: "",
            badge_class: {
              slug: "special_award",
              issuing_component: "openedx__course",
              display_name: "Very Special Award",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Awarded for people who did something incredibly special",
              criteria: "Do something incredibly special.",
              image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
            },
            assertion: {
              issuedOn: "",
              expires: null,
              revoked: false,
              image_url: "",
              assertion_url: "",
              recipient: {
                plaintextIdentity: ""
              },
              issuer: {
                entityType: "",
                entityId: "",
                openBadgeId: "",
                name: "",
                image: "",
                email: "",
                description: "",
                url: "",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@1414ffd5143b4b508f739b563ab468b7",
            block_display_name: "About Exams and Certificates",
            block_order: 3,
            event_type: "",
            badge_class: {
              slug: "special_award",
              issuing_component: "openedx__course",
              display_name: "Very Special Award",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Awarded for people who did something incredibly special",
              criteria: "Do something incredibly special.",
              image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
            },
            assertion: {
              issuedOn: "",
              expires: null,
              revoked: false,
              image_url: "",
              assertion_url: "",
              recipient: {
                plaintextIdentity: ""
              },
              issuer: {
                entityType: "",
                entityId: "",
                openBadgeId: "",
                name: "",
                image: "",
                email: "",
                description: "",
                url: "",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@9fca584977d04885bc911ea76a9ef29e",
            block_display_name: "holding section",
            block_order: 3,
            event_type: "",
            badge_class: {
              slug: "special_award",
              issuing_component: "openedx__course",
              display_name: "Very Special Award",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Awarded for people who did something incredibly special",
              criteria: "Do something incredibly special.",
              image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
            },
            assertion: {
              issuedOn: "",
              expires: null,
              revoked: false,
              image_url: "",
              assertion_url: "",
              recipient: {
                plaintextIdentity: ""
              }
            },
            issuer: {
              entityType: "",
              entityId: "",
              openBadgeId: "",
              name: "",
              image: "",
              email: "",
              description: "",
              url: "",
            },
          },
        ],
      },
      {
        user_id: 100,
        user_name: "JaneDoe",
        name: "Jane Doe",
        email: "jane.doe@example.com",
        progress: [
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5a",
            block_display_name: "Example Week 1: Getting Started",
            block_order: 1,
            event_type: "",
            badge_class: {
              slug: "NpxN12UORXy_WRxOGMnA7w",
              issuing_component: "openedx__course",
              display_name: "Safety Concepts and Health",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Successfully reviewed manufacturing safety concepts and health material.",
              criteria: "Completed **1. Concepts of Safety and Health** module of the **Template: Manufacturing Safety** course on EducateWorkforce.",
              image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_0382d177-a291-4fb0-a504-3935a43b431f.svg"
            },
            assertion: {
              issuedOn: "2019-04-20T02:43:06.566955Z",
              expires: "2019-04-30T00:00:00.000000Z",
              revoked: false,
              image_url: "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
              assertion_url: "https://badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig",
              recipient: {
                plaintextIdentity: "jane.doe@example.com"
              },
              issuer: {
                entityType: "Issuer",
                entityId: "npqlh0acRFG5pKKbnb4SRg",
                openBadgeId: "https://api.badgr.io/public/issuers/npqlh0acRFG5pKKbnb4SRg",
                name: "EducateWorkforce",
                image: "https://media.us.badgr.io/uploads/issuers/issuer_logo_77bb4498-838b-45b7-8722-22878fedb5e8.svg",
                email: "cucwd.developer@gmail.com",
                description: "An online learning solution offered with partnering 2-year colleges to help integrate web and digital solutions into their existing courses. The platform was designed by multiple instructional design, usability, and computing experts to include research-based learning features.",
                url: "https://ew-localhost.com",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5b",
            block_display_name: "Example Week 2: Get Interactive",
            block_order: 2,
            event_type: "",
            badge_class: {
              slug: "7li80Ov_RRqK9RFviudMhw",
              issuing_component: "openedx__course",
              display_name: "Test Badge",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "This is a test badge.",
              criteria: "Anything really.",
              image: "https://media.us.badgr.io/uploads/badges/issuer_badgeclass_a8d0db24-97d8-486f-a150-d86365857edf.png"
            },
            assertion: {
              issuedOn: "2019-04-22T02:43:06.566955Z",
              expires: null,
              revoked: true,
              image_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA/image",
              assertion_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA",
              recipient: {
                plaintextIdentity: "jane.doe@example.com"
              },
              issuer: {
                entityType: "Issuer",
                entityId: "npqlh0acRFG5pKKbnb4SRg",
                openBadgeId: "https://api.badgr.io/public/issuers/npqlh0acRFG5pKKbnb4SRg",
                name: "EducateWorkforce",
                image: "https://media.us.badgr.io/uploads/issuers/issuer_logo_77bb4498-838b-45b7-8722-22878fedb5e8.svg",
                email: "cucwd.developer@gmail.com",
                description: "An online learning solution offered with partnering 2-year colleges to help integrate web and digital solutions into their existing courses. The platform was designed by multiple instructional design, usability, and computing experts to include research-based learning features.",
                url: "https://ew-localhost.com",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5c",
            block_display_name: "Example Week 3: Be Social Example Week",
            block_order: 3,
            event_type: "",
            badge_class: {
              slug: "special_award",
              issuing_component: "openedx__course",
              display_name: "Very Special Award",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Awarded for people who did something incredibly special",
              criteria: "Do something incredibly special.",
              image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
            },
            assertion: {
              issuedOn: "",
              expires: null,
              revoked: false,
              image_url: "",
              assertion_url: "",
              recipient: {
                plaintextIdentity: ""
              },
              issuer: {
                entityType: "",
                entityId: "",
                openBadgeId: "",
                name: "",
                image: "",
                email: "",
                description: "",
                url: "",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@1414ffd5143b4b508f739b563ab468b7",
            block_display_name: "About Exams and Certificates",
            block_order: 3,
            event_type: "",
            badge_class: {
              slug: "special_award",
              issuing_component: "openedx__course",
              display_name: "Very Special Award",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Awarded for people who did something incredibly special",
              criteria: "Do something incredibly special.",
              image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
            },
            assertion: {
              issuedOn: "",
              expires: null,
              revoked: false,
              image_url: "",
              assertion_url: "",
              recipient: {
                plaintextIdentity: ""
              },
              issuer: {
                entityType: "",
                entityId: "",
                openBadgeId: "",
                name: "",
                image: "",
                email: "",
                description: "",
                url: "",
              },
            }
          },
          {
            course_id: "course-v1:edX+DemoX+Demo_Course",
            block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@9fca584977d04885bc911ea76a9ef29e",
            block_display_name: "holding section",
            block_order: 3,
            event_type: "",
            badge_class: {
              slug: "special_award",
              issuing_component: "openedx__course",
              display_name: "Very Special Award",
              course_id: "course-v1:edX+DemoX+Demo_Course",
              description: "Awarded for people who did something incredibly special",
              criteria: "Do something incredibly special.",
              image: "http://example.com/media/badge_classes/badges/special_xdpqpBv_9FYOZwN.png"
            },
            assertion: {
              issuedOn: "",
              expires: null,
              revoked: false,
              image_url: "",
              assertion_url: "",
              recipient: {
                plaintextIdentity: ""
              }
            },
            issuer: {
              entityType: "",
              entityId: "",
              openBadgeId: "",
              name: "",
              image: "",
              email: "",
              description: "",
              url: "",
            },
          },
        ],
      },
    ],
  },
  fetchUserRoles: {
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "http://localhost:1991/api/enrollment/v1/roles/?course_id=course-v1:edX+DemoX+Demo_Course/",
    result: [
      {
        "course_id": "course-v1:CUCWD+CAT101+2019_Spring",
        "org": "CUCWD",
        "role": "staff"
      },
      {
        "course_id": "course-v1:CUCWD+QUAL107+TEMPLATE",
        "org": "CUCWD",
        "role": "staff"
      },
      {
        "course_id": "course-v1:CUCWD+BD101+2019_Dev",
        "org": "CUCWD",
        "role": "staff"
      },
      {
        "course_id": "course-v1:CUCWD+BD101+2019_Dev",
        "org": "CUCWD",
        "role": "instructor"
      },
      {
        "course_id": "course-v1:CUCWD+QUAL107+TEMPLATE",
        "org": "CUCWD",
        "role": "instructor"
      },
      {
        "course_id": "course-v1:CUCWD+SFT106+BADGE_TESTING",
        "org": "CUCWD",
        "role": "instructor"
      },
      {
        "course_id": "course-v1:CUCWD+CAT101+2019_Spring",
        "org": "CUCWD",
        "role": "instructor"
      },
      {
        "course_id": "course-v1:CUCWD+SFT106+BADGE_TESTING",
        "org": "CUCWD",
        "role": "staff"
      }
    ]
  }
};

const LmsApiService = (process.env.MOCK_LMS_API ? MockService : Service);
export default LmsApiService;
