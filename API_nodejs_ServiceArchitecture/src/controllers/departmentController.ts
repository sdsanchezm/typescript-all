import { Request, Response, NextFunction } from 'express';

import * as departmentService from '../services/departmentService';
import { IDepartment } from '../models/departmentModel';


export const createDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const departmentData: IDepartment = req.body;
        const createdDepartment = await departmentService.createDepartment(departmentData);
        res.status(201).json(createdDepartment);
    } catch (err) {
        next(err);
    }
};

export const getDepartments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const departments = await departmentService.getDepartments();
        res.status(200).json(departments);
    } catch (err) {
        next(err);
    }
};

export const getDepartmentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const department = await departmentService.getDepartmentById(id);
        if (!department) {
            res.status(404).json({ message: 'Department not found' });
            return;
        }
        res.status(200).json(department);
    } catch (err) {
        next(err);
    }
};

export const updateDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const departmentData: IDepartment = req.body;
        const updatedDepartment = await departmentService.updateDepartment(id, departmentData);
        if (!updatedDepartment) {
            res.status(404).json({ message: 'Department not found' });
            return;
        }
        res.status(200).json(updatedDepartment);
    } catch (err) {
        next(err);
    }
};

export const deleteDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        await departmentService.deleteDepartment(id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};
