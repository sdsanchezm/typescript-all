import express from 'express';
import bookController from '../controllers/Book';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.get('/get/', bookController.getAll);
router.get('/get/:bookId', bookController.getOneBook);
router.post('/create/', ValidateSchema(Schemas.book.create), bookController.createBook);
router.patch('/update/:bookId', ValidateSchema(Schemas.author.update), bookController.updateBook);
router.delete('/delete/:bookId', bookController.deleteBook);

export default router;
