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

  static requestUserBadgeProgress(user, courseId) {
    // debugger;

    return fetch(
      `${endpoints.userBadgeProgress}/user/${user}/courses/${courseId}`, {
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
    url: "http://localhost:1991/api/badges/v1/progress/user/edx/courses/course-v1:edX+DemoX+Demo_Course/",
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
            image_url: "https://api.badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig/image",
            assertion_url: "https://badgr.io/public/assertions/vsDktqmrT3GJLbNhBvqLig"
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
            image_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA/image",
            assertion_url: "https://api.badgr.io/public/assertions/99tTj7uJTHWBXd7PMfAvgA"
          }
        },
        {
          course_id: "course-v1:edX+DemoX+Demo_Course",
          block_id: "block-v1:edX+DemoX+Demo_Course+type@chapter+block@d8a6192ade314473a78242dfeedfbf5c",
          block_display_name: "Example Week 3: Be Social",
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
            image_url: "http://badges.example.com/media/issued/cd75b69fc1c979fcc1697c8403da2bdf.png",
            assertion_url: "http://badges.example.com/public/assertions/07020647-e772-44dd-98b7-d13d34335ca6"
          }
        }
    ],
  }
};

const LmsApiService = (process.env.MOCK_LMS_API ? MockService : Service);
export default LmsApiService;
