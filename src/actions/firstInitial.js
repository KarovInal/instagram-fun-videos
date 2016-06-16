import { FIRST_INITIAL_SECCESS, FIRST_INITIAL_FAILURE } from '../constants/firstInitial.js';
var request = require('ajax-request');

//Action creatorS

export function firstInitialSeccess(data) {
  return {
    type: FIRST_INITIAL_SECCESS,
    payload: {
      videos: data
    }
  }
}

export function firstInitialFailure(error) {
  return {
    type: FIRST_INITIAL_FAILURE,
    error: true,
    payload: {
      error: error,
      message: 'Ошибка при загрузке'
    }
  }
}

//Async actionS

export function getFistInitial() {
  return function( dispatch ) {
    request.post({
      url: 'http://localhost:3000/videos'
    }, function(err, res, body) {
      console.log(JSON.parse(body));
      dispatch(firstInitialSeccess(JSON.parse(body)))
    });
  }
}
