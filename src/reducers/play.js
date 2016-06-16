import { VIDEO_START, VIDEO_CLOSE, VIDEO_PLAYED, VIDEO_PAUSED } from '../constants/video.js';

var initialState = {
  currentIndex: null,
  currentIndexObject: null,
  isPlayed: false,
  isPaused: false,
  isFirstPlay: false,
  isPlay: false
}

function play(state = initialState, action) {
  switch(action.type) {
    case VIDEO_START:
      return Object.assign({}, state, action.payload)
    case VIDEO_CLOSE:
      return Object.assign({}, state, { isPlay: action.payload.isPlay })
    case VIDEO_PLAYED:
      return Object.assign({}, state, action.payload)
    case VIDEO_PAUSED:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default play
