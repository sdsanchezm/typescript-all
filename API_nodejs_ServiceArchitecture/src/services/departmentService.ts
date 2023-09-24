import Department, { IDepartment } from '../models/departmentModel';


export const createDepartment = async (departmentData: IDepartment): Promise<IDepartment> => {
    return Department.create(departmentData);
};

export const getDepartments = async (): Promise<IDepartment[]> => {
    return Department.find().populate('employees').exec();
};

export const getDepartmentById = async (id: string): Promise<IDepartment | null> => {
    return Department.findById(id).populate('employees').exec();
};

export const updateDepartment = async (id: string, departmentData: IDepartment): Promise<IDepartment | null> => {
    return Department.findByIdAndUpdate(id, departmentData, { new: true }).populate('employees').exec();
};

export const deleteDepartment = async (id: string): Promise<void> => {
    await Department.findByIdAndDelete(id);
};
