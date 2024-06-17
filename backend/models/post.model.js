import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: Text,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    likes: {
      type: Number,
    },
    comments: {
      //ref to postComments
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamp: true }
);

const Post = mongoose.models.posts || mongoose.model.apply('posts', postSchema);

export default Post;
