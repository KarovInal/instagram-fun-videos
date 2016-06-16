import newVideo from './newVideo.js'

function after(currentIndex, currentIndexObject, videos) {
  if(currentIndex < videos[currentIndexObject].length - 1) {
    return newVideo(currentIndex + 1, currentIndexObject)
  }

  if(currentIndex == videos[currentIndexObject].length - 1 && currentIndexObject < Object.keys(videos).length - 1) {
    return newVideo(currentIndex = 0, +currentIndexObject + 1)
  }

  return false;
}

export default after;
