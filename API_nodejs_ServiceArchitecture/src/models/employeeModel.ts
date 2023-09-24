import mongoose, { Document, Schema, Types } from 'mongoose';

import IDepartment from './departmentModel';

export interface IEmployee extends Document {
    firstName: string;
    lastName: string;
    email: string;
    department: Types.ObjectId;
}

const employeeSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
    },
});

export default mongoose.model<IEmployee>('Employee', employeeSchema);
