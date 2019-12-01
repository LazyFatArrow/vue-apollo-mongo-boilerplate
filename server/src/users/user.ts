import { Document } from 'mongoose';
import { UserRole } from 'src/graphql';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
}