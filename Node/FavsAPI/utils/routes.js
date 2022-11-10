const fav = require('../api/favs');
const item = require('../api/item');
const user = require('../api/user');
const auth = require('../auth');

function routes(app) {
  app.use('/api/favs', fav);
  app.use('/api/item', item);
  app.use('/api/user', user);
  app.use('/auth', auth);
}

module.exports = routes;
