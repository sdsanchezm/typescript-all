import { Request, Response, NextFunction } from 'express';

import * as employeeService from '../services/employeeService';
import { IEmployee } from '../models/employeeModel';


export const createEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const employeeData: IEmployee = req.body;
        const createdEmployee = await employeeService.createEmployee(employeeData);
        res.status(201).json(createdEmployee);
    } catch (err) {
        next(err);
    }
};

export const getEmployees = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const employees = await employeeService.getEmployees();
        res.status(200).json(employees);
    } catch (err) {
        next(err);
    }
};

export const getEmployeeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const employee = await employeeService.getEmployeeById(id);
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' });
            return;
        }
        res.status(200).json(employee);
    } catch (err) {
        next(err);
    }
};

export const updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const employeeData: IEmployee = req.body;
        const updatedEmployee = await employeeService.updateEmployee(id, employeeData);
        if (!updatedEmployee) {
            res.status(404).json({ message: 'Employee not found' });
            return;
        }
        res.status(200).json(updatedEmployee);
    } catch (err) {
        next(err);
    }
};

export const deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        await employeeService.deleteEmployee(id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
