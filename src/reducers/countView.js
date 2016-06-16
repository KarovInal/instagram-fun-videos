import { INCREMENT_COUNT_VIEW } from '../constants/countView.js'

export default function countView(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNT_VIEW:
      return action.payload.countView
    default:
      return state
  }
}
