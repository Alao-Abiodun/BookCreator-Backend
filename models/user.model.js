const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Please fill in the proper email');
        }
      },
    },
    password: {
      type: String,
      trim: true,
      minlength: 7,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'user',
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;

  const token = jwt.sign({ _id: user._id.toString() }, 'thisismysecret');

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
