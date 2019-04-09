import { pingLmsHeartbeat } from '../api/client';

export const PING_RESPONSE = 'PING_RESPONSE';

export const pingResponse = response => ({
  type: PING_RESPONSE,
  status: response.status,
});

export const pingLms = () =>
  dispatch =>
    pingLmsHeartbeat()
      .then(response => dispatch(pingResponse(response)));
