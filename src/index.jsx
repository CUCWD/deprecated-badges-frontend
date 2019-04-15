/* eslint-disable global-require,no-underscore-dangle */
if ((typeof window !== 'undefined' && !window._babelPolyfill) ||
   (typeof global !== 'undefined' && !global._babelPolyfill)) {
  // Don't load babel-polyfill if already loaded: https://github.com/babel/babel/issues/4019
  require('babel-polyfill'); // general ES2015 polyfill (e.g. promise)
}
/* eslint-enable global-require no-underscore-dangle */

/* eslint-disable import/first */

// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
// import { ConnectedRouter } from 'connected-react-router';
// import { PrivateRoute } from '@edx/frontend-auth';

import PostsPage from './containers/PostsPage';
import CommentSearchPage from './containers/CommentSearchPage';
import DisclosurePage from './containers/DisclosurePage';
import history from './data/history';
import store from './data/store/configureStore';
import loadI18nDomData from './utils/i18n/loadI18nDomData';
// import apiClient from './data/apiClient';

import './App.scss';
/* eslint-enable import/first */

const i18nData = loadI18nDomData();

const App = () => (
  <IntlProvider locale={i18nData.locale} messages={i18nData.messages}>
      <Provider store={store}>
          <div className="SFE-wrapper">
              <h2>Badges Home</h2>
              <p>
                  The badges microfrontend (MFE) provides access to course badge progress. Additional changes will include
                  leaderboard updates to compare existing learner against other learners of the course.
              </p>
          </div>
      </Provider>
  </IntlProvider>
);

// if (apiClient.ensurePublicOrAuthencationAndCookies(window.location.pathname)) {
  ReactDOM.render(<App />, document.getElementById('root'));
// }
