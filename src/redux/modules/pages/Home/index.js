// import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { createFetchReducer } from '@e-group/frontend-utils'
import {
  FETCH_GET_CHARACTER_LIST,
  FETCH_GET_CHARACTER_LIST_SUCCESS,
  FETCH_GET_CHARACTER_LIST_FAILURE,
  FETCH_GET_AMIIBO_LIST,
  FETCH_GET_AMIIBO_LIST_CANCEL,
  FETCH_GET_AMIIBO_LIST_SUCCESS,
  FETCH_GET_AMIIBO_LIST_FAILURE,
  FETCH_POST_AMIIBO_LIST,
  FETCH_POST_AMIIBO_LIST_SUCCESS,
  FETCH_POST_AMIIBO_LIST_FAILURE,
  FETCH_PATCH_AMIIBO_LIST,
  FETCH_PATCH_AMIIBO_LIST_SUCCESS,
  FETCH_PATCH_AMIIBO_LIST_FAILURE,
  FETCH_DELETE_AMIIBO_LIST,
  FETCH_DELETE_AMIIBO_LIST_SUCCESS,
  FETCH_DELETE_AMIIBO_LIST_FAILURE,
} from './types'

const characterList = createFetchReducer({
  get: {
    request: FETCH_GET_CHARACTER_LIST,
    success: FETCH_GET_CHARACTER_LIST_SUCCESS,
    failure: FETCH_GET_CHARACTER_LIST_FAILURE,
  },
})

const amiiboList = createFetchReducer({
  get: {
    request: FETCH_GET_AMIIBO_LIST,
    cancel: FETCH_GET_AMIIBO_LIST_CANCEL,
    success: [FETCH_GET_AMIIBO_LIST_SUCCESS, {
      data: true,
      mergeDeepData: true,
    }],
    failure: FETCH_GET_AMIIBO_LIST_FAILURE,
  },
  post: {
    request: FETCH_POST_AMIIBO_LIST,
    success: FETCH_POST_AMIIBO_LIST_SUCCESS,
    failure: FETCH_POST_AMIIBO_LIST_FAILURE,
  },
  patch: {
    request: FETCH_PATCH_AMIIBO_LIST,
    success: FETCH_PATCH_AMIIBO_LIST_SUCCESS,
    failure: FETCH_PATCH_AMIIBO_LIST_FAILURE,
  },
  del: {
    request: FETCH_DELETE_AMIIBO_LIST,
    success: FETCH_DELETE_AMIIBO_LIST_SUCCESS,
    failure: FETCH_DELETE_AMIIBO_LIST_FAILURE,
  },
})

// Customize
// const reducer = createFetchReducer({
//   get: {
//     request: FETCH_GET_AMIIBO_LIST,
//     cancel: FETCH_GET_AMIIBO_LIST_CANCEL,
//     success: [FETCH_GET_AMIIBO_LIST_SUCCESS, {
//       mergeDeepData: true,
//     }],
//     failure: FETCH_GET_AMIIBO_LIST_FAILURE,
//   },
//   post: {
//     request: FETCH_POST_AMIIBO_LIST,
//     success: FETCH_POST_AMIIBO_LIST_SUCCESS,
//     failure: FETCH_POST_AMIIBO_LIST_FAILURE,
//   },
// }, {
//   [FETCH_GET_AMIIBO_LIST]: state => Immutable.merge(state, {
//     replace: 'replace with customize function',
//   }),
// }, {
//   replace: 'replace with customize initialState',
// })

export default combineReducers({
  characterList,
  amiiboList,
})
