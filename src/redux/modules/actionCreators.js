import { createActions } from 'redux-actions'

const actionMap = {
  LOCALES: {
    FETCH_GET_LOCALE: undefined,
    FETCH_GET_LOCALE_SUCCESS: undefined,
    FETCH_GET_LOCALE_FAILURE: undefined,

    SET_LANG: undefined,
  },
  ENTITIES: {
    CHARACTER_LIST: {
      ADD_CHARACTER_LIST_ENTITIES: undefined,
    },
    AMIIBO_LIST: {
      ADD_AMIIBO_LIST_ENTITIES: undefined,
    },
  },
  PAGES: {
    HOME: {
      FETCH_GET_CHARACTER_LIST: undefined,
      FETCH_GET_CHARACTER_LIST_SUCCESS: undefined,
      FETCH_GET_CHARACTER_LIST_FAILURE: undefined,

      FETCH_GET_AMIIBO_LIST: undefined,
      FETCH_GET_AMIIBO_LIST_CANCEL: undefined,
      FETCH_GET_AMIIBO_LIST_SUCCESS: undefined,
      FETCH_GET_AMIIBO_LIST_FAILURE: undefined,

      FETCH_POST_AMIIBO_LIST: undefined,
      FETCH_POST_AMIIBO_LIST_SUCCESS: undefined,
      FETCH_POST_AMIIBO_LIST_FAILURE: undefined,

      FETCH_PATCH_AMIIBO_LIST: undefined,
      FETCH_PATCH_AMIIBO_LIST_SUCCESS: undefined,
      FETCH_PATCH_AMIIBO_LIST_FAILURE: undefined,

      FETCH_DELETE_AMIIBO_LIST: undefined,
      FETCH_DELETE_AMIIBO_LIST_SUCCESS: undefined,
      FETCH_DELETE_AMIIBO_LIST_FAILURE: undefined,
    },
  },
}

export default createActions(actionMap)
