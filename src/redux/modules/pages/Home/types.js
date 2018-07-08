import {
  fetchGetCharacterList, fetchGetCharacterListSuccess,
  fetchGetCharacterListFailure,
  fetchGetAmiiboList,
  fetchGetAmiiboListSuccess,
  fetchGetAmiiboListFailure,
  fetchGetAmiiboListCancel,
  fetchPostAmiiboList,
  fetchPostAmiiboListSuccess,
  fetchPostAmiiboListFailure,
  fetchPatchAmiiboList,
  fetchPatchAmiiboListSuccess,
  fetchPatchAmiiboListFailure,
  fetchDeleteAmiiboList,
  fetchDeleteAmiiboListSuccess,
  fetchDeleteAmiiboListFailure,
} from './actions'

export const FETCH_GET_CHARACTER_LIST = fetchGetCharacterList().type
export const FETCH_GET_CHARACTER_LIST_SUCCESS = fetchGetCharacterListSuccess().type
export const FETCH_GET_CHARACTER_LIST_FAILURE = fetchGetCharacterListFailure().type

export const FETCH_GET_AMIIBO_LIST = fetchGetAmiiboList().type
export const FETCH_GET_AMIIBO_LIST_SUCCESS = fetchGetAmiiboListSuccess().type
export const FETCH_GET_AMIIBO_LIST_FAILURE = fetchGetAmiiboListFailure().type
export const FETCH_GET_AMIIBO_LIST_CANCEL = fetchGetAmiiboListCancel().type

export const FETCH_POST_AMIIBO_LIST = fetchPostAmiiboList().type
export const FETCH_POST_AMIIBO_LIST_SUCCESS = fetchPostAmiiboListSuccess().type
export const FETCH_POST_AMIIBO_LIST_FAILURE = fetchPostAmiiboListFailure().type

export const FETCH_PATCH_AMIIBO_LIST = fetchPatchAmiiboList().type
export const FETCH_PATCH_AMIIBO_LIST_SUCCESS = fetchPatchAmiiboListSuccess().type
export const FETCH_PATCH_AMIIBO_LIST_FAILURE = fetchPatchAmiiboListFailure().type

export const FETCH_DELETE_AMIIBO_LIST = fetchDeleteAmiiboList().type
export const FETCH_DELETE_AMIIBO_LIST_SUCCESS = fetchDeleteAmiiboListSuccess().type
export const FETCH_DELETE_AMIIBO_LIST_FAILURE = fetchDeleteAmiiboListFailure().type
