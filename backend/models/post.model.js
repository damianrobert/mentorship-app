import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
    comments: {
      //ref to postComments
      type: mongoose.Schema.Types.ObjectId,
      ref: 'postComments',
    },
    genre: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.models.posts || mongoose.model('posts', postSchema);

export default Post;
