import { SCROLLED } from '../constants/scrolled.js'

function scrolled(state = false, action) {
  switch(action.type) {
    case SCROLLED:
      return action.payload
    default:
      return state
  }
}

export default scrolled
