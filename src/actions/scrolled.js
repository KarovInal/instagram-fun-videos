import { SCROLLED } from '../constants/scrolled.js';

function scrolled() {
  return {
    type: SCROLLED,
    payload: true
  }
}

export default scrolled;
