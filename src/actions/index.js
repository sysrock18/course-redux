import {OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES, IS_LOADING } from '../action-types'


export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}


export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}


export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query
    }
  }
}


export function searchAsyncEntities(query) {
  return (dispatch) => {
    // fetch, trae
    // xhr, algo asincrono, etc
    dispatch(isLoading(true))

    setTimeout(() => {
      dispatch(isLoading(false))

      dispatch(searchEntities(query))
    }, 2000)
  }
}


export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

