import React from 'react';

import isBefore from '../methods/before.js'

var Before = React.createClass({
  render: function() {
    var {videos, clickBefore, currentIndex, currentIndexObject} = this.props;

    var newVideo = isBefore(currentIndex, currentIndexObject, videos);

    return (
      newVideo ? <button className="video__before" onClick={function(){ clickBefore(newVideo) }}>{'<'}</button> : null
    )
  }
})

export default Before
