import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getLang,
  getMessages,
} from '@/redux/modules/locales/selectors'

import actionCreators from '@/redux/modules/actionCreators'

const mapStateToProps = state => ({
  locale: getLang(state),
  messages: getMessages(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actionCreators.locales,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
