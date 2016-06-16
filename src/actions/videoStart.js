import { VIDEO_START } from '../constants/video.js'

function videoStart(video) {
  return {
    type: VIDEO_START,
    payload: {
      currentIndex: video.currentIndex,
      currentIndexObject: video.currentIndexObject,
      isPlayed: false,
      isPaused: true,
      isFirstPlay: true,
      isPlay: true
    }
  }
}

export default videoStart
