import Employee, { IEmployee } from '../models/employeeModel';


export const createEmployee = async (employeeData: IEmployee): Promise<IEmployee> => {
    return Employee.create(employeeData);
};

export const getEmployees = async (): Promise<IEmployee[]> => {
    return Employee.find().populate('department').exec();
};

export const getEmployeeById = async (id: string): Promise<IEmployee | null> => {
    return Employee.findById(id).populate('department').exec();
};

export const updateEmployee = async (id: string, employeeData: IEmployee): Promise<IEmployee | null> => {
    return Employee.findByIdAndUpdate(id, employeeData, { new: true }).populate('department').exec();
};

export const deleteEmployee = async (id: string): Promise<void> => {
    await Employee.findByIdAndDelete(id);
};
