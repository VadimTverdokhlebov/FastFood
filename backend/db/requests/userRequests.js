import { User } from '../models/users.js';

export async function checkUser(email) {

    return await User.findOne({ email });
}

export async function createNewUser(dataUser) {

    const user = new User(dataUser);
            
    await user.save();
}