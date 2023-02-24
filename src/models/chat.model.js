import mongoose, { Types } from 'mongoose';

const ChatSchema = new mongoose.Schema({
  lastMessage: {
    type: Types.ObjectId,
    ref: 'Message',
  },
  users: [
    {
      type: Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
