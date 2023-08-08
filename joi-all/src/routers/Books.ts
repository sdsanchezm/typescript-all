import express from 'express';
import bookController from '../controllers/Book';

const router = express.Router();

router.get('/get/', bookController.getBookAll);
router.get('/get/:bookId', bookController.getOneBook);
router.post('/create/', bookController.createBook);
router.patch('/update/:bookId', bookController.updateBook);
router.delete('/delete/:bookId', bookController.deleteBook);

export default router;
