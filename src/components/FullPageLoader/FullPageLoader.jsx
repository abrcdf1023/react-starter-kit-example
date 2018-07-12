import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Dimmer } from 'semantic-ui-react'

import { fullpage } from './FullPageLoader.scss'

const FullPageLoader = ({ message, show, ...passProps }) => {
  if (!show) return null
  return (
    <div className={fullpage}>
      <Dimmer active>
        <Loader size="large" {...passProps}>
          {message}
        </Loader>
      </Dimmer>
    </div>
  )
}

FullPageLoader.defaultProps = {
  message: 'Page Loading...',
  show: true,
}

FullPageLoader.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
}

export default FullPageLoader
