import React from 'react'

import Video from './Video.js'

var videoPlayer = React.createClass({
  onCloseVideo: function(e) {
    if(e.target.className === 'container_video' || e.target.className === 'video' || e.target.className === 'video__control' || e.target.className === 'control__wrap' || e.target.className === 'close') {
      var { onCloseVideo } = this.props;
      onCloseVideo()
    }
  },
  render: function() {
    var { currentIndex, currentIndexObject, play, videos, onCloseVideo, clickBefore, clickAfter, onVideoPaused, onVideoPlayed } = this.props;
    var src = videos[currentIndexObject][currentIndex].src
    var poster = videos[currentIndexObject][currentIndex].poster


    return (
      <div className="container_video" onClick={this.onCloseVideo}>
        <Video
          src={src}
          poster={poster}
          videos={videos}
          currentIndex={currentIndex}
          currentIndexObject={currentIndexObject}
          clickBefore={clickBefore}
          clickAfter={clickAfter}
          onCloseVideo={this.onCloseVideo}
          onVideoPaused={onVideoPaused}
          onVideoPlayed={onVideoPlayed}
          play={play} />
      </div>
    )
  }
})

export default videoPlayer
