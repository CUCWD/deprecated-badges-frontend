// eslint-disable-next-line import/no-extraneous-dependencies
import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import endpoints from '../services/endpoints';
import { PING_RESPONSE, pingResponse, pingLms } from './connectionStatus';

const initialState = {};

const lmsEndpoint = endpoints.heartbeat;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

describe('Ping LMS Action Creators', () => {
  const response = {
    status: 200,
  };

  beforeEach(() => {
    store = mockStore(initialState);
    fetchMock.once(`begin:${lmsEndpoint}`, response);
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('returns expected state from pingResponse', () => {
    const expectedAction = { type: PING_RESPONSE, status: response.status };
    expect(store.dispatch(pingResponse(response))).toEqual(expectedAction);
  });
  it('returns expected state from pingLms success', () => {
    const expectedActions = [
      { type: PING_RESPONSE, status: response.status },
    ];

    return store.dispatch(pingLms()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
