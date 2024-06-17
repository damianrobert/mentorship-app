import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      unique: true,
      minlength: 5,
    },
    avatar: {
      type: String,
      default: '',
    },
    roles: {
      mentee: {
        type: Boolean,
        default: true,
      },
      mentor: {
        type: Boolean,
        default: false,
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
