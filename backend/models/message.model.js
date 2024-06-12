import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  //createdAt and updatedAt fields => message createdAt
  { timestamps: true }
);

const Message =
  mongoose.models.messages || mongoose.model('messages', messageSchema);

export default Message;
