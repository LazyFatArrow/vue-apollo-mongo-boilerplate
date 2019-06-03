import { Injectable, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user';
import { CreateUserInput } from '../graphql';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  findUserByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async createUser(userData: CreateUserInput): Promise<User> {
    const exists = await this.userModel.findOne({ username: userData.username });

    if (exists) {
      throw new ForbiddenException('user already exists');
    }

    return this.userModel.create({
      ...userData,
      password: bcrypt.hashSync(
        userData.password,
        Number(process.env.AUTH_SALT_ROUNDS)
      ),
    });
  }
}