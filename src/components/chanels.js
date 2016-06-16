import React from 'react';

//style
import '../style/chanels/index.css'

var Chanels = React.createClass({
  onClickChanel: function(e) {
    var { onChangeChanels } = this.props;

    var id = e.target.value;
    if(e.target.closest('.watch__eyes')) {
      onChangeChanels(id)
    }
  },
  render: function() {
    var { chanels, onChangeChanels, isSetting, onIsSetting } = this.props;

    return (
      <div className={isSetting ? 'chanels_resize chanels' : 'chanels'}>
        <div className="chanels__top">
          <div className="top__logo"></div>
          <div className="top__setting">
            <div className="setting__button" onClick={ function() { onIsSetting(!isSetting) } }></div>
          </div>
        </div>
        <ul className="chanels__list" onClick={ this.onClickChanel }>
          {
            isSetting ? listChanels(chanels) : listChanelsEnabled(chanels)
          }
        </ul>
      </div>
    )
  }
})

export default Chanels;

function listChanels(chanels, isSetting) {
  return Object.keys(chanels).map(function(i) {
    return (
      <li className="list__chanel" key={i} >
        <div className="chanel__block_logo" >
          <img src={chanels[i].img} className="block_logo__logo"></img>
        </div>
        <a className="chanel__name">{chanels[i].name}</a>
        {
          chanels[i].enabled ? <button className="watch__eyes watch__to_see" value={chanels[i].id}></button> : <button className="watch__eyes watch__not_to_see" value={chanels[i].id}></button>
        }
      </li>
    )
  })
}

function listChanelsEnabled(chanels) {
  return Object.keys(chanels).map(function(i) {
    if(chanels[i].enabled){
      return (
        <li className="list__chanel" key={i} >
          <div className="chanel__block_logo" >
            <img src={chanels[i].img} className="block_logo__logo"></img>
          </div>
          <a className="chanel__name">{chanels[i].name}</a>
          <button className="watch__eyes" value={chanels[i].id}></button>
        </li>
      )
    }
  })
}
