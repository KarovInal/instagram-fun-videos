import React from 'react';

import '../style/scrolled/index.css'

var Scrolled = React.createClass({
  render: function() {
    var { changeScrolled } = this.props;

    return (
      <div className="scrolled" onClick={ changeScrolled }>
        <span>
          Загрузить
        </span>
      </div>
    )
  }
})

export default Scrolled
