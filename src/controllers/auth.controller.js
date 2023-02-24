import User from '../models/user.model.js';

export async function register(req, res) {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  const token = user.getSignedToken();

  return res.status(201).json({ token });
}

export async function login(req, res) {
  const { username, password } = req.body;

  // checking credentials
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid Credentials');
  if (user.password !== password) throw new Error('Invalid Credentials');

  const token = user.getSignedToken();

  return res.status(200).json({ token });
}
