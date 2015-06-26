var Stickshift = require('./src/index.js');
var cookie = require('cookie');

Stickshift(
  document.getElementById('page'),
  {
    endpoint: 'http://localhost:3000/query',
    branch: 'db',
    username: 'faraday2',
    access_token: cookie.parse(document.cookie).access_token,
    mapboxToken: 'pk.eyJ1IjoiZmFyYWRheTIiLCJhIjoiTUVHbDl5OCJ9.buFaqIdaIM3iXr1BOYKpsQ',
    repo: 'stickshift'
  });
