import { set } from 'immutable'
import { createFetchReducer } from '@e-group/frontend-utils'
import {
  FETCH_GET_LOCALE,
  FETCH_GET_LOCALE_SUCCESS,
  FETCH_GET_LOCALE_FAILURE,

  SET_LANG,
} from './types'

const reducer = createFetchReducer({
  get: {
    request: FETCH_GET_LOCALE,
    success: FETCH_GET_LOCALE_SUCCESS,
    failure: FETCH_GET_LOCALE_FAILURE,
  },
}, {
  [SET_LANG]: (state, action) => set(state, 'lang', action.payload),
})

export default reducer
