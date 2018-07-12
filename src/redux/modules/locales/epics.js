import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  switchMap, flatMap, catchError,
} from 'rxjs/operators'

import { getApi } from '@/utils'

import { FETCH_GET_LOCALE } from './types'
import {
  fetchGetLocaleSuccess,
  fetchGetLocaleFailure,

  setLang,
} from './actions'

export const fetchGetLocaleEpic = action$ => action$.pipe(
  ofType(FETCH_GET_LOCALE),
  switchMap(action => getApi(action.payload, 'fetchGetLocale')
    .pipe(
      flatMap(response => [
        fetchGetLocaleSuccess(response.data),
        setLang(action.payload),
      ]),
      catchError(error => of(fetchGetLocaleFailure(error))),
    )),
)

export default combineEpics(fetchGetLocaleEpic)
