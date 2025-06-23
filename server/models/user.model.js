import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 6
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minLength: 8
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  activeServices: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;