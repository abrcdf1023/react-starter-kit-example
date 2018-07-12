import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Dimmer } from 'semantic-ui-react'

import { fullpage } from './FullPageLoader.scss'

const FullPageLoader = ({ message, show, indeterminate }) => {
  if (!show) return null
  return (
    <div className={fullpage}>
      <Dimmer active>
        <Loader size="large" indeterminate={indeterminate}>
          {message}
        </Loader>
      </Dimmer>
    </div>
  )
}

FullPageLoader.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
  indeterminate: PropTypes.bool,
}

FullPageLoader.defaultProps = {
  message: 'Page Loading...',
  show: true,
  indeterminate: false,
}

export default FullPageLoader
