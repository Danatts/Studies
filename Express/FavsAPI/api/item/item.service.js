const ItemModel = require('./item.model');

const createItem = (body) => {
  return ItemModel.create(body);
};

module.exports = {
  createItem,
};
