import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { hot } from 'react-hot-loader'
import { store, history } from './redux/configureStore'

import {
  Home,
} from '@/loadables'

import ErrorBoundry from './ErrorBoundry'

export default hot(module)(() => (
  <ErrorBoundry>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ErrorBoundry>
))
