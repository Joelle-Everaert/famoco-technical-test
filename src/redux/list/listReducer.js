import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from "./listTypes";

const initialState = {
    loading: false,
    list: {},
    error: ''
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LIST_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_LIST_SUCCESS:
        return {
          loading: false,
          list: action.payload,
          error: ''
        }
      case FETCH_LIST_FAILURE:
        return {
          loading: false,
          list: [],
          error: action.payload
        }
      default: return state
    }
  }

  export default listReducer