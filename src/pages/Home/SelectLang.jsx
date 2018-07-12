import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import { injectIntl, FormattedMessage, intlShape } from 'react-intl'

import withSelectLang from './withSelectLang'

const languageOptions = [{
  key: 'zh-TW',
  text: '繁體中文',
  value: 'zh-TW',
},
{
  key: 'en',
  text: 'English',
  value: 'en',
}]

@withSelectLang
class Intl extends Component {
  static propTypes = {
    fetchGetLocale: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
  }

  render() {
    const { fetchGetLocale, intl } = this.props
    return (
      <React.Fragment>
        <p>
          <FormattedMessage id="introduce" />
        </p>
        <Dropdown
          button
          className="icon"
          floating
          labeled
          icon="world"
          search
          onChange={(event, data) => {
            fetchGetLocale(data.value)
          }}
          options={languageOptions}
          text={intl.messages.lang}
        />
      </React.Fragment>
    )
  }
}

export default injectIntl(Intl)
