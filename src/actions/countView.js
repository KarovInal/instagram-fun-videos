import { INCREMENT_COUNT_VIEW } from '../constants/countView.js'

// Action creatorS

export function incrementCountView(countView) {
  return {
    type: INCREMENT_COUNT_VIEW,
    payload: {
      countView: countView
    }
  }
}
