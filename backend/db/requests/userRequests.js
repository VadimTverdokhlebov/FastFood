import User from '../models/users.js';

export function getUser(email) {
  return User.findOne({ email });
}

export async function createNewUser(dataUser) {
  const user = new User(dataUser);

  await user.save();
}
