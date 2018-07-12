import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { hot } from 'react-hot-loader'
import { store, history } from './redux/configureStore'

import Intl from '@/components/Intl'
import ErrorBoundry from '@/components/ErrorBoundry'

import { Home } from '@/loadables'

const App = () => (
  <ErrorBoundry>
    <Provider store={store}>
      <Intl>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
      </Intl>
    </Provider>
  </ErrorBoundry>
)

export default hot(module)(App)
