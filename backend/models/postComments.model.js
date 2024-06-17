import mongoose from 'mongoose';

const postComments = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamp: true }
);
