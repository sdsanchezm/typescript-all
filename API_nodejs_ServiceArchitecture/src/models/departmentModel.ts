import mongoose, { Document, Schema, Types } from 'mongoose';

import { IEmployee } from './employeeModel';


export interface IDepartment extends Document {
    name: string;
    description: string;
    employees: Types.Array<IEmployee['_id']>;
}

const departmentSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
        },
    ],
});

export default mongoose.model<IDepartment>('Department', departmentSchema);
