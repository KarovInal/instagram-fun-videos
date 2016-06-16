import { VIDEO_PLAYED } from '../constants/video.js';

function videoPlayed(video) {
  return {
    type: VIDEO_PLAYED,
    payload: {
      isPlayed: true,
      isPaused: false,
      isFirstPlay: false
    }
  }
}

export default videoPlayed
