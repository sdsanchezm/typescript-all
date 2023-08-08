import { NextFunction, Request, Response } from 'express';
import Books from '../models/Books';
import mongoos from 'mongoose';
import mongoose from 'mongoose';

const getBookAll = (req: Request, res: Response, next: NextFunction) => {
    Books.find()
        .then((books) => {
            books ? res.status(200).json({ books }) : res.status(404).json({ message: 'Not Found...' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

const getOneBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    Books.findById(bookId)
        .then((book) => {
            book ? res.status(200).json({ book }) : res.status(404).json({ message: 'Not Found...' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

const createBook = (req: Request, res: Response, next: NextFunction) => {
    const { title, author } = req.body;

    const newBook = new Books({
        _id: new mongoose.Types.ObjectId(),
        title,
        author
    });

    newBook
        .save()
        .then((newBook) => {
            res.status(201).json({ newBook });
        })
        .catch((error) => {
            res.status(201).json({ error });
        });
};

const updateBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    Books.findById(bookId)
        .then((book) => {
            if (book) {
                book.set(req.body);

                book.save()
                    .then((book) => {
                        res.status(201).json({ book });
                    })
                    .catch((err) => {
                        res.status(404).json({ err });
                    });
            } else {
                res.status(404).json({ message: 'Not Found...' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

const deleteBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    Books.findByIdAndDelete(bookId)
        .then((book) => {
            book ? res.status(201).json({ message: 'Book Deleted...' }) : res.status(200).json({ message: 'Book Not Found...' });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

export default { getBookAll, getOneBook, createBook, updateBook, deleteBook };
