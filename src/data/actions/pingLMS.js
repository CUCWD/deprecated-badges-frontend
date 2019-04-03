import { pingLmsDashboard } from '../api/client';

export const PING_RESPONSE = 'PING_RESPONSE';

export const pingResponse = response => ({
  type: PING_RESPONSE,
  status: response.status,
});

export const pingLms = () =>
  dispatch =>
    pingLmsDashboard()
      .then(response => dispatch(pingResponse(response)));
