var express = require('express');
var path = require('path');
var app = express();
var request = require('sync-request');
var async = require("async");
var fs = require('fs');
var nodeDb = require('node-json-db');

var db = new nodeDb('videos', true, false);

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res, next) {

  res.sendFile(path.join(__dirname, 'pages/home.html'))

})

app.post('/videos', function(req, res, next) {

  var file = db.getData('videos');

  res.set({
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-cache'
  });

  res.send(file);
})

app.use(express.static(path.join(__dirname, '/public')));

app.use(function(req, res, next) {
  res.send('Страница не найдене..')
});


app.listen(app.get('port'), function() {
  console.log('сервер запущен localhost:' + app.get('port'));
})

var nameChanels = [
  "instavideokz",
  "afvofficial",
  "mopexaxa",
  "hahachkala.ru",
  "kvn_video",
  "bestvines",
  "ufc_mafia",
  "mma_russia",
  "auto_crash",
  "popular.video",
  "blogger_vine",
  "failsrussia"
]

var chanels = []

setInterval(function() {
  console.log('update');
}, 1000 * 60 * 2)

setInterval(function() {
  async.waterfall([
    getChanels,
    getVideos,
    sliceVideo
  ], function(err, result) {

    var result = JSON.stringify(result);

    db.push('videos', result);
    console.log('ok');

    db.save();
    db.reload();
  })
}, 1000 * 60 * 60);

function getChanels(callback) {
  for(var i = 0; i < nameChanels.length; i++) {
    var res = request('GET', "https://api.instagram.com/v1/users/search?q=" + nameChanels[i] + "&access_token=261708814.1fb234f.4fd98429a21d469c8b2d595beb97540b&count=1");
    var data = JSON.parse(res.getBody('utf8')).data[0];
    chanels[i] = data.id;
  }

  callback(null);
}

function getVideos(callback) {
  var preVideos = {};
  for(var i = 0; i < chanels.length; i++) {

    var res = request('GET', "https://api.instagram.com/v1/users/" + chanels[i] + "/media/recent?access_token=261708814.1fb234f.4fd98429a21d469c8b2d595beb97540b&count=20");
    var data = JSON.parse(res.getBody('utf8'));
    var user = data.data[0].user.username;
    var videos = [];

    for(var j = 0; j < data.data.length; j++) {
      if(data.data[j].type == 'video' && videos.length < 12) {
        videos.push({
          id: data.data[j].id,
          chanel: {
            name: data.data[j].user.username,
            img: data.data[j].user.profile_picture
          },
          like: data.data[j].likes.count,
          poster: data.data[j].images.standard_resolution.url,
          preview: data.data[j].images.thumbnail.url,
          src: data.data[j].videos.standard_resolution.url,
          width: data.data[j].videos.standard_resolution.width,
          height: data.data[j].videos.standard_resolution.height,
        });
      }
    }

    preVideos[user] = videos;
  }

  callback(null, preVideos);
}

function sliceVideo(preVideos, callback) {
  var cancelVideos = new Array(Object.keys(preVideos).length);

  for(var i = 0; i < 12; i++) {
    cancelVideos[i] = [];
    for(var chanel in preVideos) {
      cancelVideos[i].push(preVideos[chanel][i])
    }
  }

  callback(null, cancelVideos)
}
