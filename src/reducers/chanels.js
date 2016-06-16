import { GET_CHANELS_SECCESS, GET_CHANELS_FAILURE } from '../constants/chanels';
import { FIRST_INITIAL_SECCESS, FIRST_INITIAL_FAILURE } from '../constants/firstInitial.js';

export default function chanels(state = initialState, action) {
  switch(action.type) {
    case GET_CHANELS_SECCESS:
      return Object.assign({}, state, action.payload.chanels)
    case GET_CHANELS_FAILURE:
      return state
    case FIRST_INITIAL_SECCESS:
      return Object.assign({}, state, action.payload.chanels)
    default:
      return state
  }
}

var initialState = {
  0: {
    id: 0,
    name: 'Канал - 0',
    enabled: true
  }
}
