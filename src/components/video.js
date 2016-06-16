import React from 'react'
import ReactDOM from 'react-dom'

import '../style/video/index.css'

import Before from './before.js'
import After from './after.js'

var Video = React.createClass({
  onClickVideo: function(e) {
    var { play, onVideoPaused, onVideoPlayed } = this.props;
    var video = this.refs.video;

    if(video.paused) {
      video.play();
      onVideoPlayed();
    } else {
      video.pause();
      onVideoPaused();
    }
  },
  render: function() {
    var { play, src, poster, videos, clickBefore, clickAfter, currentIndex, currentIndexObject, onCloseVideo, onVideoPaused, onVideoPlayed } = this.props;

    var width = videos[currentIndexObject][currentIndex].width
    var height = videos[currentIndexObject][currentIndex].height
    var videoStyle = {};

    if(height > 600) {
      width = ((width/(height/600)) - 1) + 'px';

      videoStyle = {
        maxWidth: width
      }
    }

    var firstPlay = play.isFirstPlay ? <img src={poster} className="wrap__image"></img> : null;

    return (
      <div className="video" onClick={onCloseVideo}>
        <div className="video__control">
          <div className="control__wrap">
            <Before videos={videos} clickBefore={clickBefore} currentIndex={currentIndex} currentIndexObject={currentIndexObject} />
            <After className="video-play" videos={videos} clickAfter={clickAfter} currentIndex={currentIndex} currentIndexObject={currentIndexObject} />
          </div>
        </div>
        <div className="video__player" style={videoStyle}>
          <div className="player__wrap" onClick={this.onClickVideo}>
            <video ref="video" loop poster={poster} width="100%" height="auto" src={src} type="video/mp4"></video>
            {
              firstPlay
            }
            {
              play.isPaused ? <div className="wrap__play"></div> : null
            }
          </div>
        </div>
        <div className="close">x</div>
      </div>
    )
  }
})

export default Video


// <img ref="image" className="wrap__image" src={poster}></img>
