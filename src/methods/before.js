import newVideo from './newVideo.js'

function before(currentIndex, currentIndexObject, videos) {
  if(currentIndex > 0) {
    return newVideo(currentIndex - 1, currentIndexObject)
  }

  if(currentIndex == 0 && currentIndexObject > 0) {
    return newVideo(videos[currentIndexObject - 1].length - 1, currentIndexObject - 1);
  }

  return false;
}

export default before;
