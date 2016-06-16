import { combineReducers } from 'redux';

import chanels from './chanels.js'
import countView from './countView.js'
import videos from './videos.js'
import isSetting from './isSetting.js'
import scrolled from './scrolled.js'
import play from './play.js'

export default combineReducers({
  countView: countView,
  videos: videos,
  isSetting: isSetting,
  scrolled: scrolled,
  play: play
})
