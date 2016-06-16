import React from 'react'
import '../style/videos/index.css'

//Scrolled
import Scrolled from '../components/Scrolled.js'

//videoItem
import VideoItem from './videoItem.js'

//VideoPlayer
import VideoPlayer from './videoPlayer.js'

var Videos = React.createClass({
  render: function() {
    var { onVideoPlayed, onVideoPaused, videos, countView, scrolled, changeScrolled, onClickVideo, play, onCloseVideo, clickBefore, clickAfter } = this.props;

    document.body.style.overflow = play.isPlay ? 'hidden' : 'scroll'
    document.body.style.overflowX = play.isPlay ? 'hidden' : 'hidden'

    return (
      <div className="container">
        <p className="container__description">
          Самые сешные видео
          <br/>
          <i>instagram</i> за последние 24 часа
        </p>

        {
          play.isPlay ? <VideoPlayer key={Math.random()}
                                     currentIndex={play.currentIndex}
                                     currentIndexObject={play.currentIndexObject}
                                     videos={videos}
                                     onCloseVideo={onCloseVideo}
                                     clickBefore={clickBefore}
                                     clickAfter={clickAfter}
                                     onVideoPlayed={onVideoPlayed}
                                     onVideoPaused={onVideoPaused}
                                     play={play} />
                                   : null
        }

        <div className="container__videos">
          {
            listVideos(videos, countView, onClickVideo)
          }
        </div>

        {
          !scrolled ? <Scrolled changeScrolled={ changeScrolled }/> : null
        }
      </div>
    )
  }
})

export default Videos

function listVideos(videos, countView, onClickVideo) {
  return Object.keys(videos).map(function(indexObject) {
    if (countView >= indexObject) {

      //собераем все видео
      var allVideos = videos[indexObject].map(function(video, index) {
        return (
          <VideoItem
            key={Math.random()}
            index={index}
            indexObject={indexObject}

            name={video.name}
            preview={video.preview}

            like={video.like}

            chanel={video.chanel}
            chanelImg={video.chanel.img}

            onClickVideo={onClickVideo}
          />
        )
      })

      //если видео не хватает, то добавить недостоющие в виде пустого блока
      if(allVideos.length % 3) {
        allVideos = addEmptyVideo(allVideos)
      }

      //групируем все видео по 3, и возврацает массив этих группировок
      var videosRow = [];
      var row, elemRow;

      for(var i = 0; i < allVideos.length;) {
        row = allVideos.slice(i, i + 3);
        elemRow = <div key={Math.random()} className="videos__row"> {row} </div>;
        videosRow.push(elemRow)
        i += row.length;
      }

      return videosRow;
    }
  })
}

function addEmptyVideo(allVideos) {
  allVideos.push(<div className="empty__video"></div>);

  if (allVideos.length / 3) {
    allVideos.push(<div className="empty__video"></div>);
    return allVideos
  }

  return allVideos
}
