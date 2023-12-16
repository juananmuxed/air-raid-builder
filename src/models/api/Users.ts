import { Role } from './Roles';

export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  roleId: number;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
}
