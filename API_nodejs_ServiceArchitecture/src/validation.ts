// validation.ts
// import { Joi } from 'express-validator';
import Joi from 'joi';

export const employeeValidation = {
    createEmployee: {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            department: Joi.string().required(),
        }),
    },
    updateEmployee: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
        body: Joi.object({
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            department: Joi.string(),
        }),
    },
};

export const departmentValidation = {
    createDepartment: {
        body: Joi.object({
            name: Joi.string().required(),
            description: Joi.string(),
        }),
    },
    updateDepartment: {
        params: Joi.object({
            id: Joi.string().required(),
        }),
        body: Joi.object({
            name: Joi.string(),
            description: Joi.string(),
        }),
    },
};
