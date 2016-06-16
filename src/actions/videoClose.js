import { VIDEO_CLOSE } from '../constants/video.js'

function videoClose() {
  return {
    type: VIDEO_CLOSE,
    payload: {
      isPlay: false
    }
  }
}

export default videoClose
