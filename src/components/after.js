import React from 'react';

import isAfter from '../methods/after.js'

var After = React.createClass({
  render: function() {
    var {videos, clickAfter, currentIndex, currentIndexObject} = this.props;

    var newVideo = isAfter(currentIndex, currentIndexObject, videos);

    return (
      newVideo ? <button className="video__after" onClick={function(){ clickAfter(newVideo) }}>{'>'}</button> : null
    )
  }
})

export default After
