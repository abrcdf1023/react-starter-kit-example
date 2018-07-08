import actionCreators from '@/redux/modules/actionCreators'

export const {
  fetchGetCharacterList, fetchGetCharacterListSuccess,
  fetchGetCharacterListFailure,
  fetchGetAmiiboList, fetchGetAmiiboListSuccess,
  fetchGetAmiiboListFailure, fetchGetAmiiboListCancel,
  fetchPostAmiiboList, fetchPostAmiiboListSuccess,
  fetchPostAmiiboListFailure,
  fetchPatchAmiiboList, fetchPatchAmiiboListSuccess,
  fetchPatchAmiiboListFailure,
  fetchDeleteAmiiboList, fetchDeleteAmiiboListSuccess,
  fetchDeleteAmiiboListFailure,
} = actionCreators.pages.home
