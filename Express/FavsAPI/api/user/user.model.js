const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    require: true,
    trim: true,
    type: String,
  },
  email: {
    require: true,
    trim: true,
    type: String,
    unique: true,
  },
  password: {
    require: true,
    trim: true,
    type: String,
  },
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'Fav',
    trim: true,
  }],
}, {
  timestamps: true,
  versionKey: false,
});

userSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const response = await bcrypt.compare(candidatePassword, user.password);
    return response;
  }
  catch (err) {
    throw new Error(err);
  }
};

const user = model('User', userSchema);

module.exports = user;
