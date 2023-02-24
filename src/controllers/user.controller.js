import User from '../models/user.model.js';

export async function search(req, res) {
  const { searchTerm } = req.params;
  const users = await User.find({
    username: { $regex: searchTerm, $options: 'i' },
  }).find({ _id: { $ne: req.user.id } });

  return res.status(200).json({ users });
}
