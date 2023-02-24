import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, config.jwtSecret);
};

const User = mongoose.model('User', UserSchema);

export default User;
