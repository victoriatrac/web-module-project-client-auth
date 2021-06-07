import {
  ADD_FRIEND,
  ERROR_MSG
} from '../actions'

export const initialState = {
  friends: [],
  errorMsg: ''
}

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case(ADD_FRIEND):
      return ({
        ...state,
        friends: [action.payload, ...state.friends]
      })

    case(ERROR_MSG):
      return ({
        ...state,
        errorMsg: action.payload
      })

    default:
      return state
  }
}

export default reducer