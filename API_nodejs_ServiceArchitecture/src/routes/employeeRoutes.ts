import express from 'express';

import * as employeeController from '../controllers/employeeController';
import { employeeValidation } from '../validation';


const router = express.Router();

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

export default router;
