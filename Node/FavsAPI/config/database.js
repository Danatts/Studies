const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
