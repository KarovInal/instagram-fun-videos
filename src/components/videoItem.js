import React from 'react'

var VideoItem = React.createClass({
  clickVideo: function() {
    var { onClickVideo, index, indexObject} = this.props;
    onClickVideo({
      currentIndex: index,
      currentIndexObject: indexObject
    })
  },
  render: function() {
    var { index, indexObject, name, preview, chanel, chanelImg, onClickVideo, like } = this.props;

    like = formatLike(like)

    return (
      <div className="elements__video">
        <div className="video__preview" onClick={this.clickVideo}>
          <img className="preview__image" src={preview}></img>
        </div>
        <div className="video__description">
          <div className="description__like">
            <div className="like__hurt"></div>
            <div className="like__count">{like}</div>
          </div>
          <div className="description__chanel">
            <img className="chanel__image" src={chanelImg}></img>
          </div>
        </div>
      </div>
    )
  }
})

export default VideoItem

function formatLike(like) {
  like+='';

  if(like.length <= 6 && like.length > 3) {
    like = like.slice(0, like.length - 3);
    return like += 'K'
  } else if (like.length > 6 && like.length > 5) {
    like = like.slice(0, like.length - 6);
    return like += 'M'
  }

  return like;
}
