import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionCreators from '@/redux/modules/actionCreators'

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actionCreators.locales,
}, dispatch)

export default connect(null, mapDispatchToProps)
