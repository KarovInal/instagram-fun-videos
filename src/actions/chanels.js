import {
  GET_CHANELS_SECCESS,
  GET_CHANELS_FAILURE
} from '../constants/chanels';

//Action creatorS

function getChanelsSeccess(chanels) {
  return {
    type: GET_CHANELS_SECCESS,
    payload: {
      chanels: chanels
    }
  }
}

function getChanelsFailure(err) {
  return {
    type: GET_CHANELS_FAILURE,
    error: true,
    payload: {
      error: err,
      message: 'Не удалось выполнить операцию..'
    }
  }
}

//Async actionS

export function requestChangeChanels(id) {
  return function(dispatch, getState) {
    var chanels = getState().chanels;
    chanels[id].enabled = !chanels[id].enabled;

    //Запрос на сервер
    dispatch(getChanelsSeccess(chanels));
  }
}
