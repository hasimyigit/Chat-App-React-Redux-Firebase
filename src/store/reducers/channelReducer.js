import * as  types from '../actions/types';
const channelState = {
 channels: [],
 currentChannel:null
};

export const channelReducer = (state = channelState,action) => {
  switch (action.type) {
    case types.CREATE_CHANNEL:
      return {...state, channels:[...state.channels,action.payload]}
    case types.SET_CHANNELS:
      return {...state, channels:action.payload}
      case types.SET_CURRENT_CHANNEL:
      return {...state, currentChannel:action.payload}
    default:
      return state;
  }
}