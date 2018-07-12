import {
  fetchGetLocale,
  fetchGetLocaleSuccess,
  fetchGetLocaleFailure,

  setLang,
} from './actions'

export const FETCH_GET_LOCALE = fetchGetLocale().type
export const FETCH_GET_LOCALE_SUCCESS = fetchGetLocaleSuccess().type
export const FETCH_GET_LOCALE_FAILURE = fetchGetLocaleFailure().type

export const SET_LANG = setLang().type
