import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Author from '../models/Author';

const createAuthor = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const author = new Author({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return author
        .save()
        .then((author) => {
            res.status(201).json({ author });
        })
        .catch((err) => res.status(500).json({ err }));
};

const readAuthor = async (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;
    try {
        const author = await Author.findById(authorId);
        return author ? res.status(200).json(author) : res.status(404).json({ message: 'Not Found...' });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

// without try catch:
const readAuthor2 = (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;
    Author.findById(authorId)
        .then((author) => (author ? res.status(200).json(author) : res.status(404).json({ message: 'Not Found...' })))
        .catch((err) => res.status(500).json({ err }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Author.find()
        .then((authors) => (authors ? res.status(202).json({ authors }) : res.status(202).json({ message: 'Not found...' })))
        .catch((err) => res.status(500).json({ err }));
};

const updateAuthor = (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;
    Author.findById(authorId)
        .then((author) => {
            if (author) {
                author.set(req.body);

                return author
                    .save()
                    .then((author) => res.status(201).json({ author }))
                    .catch((err) => res.status(500).json({ err }));
            } else {
                res.status(404).json({ message: 'Not found...' });
            }
        })
        .catch((err) => {
            res.status(500).json({ err });
        });
};

const deleteAuthor = (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;
    Author.findByIdAndDelete(authorId)
        .then((author) => {
            author ? res.status(200).json({ message: 'Deleted...' }) : res.status(404).json({ message: 'Not found...' });
        })
        .catch((err) => res.status(500).json({ message: 'Error deleting...' }));
};

export default { createAuthor, readAuthor, readAll, updateAuthor, deleteAuthor };
