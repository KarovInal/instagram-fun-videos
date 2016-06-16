import React from 'react';
import { connect } from 'react-redux';

//polyfill
import 'babel-polyfill'

//Chanels
import Chanels from '../components/chanels.js';
import { requestChangeChanels } from '../actions/chanels.js';


//Videos
import Videos from '../components/videos.js'

//First initial
import { getFistInitial } from '../actions/firstInitial.js';

//isSetting
import isSettingAction from '../actions/isSetting.js';

//style
import '../style/body/index.css'

//rwd
import '../style/rwd/index.css'

//polyfill
import '../polyfill/closest.js'

//scrolled action
import scrolledAction from '../actions/scrolled.js'

//countView action
import { incrementCountView } from '../actions/countView.js'

//videoStart videoClose
import videoStart from '../actions/videoStart.js'
import videoClose from '../actions/videoClose.js'

//videoPaused videoPlayed
import videoPaused from '../actions/videoPaused'
import videoPlayed from '../actions/videoPlayed'

//methods
import before from '../methods/before.js'
import after from '../methods/after.js'

var App = React.createClass({
  componentDidMount: function() {
    var { dispatch } = this.props;

    dispatch(getFistInitial())
  },
  onKey: function(e) {
    var { play, dispatch, videos} = this.props
    //before
    if(e.keyCode === 37) {
      var newVideo = before(play.currentIndex, play.currentIndexObject, videos)
      if(newVideo) {
        dispatch(videoStart({
          currentIndex: newVideo.newCurrentIndex,
          currentIndexObject: newVideo.newCurrentIndexObject
        }))
      }
    }

    //after
    if(e.keyCode === 39) {
      var newVideo = after(play.currentIndex, play.currentIndexObject, videos)
      if(newVideo) {
        dispatch(videoStart({
          currentIndex: newVideo.newCurrentIndex,
          currentIndexObject: newVideo.newCurrentIndexObject
        }))
      }
    }
  },
  onClickVideo: function(video) {
    var { dispatch } = this.props;

    dispatch(videoStart({
      currentIndex: video.currentIndex,
      currentIndexObject: video.currentIndexObject
    }))
  },
  onCloseVideo: function() {
    var { dispatch } = this.props;

    dispatch(videoClose())
  },
  onVideoPaused: function() {
    var { dispatch } = this.props;

    dispatch(videoPaused())
  },
  onVideoPlayed: function() {
    var { dispatch } = this.props;

    dispatch(videoPlayed())
  },
  changeScrolled: function() {
    var { dispatch } = this.props;

    dispatch(scrolledAction());
    dispatch(incrementCountView(1));
  },
  onChangeChanels: function(id) {
    var { dispatch } = this.props;

    dispatch(requestChangeChanels(id))
  },
  onIsSetting: function(setting) {
    var { dispatch } = this.props;

    dispatch(isSettingAction(setting))
  },
  clickBefore: function(newVideo) {
    var { dispatch } = this.props;

    dispatch(videoStart({
      currentIndex: newVideo.newCurrentIndex,
      currentIndexObject: newVideo.newCurrentIndexObject
    }))
  },
  clickAfter: function(newVideo) {
    var { dispatch } = this.props;

    dispatch(videoStart({
      currentIndex: newVideo.newCurrentIndex,
      currentIndexObject: newVideo.newCurrentIndexObject
    }))
  },
  onScroll: function(e) {
    var { dispatch, countView, videos, scrolled} = this.props;

    var videosLength = Object.keys(videos).length
    var element = document.body;
    var heightWindow = Math.min(document.documentElement.clientHeight, document.body.clientHeight);
    var scrollHeight = element.scrollHeight - heightWindow - (element.scrollTop || window.pageYOffset);
    if(scrolled && scrollHeight < 5 && videosLength > countView + 1) {
      dispatch(incrementCountView(++countView));
    }
  },
  setScrollEvent: function() {
    window.onscroll = this.onScroll;
  },
  render: function() {
    var { videos, countView, isSetting, scrolled, play} = this.props;

    if(!scrolled) this.setScrollEvent()

    if(play.isPlay && !window.onkeydown) {
      window.onkeydown = this.onKey
    }

    // <Chanels onIsSetting={ this.onIsSetting } isSetting={ isSetting } chanels={ chanels } onChangeChanels={ this.onChangeChanels } />

    return (
      <div>
        <Videos onVideoPlayed={this.onVideoPlayed} onVideoPaused={this.onVideoPaused} clickBefore={this.clickBefore} clickAfter={this.clickAfter} onCloseVideo={this.onCloseVideo} play={play} onClickVideo={this.onClickVideo} changeScrolled={this.changeScrolled} scrolled={scrolled} videos={ videos } countView={ countView } />
      </div>
    )
  }
})

function selector(state) {
  return state
}

export default connect(selector)(App)
