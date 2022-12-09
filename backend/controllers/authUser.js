import { User } from '../models/users.js';

const user = new User(
    {
        email: 'Vadim',
        password: '121212'
    }
);

user
    .save()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));