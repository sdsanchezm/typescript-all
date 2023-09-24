import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config/config';
import User, { IUser } from '../models/User';
import { isTokenBlacklisted, addToBlacklist } from '../config/tokenBlacklist';
import RevokedToken from '../models/RevokedToken';


class AuthController {

    async register(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            const userExist = await User.findOne({ username });
            if (userExist) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({ username, password: hashedPassword });
            await user.save();

            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Authentication failed' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Authentication failed' });
            }

            const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
                expiresIn: '1h',
            });

            return res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async logout(req: Request, res: Response) {
        try {
            const token = req.header('Authorization');
            if (token) {
                // Store the revoked token in the database
                const revokedToken = new RevokedToken({ token });
                await revokedToken.save();
            }

            return res.status(200).json({ message: 'Logged out successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}

export default new AuthController();
