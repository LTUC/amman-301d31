'use strict';

const express = require('express');
const server = express();

require('dotenv').config();
const cors = require('cors');

const axios = require('axios');

server.use(cors());

const PORT = process.env.PORT;

server.get('/photo', getPhoto);

// https://api.unsplash.com/search/photos?query=''
// http://localhost:3050/photo?search_key=''
function getPhoto(req, res) {
  let query = req.query.search_key;
  let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_KEY}`;

  axios
  .get(url)
  .then( result => {
    // console.log(result.data.results)
    let newPhoto =  result.data.results.map(item => {
      return new Photo(item);
    })

    res.send(newPhoto)
  })
  .catch(err => console.log(err))

  // console.log(url)
  // res.send({
  //   message: 'from the server side'
  // })
}

server.get('*', (req, res) => {
  res.status(404).send({
    code: 404,
    message: 'not found'
  })
})

function Photo(item) {
  this.fullUrl = item.urls.full;
  this.thumb = item.urls.regular;
  this.likes = item.likes;
  this.bio = item.user.bio;
}

server.listen(PORT, () => console.log(`I am listening to port ${PORT}`))