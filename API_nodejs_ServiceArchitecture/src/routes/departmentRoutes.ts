import express from 'express';

import { departmentValidation } from '../validation';
import * as departmentController from '../controllers/departmentController';


const router = express.Router();

// router.post('/', validationResult(departmentValidation.createDepartment), departmentController.createDepartment);
router.post('/', departmentController.createDepartment);
router.get('/', departmentController.getDepartments);
router.get('/:id', departmentController.getDepartmentById);
router.put('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

export default router;
