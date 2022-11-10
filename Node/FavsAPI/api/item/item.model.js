const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  title: {
    type: String,
    trim: true,
    require: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  favList: {
    type: Schema.Types.ObjectId,
    ref: 'Fav',
    require: true,
    trim: true,
  } 
}, {
  timestamps: true,
  versionKey: false,
});

const item = model('Item', itemSchema);

module.exports = item;
