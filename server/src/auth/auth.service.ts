import { JwtService } from '@nestjs/jwt';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './auth';
import { UserDto } from '../users/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(loginData: UserDto): Promise<string> {
    const user = await this.usersService.findUserByEmail(loginData.email);

    if (!user) {
      throw new ForbiddenException();
    }

    const valid = await bcrypt.compare(loginData.password, user.password);

    if (!valid) {
      throw new ForbiddenException();
    }

    return this.jwtService.sign({ email: user.email });
  }

  validateUser(payload: JwtPayload) {
    return this.usersService.findUserByEmail(payload.email);
  }
}