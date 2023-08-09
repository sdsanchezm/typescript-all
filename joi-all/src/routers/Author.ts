import express from 'express';
import controller from '../controllers/Author';
import { ValidateSchema, Schemas } from '../middleware/ValidateSchema';
const router = express.Router();

router.get('/get/', controller.readAll);
router.get('/get/:authorId', controller.readAuthor);
router.post('/create', ValidateSchema(Schemas.author.create), controller.createAuthor);
router.patch('/update/:authorId', ValidateSchema(Schemas.author.update), controller.updateAuthor);
router.delete('/delete/:authorId', controller.deleteAuthor);

export default router;
