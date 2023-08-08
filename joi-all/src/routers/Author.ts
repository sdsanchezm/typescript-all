import express from 'express';
import controller from '../controllers/Author';

const router = express.Router();

router.get('/get/', controller.readAll);
router.get('/get/:authorId', controller.readAuthor);
router.post('/create', controller.createAuthor);
router.patch('/update/:authorId', controller.updateAuthor);
router.delete('/delete/:authorId', controller.deleteAuthor);

export default router;
