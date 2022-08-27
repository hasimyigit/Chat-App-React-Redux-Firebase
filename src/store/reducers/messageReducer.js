import * as  types from '../actions/types';
const messagesState = []

export const messageReducer = (state = messagesState,action) => {
  switch (action.type) {
    case types.CREATE_MESSAGE:
        return [...state, action.payload]
        case types.SET_MESSAGES:
            return [ ...action.payload]
        default:
      return state;
  }
}