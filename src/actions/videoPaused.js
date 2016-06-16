import { VIDEO_PAUSED } from '../constants/video.js';

function videoPaused(video) {
  return {
    type: VIDEO_PAUSED,
    payload: {
      isPlayed: false,
      isPaused: true,
      isFirstPlay: false
    }
  }
}

export default videoPaused
