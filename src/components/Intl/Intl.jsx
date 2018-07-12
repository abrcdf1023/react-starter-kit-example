import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import zhLocaleData from 'react-intl/locale-data/zh'
import axios from 'axios'

import FullPageLoader from '@/components/FullPageLoader'

import withIntl from './withIntl'

@withIntl
export default class Intl extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.any),

    fetchGetLocale: PropTypes.func.isRequired,
  }

  static defaultProps = {
    locale: null,
    messages: null,
  }

  async componentDidMount() {
    const { fetchGetLocale } = this.props
    addLocaleData(zhLocaleData)
    fetchGetLocale(navigator.language)
  }

  render() {
    const {
      children, locale, messages,
    } = this.props
    if (locale) {
      return (
        <IntlProvider
          defaultLocale="zh"
          locale={locale}
          key={locale}
          messages={messages}
        >
          {children}
        </IntlProvider>
      )
    }
    return (
      <FullPageLoader />
    )
  }
}
