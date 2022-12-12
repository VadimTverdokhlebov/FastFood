import { validationResult } from 'express-validator';
import { generateAccessToken } from '../JWT/userTokens.js';
import { checkUser, createNewUser } from '../db/requests/userRequests.js';
import bcrypt from 'bcrypt';


class AuthController {

    async registration(req, res) {
        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Registration error', errors });
            }

            const email = req.body.email;
            const password = req.body.email;

            if (await checkUser(email)) {
                return res.status(400).json({ message: 'The user already exist' });
            }

            const hashPassword = bcrypt.hashSync(password, 3);
            const dataUser = { email, password: hashPassword };

            await createNewUser(dataUser)

            return res.json({ message: 'The user has been successfully registered' });

        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        try {

            const email = req.body.email;
            const password = req.body.email;

            const user = await checkUser(email);

            if (!user) {
                return res.status(400).json({ message: 'The user not found' });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.status(400).json({ message: 'Insert incorrect password' });
            }

            const token = generateAccessToken(user._id);
            return res.json({ token });


        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Login error' })
        }
    }
}

export default new AuthController();