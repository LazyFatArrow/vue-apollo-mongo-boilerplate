import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql';
import { User } from './user';
import { UsersService } from './users.service';

 @Resolver()
export class UsersResolvers {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Mutation()
  createUser(@Args('user') userData: CreateUserInput): Promise<User> {
    return this.usersService.createUser(userData)
  }
}