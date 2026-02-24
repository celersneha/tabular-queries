export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  MANAGER = "MANAGER",
}

export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum Department {
  HR = "HR",
  TECHNICAL = "TECHNICAL",
  SALES = "SALES",
  MARKETING = "MARKETING",
  FINANCE = "FINANCE",
  OPERATIONS = "OPERATIONS",
}

export interface User {
  id: string;
  name: string;
  email: string;
  department: Department;
  status: Status;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
