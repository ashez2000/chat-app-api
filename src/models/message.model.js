import mongoose, { Types } from 'mongoose';

const MessageSchema = new mongoose.Schema({
  context: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  chat: {
    type: Types.ObjectId,
    ref: 'Chat',
  },
  sender: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
