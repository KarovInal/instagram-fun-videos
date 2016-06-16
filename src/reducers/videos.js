import { FIRST_INITIAL_SECCESS, FIRST_INITIAL_FAILURE } from '../constants/firstInitial.js';

function videos (state = {}, action) {
  switch(action.type) {
    case FIRST_INITIAL_SECCESS:
      return Object.assign({}, state, action.payload.videos)
    default:
      return state
  }
}

export default videos;
