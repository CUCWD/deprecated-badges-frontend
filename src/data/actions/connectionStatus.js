// import { pingLmsHeartbeat } from '../api/client';

// import LmsApiService from '../services/mock/LmsApiService'
import LmsApiService from '../services/LmsApiService'


export const PING_RESPONSE = 'PING_RESPONSE';

function debug(args) {
  debugger;
  return true;
}

const pingResponse = response => ({
  type: PING_RESPONSE,
  status: response.status,
});

const pingLms = () =>
  dispatch =>
      LmsApiService.pingHeartbeat()
      .then(response => dispatch(pingResponse(response)));

export {
  pingResponse,
  pingLms
};
