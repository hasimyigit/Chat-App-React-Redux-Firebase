import * as types from '../actions/types'
const authState = null;

export const authReducer = (state = authState,action) => {
  switch (action.type) {
      case types.SET_PROFILE:
      return {profile:action.payload}
      case types.LOGOUT_PROFILE:
      return null
       default:
      return state;
  }
}
