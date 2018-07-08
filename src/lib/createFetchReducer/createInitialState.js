export default function createInitialState(arg) {
  let initialState = {}
  if (arg.get) {
    initialState = {
      data: {},
      isGetting: false,
      isEmpty: true,
      error: false,
    }
  }
  if (arg.post) {
    initialState = {
      ...initialState,
      isPosting: false,
      postError: false,
    }
  }
  if (arg.patch) {
    initialState = {
      ...initialState,
      isPatching: false,
      patchError: false,
    }
  }
  if (arg.del) {
    initialState = {
      ...initialState,
      isDeleting: false,
      deleteError: false,
    }
  }
  return initialState
}
