import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import config from '../config/config';
import RevokedToken, { IRevokedToken } from '../models/RevokedToken';


export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }

    try {
        const isTokenBlacklisted = await RevokedToken.findOne({ token });
        if (isTokenBlacklisted) {
            return res.status(401).json({ message: 'Token revoked. Authentication failed' });
        }

        const decodedToken = jwt.verify(token, config.jwtSecret);
        req.body.userId = (decodedToken as any).userId;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Authentication failed' });
    }
};


// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import config from '../config/config';
// import { isTokenBlacklisted } from '../config/tokenBlacklist';


// export const authMiddleware = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ message: 'Authentication failed' });
//     }

//     if (isTokenBlacklisted(token)) {
//         return res.status(401).json({ message: 'Token revoked. Authentication failed' });
//     }

//     try {
//         const decodedToken = jwt.verify(token, config.jwtSecret);
//         req.body.userId = (decodedToken as any).userId;
//         next();
//     } catch (error) {
//         console.error(error);
//         return res.status(401).json({ message: 'Authentication failed' });
//     }
// };
